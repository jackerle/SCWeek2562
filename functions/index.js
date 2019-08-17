const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const app = express();
const admin = require('firebase-admin');




var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 
admin.initializeApp(functions.config().firebase);
// Get a database reference to our posts
var db = admin.database();
// Automatically allow cross-origin requests
app.use(cors({ origin: true }));
// build multiple CRUD interfaces:

app.get('/modals', (req, res) => {
  res.send('Hello world')
});

app.get('/getList',(req,res)=>{
  var ref = db.ref("test")
  ref.once("value",function(snapshot){
    res.send(JSON.stringify(snapshot.val()))
  })
})

app.get('/sendDat',(req,res)=>{
  var n = db.ref("count")
  n.once("value",function(snapshot){
    var count= JSON.stringify(snapshot.val())
    n.set(parseInt(count)+1)
    res.send(200)
  })
  /*var ref = db.ref("test/"+req.query.n)
  ref.set({
    id:"hello"
  })*/
})

app.post('/teacher_api',(req,res)=>{
  var n = db.ref("count")
  var na = String(req.body.name)
  var lastna = String(req.body.lastname)
  var gen = String(req.body.gender)
  var sch = String(req.body.school)
  var std_n = String(req.body.student_n)
  n.once("value",function(snapshot){
    let o_count= JSON.stringify(snapshot.val())
    let count = parseInt(o_count)+1
    let ref = db.ref("test/"+count)
    let obj = {
      id:count,
      name:na+" "+lastna,
      gender:gen,
      school:sch,
      student_number:std_n
    }
    ref.set(obj)
    n.set(count)
    res.send(JSON.stringify(obj))
  })
})

// Expose Express API as a single Cloud Function:
exports.api = functions.https.onRequest(app);