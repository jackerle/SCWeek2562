var teacher_button = document.getElementById("teacher_button")
var student_button = document.getElementById("student_button")
var people_button = document.getElementById("people_button")
teacher_button.onclick = function(){
    if(document.getElementById("tname").value ===""||document.getElementById("tlastname")===""){
        alert("กรุณากรอกข้อมูลให้ครบถ้วน");
    }
    else{
        document.getElementById("tname").disabled = true
        document.getElementById("tlastname").disabled = true
        document.getElementById("tschool").disabled = true
        document.getElementById("tnumber").disabled = true
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
student_button.onclick = function(){
    if(document.getElementById("sname").value ===""||document.getElementById("slastname")===""){
        alert("กรุณากรอกข้อมูลให้ครบถ้วน");
    }
    else{
        document.getElementById("sname").disabled = true
        document.getElementById("slastname").disabled = true
        document.getElementById("sschool").disabled = true
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
people_button.onclick = function(){
    if(document.getElementById("pname").value ===""||document.getElementById("plastname")===""){
        alert("กรุณากรอกข้อมูลให้ครบถ้วน");
    }
    else{
        document.getElementById("pname").disabled = true
        document.getElementById("plastname").disabled = true
        document.getElementById("page").disabled = true
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
