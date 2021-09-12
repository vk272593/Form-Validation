const form = document.getElementById("form");

const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const container = document.getElementById("container");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});
function checkInputs() {
  //get the value from input
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  if (usernameValue === "") {
    //show error
    //add error class
    setErrorFor(username, `Username can't be blank`);
  } else {
    setSuccessFor(username);
  }
  if (emailValue === "") {
    setErrorFor(email, `Email can't be blank`);
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Not a valid email");
  } else {
    setSuccessFor(email);
  }
  if (passwordValue === "") {
    setErrorFor(password, `Password can't be blank`);
  } else {
    setSuccessFor(password);
  }
  if (password2Value === "") {
    setErrorFor(password2, `Password2 can't be blank`);
  } else if (passwordValue !== password2Value) {
    setErrorFor(password2, `Password does't match`);
  } else {
    setSuccessFor(password2);
    
  }
  successMsg();
}
function setErrorFor(input, message) {
  const formControl = input.parentElement;

  const small = formControl.querySelector("small");
  //add error message
  small.innerText = message;
  //add error class
  formControl.className = "form-control error";
}
function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}
function isEmail(email) {
  return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
function successMsg(){
    let count=0;
    const successClass = document.getElementsByClassName('form-control');
     for(let i=0;i<successClass.length;i++){
       if(successClass[i].className==='form-control success')
       count++
       console.log(count);
     }
    if(count==successClass.length){
        printSubmitMsg();
    }
}
function printSubmitMsg(){
    alert('Form Submitted Successfully')
}
