document.getElementById("trial-btn").addEventListener("click", function(){

  console.log()

if (!document.getElementById("first-name").value){
  document.getElementById("first-name-error").innerHTML = "First name cannot be empty.";
  document.getElementById("first-name").classList.add("error-input");
} else {
  document.getElementById("first-name").classList.remove("error-input");
  document.getElementById("first-name-error").innerHTML = "";
}

if (!document.getElementById("last-name").value){
  document.getElementById("last-name-error").innerHTML = "Last name cannot be empty.";
  document.getElementById("last-name").classList.add("error-input");
} else {
  document.getElementById("last-name").classList.remove("error-input");
  document.getElementById("last-name-error").innerHTML = "";
}

if (!document.getElementById("password").value){
  document.getElementById("password-error").innerHTML = "Password cannot be empty.";
  document.getElementById("password").classList.add("error-input");
} else {
  document.getElementById("password").classList.remove("error-input");
  document.getElementById("password-error").innerHTML = "";
}

if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(document.getElementById("email").value))
  {
    document.getElementById("email").classList.remove("error-input");
    document.getElementById("email-error").innerHTML = "";
  } else {
    document.getElementById("email").classList.add("error-input");
    document.getElementById("email-error").innerHTML = "Please enter a valid email.";
}

})
