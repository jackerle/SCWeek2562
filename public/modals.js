var modal_teacher = document.getElementById("teacher_Modal");
var modal_student = document.getElementById("student_Modal");
var modal_people = document.getElementById("people_Modal");
var teacher = document.getElementById("teacher_act");
var student = document.getElementById("student_act");
var people = document.getElementById("people_act");
var span1 = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close")[1];
var span3 = document.getElementsByClassName("close")[2];
student.onclick = function() {
    modal_student.style.display = "block";
  }
teacher.onclick = function() {
    modal_teacher.style.display = "block";
  }
people.onclick = function() {
    modal_people.style.display = "block";
  }
  span1.onclick = function() {
    modal_teacher.style.display = "none";
  }
  span2.onclick = function() {
    modal_student.style.display = "none";
  }
  span3.onclick = function() {
    modal_people.style.display = "none";
  }
  window.onclick = function(event) {
    if (event.target == modal_teacher) {
      modal_teacher.style.display = "none";
    }
    if (event.target == modal_student) {
        modal_student.style.display = "none";
      }
      if (event.target == modal_people) {
        modal_people.style.display = "none";
      }
  }
  //----------------------------------------------------------
  


  


 