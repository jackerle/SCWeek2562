var teacher_button = document.getElementById("teacher_button")
var student_button = document.getElementById("student_button")
var people_button = document.getElementById("people_button")
var tdone = document.getElementById("teacher-done")
var sdone = document.getElementById("student-done")
var pdone = document.getElementById("people-done")
teacher_button.onclick = function(){
    if(document.getElementById("tname").value ===""||document.getElementById("tlastname")===""||document.getElementById("tschool")===""||document.getElementById("tnumber")===""){
        alert("กรุณากรอกข้อมูลให้ครบถ้วน");
    }
    else{
        document.getElementById("tname").disabled = true;
        document.getElementById("tlastname").disabled = true;
        document.getElementById("tschool").disabled = true;
        document.getElementById("tnumber").disabled = true;
        teacher_button.disabled = true;
        tdone.disabled = false;
        let qrcode = new QRCode("qrcode1",{
            text: "testja",
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
student_button.onclick = function(){
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
        let qrcode = new QRCode("qrcode2",{
            text: "testja",
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