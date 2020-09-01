// function TeacherLogin(event) {
// 	var type =
// 	document.getElementById("teachClick").value;
// 	var message = " Login as Teacher";
// }
// document
// .getElementById("who")
// .innerHTML = message;


function TeacherLogin(event) {
 	const btn = document.querySelector('#buon');
 	const rbs = document.querySelectorAll('input[name ="choice"]');
	let selectedValue;
	for(const rb of rbs){
		if (rb.checked) {
			selectedValue = rb.value;
document.getElementById("who").innerHTML = selectedValue;
		}
			if ((selectedValue == "Login As Teacher") || (selectedValue == "Login As Administrator")) {
		var txt = "Username:"
		document.getElementById("enroll").style.display = "none";
		document.getElementById("tea").innerHTML= txt;
		document.getElementById("tea").style.display = "block";
	}else{
		document.getElementById("enroll").style.display = "block";
		document.getElementById("tea").style.display = "none";
	}
		
	} 	


	// alert(selectedValue);

	// if (confirm(selectedValue) {
	// 	txt = "Login As " +selectedValue +"!";
	// }
	// else{
	// 	txt = "Select your occupation." 
	// }

	// $("toid").update("Username :");
 } 

 function loadtea(event){
 	document.getElementById("tea").style.display = "none";
 }
 window.onload = loadtea;


var changewel =  document.querySelector("h4");
 var isblue = false;

 setInterval(function () {
 	if (isblue) {
 		changewel.style.color = "blue";
 	}else{
 		changewel.style.color = "#a90b2f";
 	}
 	isblue = !isblue;
 }, 800);






const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#password');
console.log(togglePassword);
togglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
});



