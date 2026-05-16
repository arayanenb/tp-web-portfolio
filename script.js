const inputname = document.getElementById("name");
const inputemail = document.getElementById("email");
const inputpassword = document.getElementById("password");
const inputage = document.getElementById("age");
const submitBtn = document.getElementById("submitBtn");

console.log(inputname, inputemail, inputpassword, inputage, submitBtn);

submitBtn.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("Nom : " + inputname.value);
  console.log("Email : " + inputemail.value);
  console.log("Mot de passe : " + inputpassword.value);
  console.log("Âge : " + inputage.value);
  alert("Name: " + inputname.value + "\nEmail: " + inputemail.value + "\nMot de passe: " + inputpassword.value + "\nÂge: " + inputage.value);
});

