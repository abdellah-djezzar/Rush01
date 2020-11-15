document.getElementById("form").addEventListener("submit", function(e){

    var erreur;
    var nom = document.getElementById("nom");
    var email = document.getElementById("email");
    var naissance = document.getElementById("datenaiss");
    if (!naissance.value) {
      erreur = "Veuillez renseigner une date de naissance";
}

if (!email.value) {
      erreur = "Veuillez renseigner un email";
}

if (!nom.value) {
 erreur = "Veuillez renseigner un nom";
}


if (erreur) {
  e.preventDefault();
  document.getElementById("erreur").innerHTML = erreur;
  return false;
} else {
  alert('Formulaire envoyé !');
}

});