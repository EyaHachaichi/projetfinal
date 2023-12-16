var likes = document.getElementsByClassName("like");
console.log(likes);
for (let i = 0; i < likes.length; i++) {
  likes[i].addEventListener("click", function () {
    if (likes[i].style.color == "white") {
      likes[i].style.color = "orange";
    } else {
      likes[i].style.color = "white";
    }
  });
}
var nom = document.getElementById("nom").value;
console.log(nom);
var prenom = document.getElementById("prenom");
var telephone = document.getElementById("telephone");
var email = document.getElementById("email");
var personne = document.getElementById("persone");
function verif() {
  if (nom == "") {
    alert("Nom ne doit pas etre vide");
    return false;
  } else if (nom.length < 5) {
    alert("Nom doit etre au minimum 5 caracteres");
    return false;
  } else if (prenom == "") {
    alert("Prenom ne doit pas etre vide");
    return false;
  } else if (prenom.length < 5) {
    alert("Prenom doit etre au minimum 5 caracteres");
    return false;
  } else if (telephone == "") {
    alert("Telephone ne doit pas etre vide");
    return false;
  } else if (isNaN(telephone)) {
    alert("Telephone doit etre seulement des nombres");
    return false;
  } else if (telephone.length < 8) {
    alert("Telephone doit etre au minimum 8 nombres");
    return false;
  } else if (email.length < 10) {
    alert("Email doit etre au minimum 10 caracteres");
    return false;
  } else if (email.indexOf("@") > email.indexOf(".")) {
    alert("Email Invalide");
    return false;
  } else if (isNaN(personne)) {
    alert("Personne doit etre seulement des nombres");
    return false;
  } else if (
    document.getElementById("html").checked == false &&
    document.getElementById("css").checked == false &&
    document.getElementById("js").checked == false &&
    document.getElementById("php").checked == false
  ) {
    alert("Selectioner un case");
    return false;
  }

  alert("Submited");
  return true;
}
