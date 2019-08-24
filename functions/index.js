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
  let ref = db.ref("test")
  ref.once("value",function(snapshot){
    res.send(JSON.stringify(snapshot.val()))
  })
})

app.get('/getTeacher',(req,res)=>{
  let ref = db.ref("test/teacher")
  ref.once("value",function (snapshot){
    res.send(JSON.stringify(snapshot.val()))
  })
})

app.get('/getRoom',(req,res)=>{
  let ref = db.ref("checkin")
  ref.once("value",function (snapshot){
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


app.get('/printqr/:id',(req,res)=>{
  res.send(`<!DOCTYPE html>
  <head>
     
      <title>printQR</title>
  </head>
  <body onload="initial()">
      <div id="qrcode">
  
      </div>
      <p style="font-size:14px">ID:${String(req.params.id)}</p>
      <p style="font-size:14px">ชื่อ:${String(req.query.name)}</p>
      <p style="font-size:14px">นามสกุล:${String(req.query.lname)}</p>
      
  </body >
  <script type="text/javascript" src="https://scweek62-7febd.firebaseapp.com/qrcode.js"></script>
  <script>
  function initial(){
  let qrcode = new QRCode("qrcode",{
         text: "${String(req.params.id)}",
         width: 150,
         height: 150,
         colorDark: "#990000",
         colorLight: "#ffffff",
         correctLevel : QRCode.CorrectLevel.H
     })
     window.print()
     window.close()
    }
 </script>
  
  </html>`)
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
    let ref = db.ref("test/teacher/"+count)
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











app.post('/student_api',(req,res)=>{
  var n = db.ref("count")
  var na = String(req.body.name)
  var lastna = String(req.body.lastname)
  var gen = String(req.body.gender)
  var sch = String(req.body.school)
  var std_g = String(req.body.student_grade)
  n.once("value",function(snapshot){
    let o_count= JSON.stringify(snapshot.val())
    let count = parseInt(o_count)+1
    let ref = db.ref("test/student/"+count)
    let obj = {
      id:count,
      name:na+" "+lastna,
      gender:gen,
      school:sch,
      student_grade:std_g
    }
    ref.set(obj)
    n.set(count)
    res.send(JSON.stringify(obj))
  })
})

app.post('/people_api',(req,res)=>{
  var n = db.ref("count")
  var na = String(req.body.name)
  var lastna = String(req.body.lastname)
  var gen = String(req.body.gender)
  var a = String(req.body.age)
  n.once("value",function(snapshot){
    let o_count= JSON.stringify(snapshot.val())
    let count = parseInt(o_count)+1
    let ref = db.ref("test/people/"+count)
    let obj = {
      id:count,
      name:na+" "+lastna,
      gender:gen,
      age:a
    }
    ref.set(obj)
    n.set(count)
    res.send(JSON.stringify(obj))
  })
})





app.post('/checkin/1',(req,res)=>{
  let id = String(req.body.id)
  ref = db.ref("checkin/room1/"+id)
  ref.set({
    status:"ok"
  })
  res.send(200)
})
app.post('/checkin/2',(req,res)=>{
  let id = String(req.body.id)
  ref = db.ref("checkin/room2/"+id)
  ref.set({
    status:"ok"
  })
  res.send(200)
})

app.post('/checkin/3',(req,res)=>{
  let id = String(req.body.id)
  ref = db.ref("checkin/room3/"+id)
  ref.set({
    status:"ok"
  })
  res.send(200)
})






// Expose Express API as a single Cloud Function:
exports.api = functions.https.onRequest(app);