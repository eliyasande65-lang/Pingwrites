// JavaScript source code
document.getElementById("signupbtn").addEventListener('click', function(event){
	event.preventDefault();
	let key=document.getElementById("pass").value;
	let confirm=document.getElementById("pass1").value;
	if (key==confirm){
		window.location.href="home.html";
	}
	else if(key==""){
		document.getElementById("spfeed").innerHTML="Please fill in the password";
	}
	else {
		document.getElementById("spfeed").innerHTML="Password Mismatch";
	}
});