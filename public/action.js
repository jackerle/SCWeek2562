var teacher_button = document.getElementById("teacher_button")
var student_button = document.getElementById("student_button")
var people_button = document.getElementById("people_button")
var tdone = document.getElementById("teacher-done")
var sdone = document.getElementById("student-done")
var pdone = document.getElementById("people-done")
var p1 = document.getElementById("print1")
var p2 = document.getElementById("print2")
var p3=  document.getElementById("print3")
teacher_button.onclick = async function(){
        let tname = document.getElementById("tname")
        console.log(typeof(tname.value))
        let tlastname = document.getElementById("tlastname")
        let tschool = document.getElementById("tschool")
        let tnumber = document.getElementById("tnumber")
        let tgender
        if(document.getElementById('tmale').checked==true)tgender='male'
        else tgender = 'female'
    let obj = await fetch("https://us-central1-scweek62-7febd.cloudfunctions.net/api/teacher_api",{
        method:'POST',
        cache:'no-cache',
        headers:{
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        referrer: 'no-referrer', // no-referrer, *client
        body:'name='+tname.value+'&lastname='+tlastname.value+'&gender='+tgender+'&school='+tschool.value+'&student_n='+tnumber.value,
    }).then(res => res.json())
    console.log(obj.id)
    if(document.getElementById("tname").value ===""||document.getElementById("tlastname")===""||document.getElementById("tschool")===""||document.getElementById("tnumber")===""){
        alert("กรุณากรอกข้อมูลให้ครบถ้วน");
    }
    else{
        tname.disabled = true;
        tlastname.disabled = true;
        tschool.disabled = true;
        tnumber.disabled = true;
        teacher_button.disabled = true;
        tdone.disabled = false;
        p1.disabled = false
        let qrcode = new QRCode("qrcode1",{
            text: String(obj.id),
            width: 256,
            height: 256,
            colorDark: "#990000",
            colorLight: "#ffffff",
            correctLevel : QRCode.CorrectLevel.H
        })

    }
}
tdone.onclick = function(){
    location.reload();
}
student_button.onclick = async function(){
    let sname = document.getElementById('sname')
    let slastname = document.getElementById('slastname')
    let sschool = document.getElementById('sschool')
    let sselect = document.getElementById('sselect')
    let sgender
        if(document.getElementById('smale').checked==true)sgender='male'
        else sgender = 'female'
        let obj = await fetch("https://us-central1-scweek62-7febd.cloudfunctions.net/api/student_api",{
        method:'POST',
        cache:'no-cache',
        headers:{
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        referrer: 'no-referrer', // no-referrer, *client
        body:'name='+sname.value+'&lastname='+slastname.value+'&gender='+sgender+'&school='+sschool.value+'&student_grade='+sselect.value,
    }).then(res => res.json())
    console.log(obj.id)
    if(document.getElementById("sname").value ===""||document.getElementById("slastname")===""||document.getElementById("sschool")===""){
        alert("กรุณากรอกข้อมูลให้ครบถ้วน");
    }
    else{
        document.getElementById("sname").disabled = true
        document.getElementById("slastname").disabled = true
        document.getElementById("sschool").disabled = true
        document.getElementById("sselect").disabled = true
        student_button.disabled = true
        sdone.disabled = false
        p2.disabled = false
        let qrcode = new QRCode("qrcode2",{
            text: String(obj.id),
            width: 256,
            height: 256,
            colorDark: "#990000",
            colorLight: "#ffffff",
            correctLevel : QRCode.CorrectLevel.H
        })
    }
}
sdone.onclick = function(){
    location.reload();
}
people_button.onclick = function(){
    if(document.getElementById("pname").value ===""||document.getElementById("plastname")===""||document.getElementById("page")===""){
        alert("กรุณากรอกข้อมูลให้ครบถ้วน");
    }
    else{
        document.getElementById("pname").disabled = true
        document.getElementById("plastname").disabled = true
        document.getElementById("page").disabled = true
        people_button.disabled = true;
        pdone.disabled = false
        p3.disabled = false
        let qrcode = new QRCode("qrcode3",{
            text: "testja",
            width: 256,
            height: 256,
            colorDark: "#990000",
            colorLight: "#ffffff",
            correctLevel : QRCode.CorrectLevel.H
        })
    }
}
pdone.onclick = function(){
    location.reload();
}

p1.onclick = function(){
    //printqr
}
p2.onclick = function(){
    //printqr
}
p3.onclick = function(){
    //printqr
}