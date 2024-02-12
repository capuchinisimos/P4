// Fonction pour modifier la navigation (responsive)
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// Sélection des éléments du DOM
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const close = document.querySelector(".close");
const firstName = document.querySelector("#first");
const lastName = document.querySelector("#last");
const email = document.querySelector("#email");
const birthdate = document.querySelector("#birthdate");
const quantity = document.querySelector("#quantity");
const cityRadios = document.getElementsByName('location');
const terms = document.querySelector("#checkbox1");
const regexNames = /^[a-zA-ZÀ-ÖØ-öø-ÿ]+$/;
const regexMail = /^[^@\s]+@[^@\.\s]+(\.[^@\.\s]+)+$/;
const regexNumbers = /^[0-9][0-9]?$|^99$/;
const form = document.querySelector("#form");
const validMessage = document.querySelector("#valide");
const btnFermer = document.querySelector(".close_btn");

// Messages d'erreurs
const errorFirstName = document.querySelector("#first_error");
const errorLastName = document.querySelector("#last_error");
const errorEmail = document.querySelector("#email_error");
const errorBirthdate = document.querySelector("#birthdate_error");
const errorQuantity = document.querySelector("#quantity_error");
const errorCity = document.querySelector("#city_error");
const errorTerms = document.querySelector("#checkbox_error");







// Fonction de validation du prénom (doit avoir au moins 2 caractères et ne doit pas contenir de caractères spéciaux, ça envoie true ou false)
function firstNameChecker() {

  if ((firstName.value.length < 2) || (firstName.value === '')
    || (!firstName.value.match(regexNames))) {
    errorFirstName.innerHTML =
      "Veuillez entrer 2 caractères ou plus pour le champ de prénom";
    errorFirstName.style.display = "block";

    firstName.style.border = "solid red 2px";

    return false;

  }
  else {
    errorFirstName.style.display = "none";
    firstName.style.border = "none";
    form.style.display = "block";

    return true;
  }
}


// Fonction de validation du nom (doit avoir au moins 2 caractères et ne doit pas contenir de caractères spéciaux, ça envoie true ou false)
function lastNameChecker() {

  if ((lastName.value.length < 2) || (lastName.value === '')
    || (!lastName.value.match(regexNames))) {
    errorLastName.innerHTML =
      "Veuillez entrer 2 caractères ou plus pour le champ du nom";
    errorLastName.style.display = "block";

    lastName.style.border = "solid red 2px";

    return false;

  }
  else {
    errorLastName.style.display = "none";
    lastName.style.border = "none";
    form.style.display = "block";

    return true;
  }
}

// Fonction de validation de l'e-mail (doit avoir au moins 2 caractères et doit être au format valide) 
function emailChecker() {
  if ((email.value.length < 2)
  ) {
    errorEmail.innerHTML =
      "Veuillez entrer 2 caractères ou plus pour le champ de mail";
    errorEmail.style.display = "block";

    email.style.border = "solid red 2px";

    return false;


  } else if (!email.value.match(regexMail)) {
    errorEmail.innerHTML =
      "Veuillez rentrez un format de mail valide";
    errorEmail.style.display = "block";
    email.style.border = "solid red 2px";
    return false;
  }

  else {
    errorEmail.style.display = "none";
    email.style.border = "none";
    form.style.display = "block";

    return true;
  }
}

// Fonction de validation de la date de naissance (doit être renseignée)
function birthdateChecker() {
  if (!birthdate.value) {
    errorBirthdate.innerHTML = "Veuillez renseigner votre date d'anniversaire";
    errorBirthdate.style.display = "block";
    birthdate.style.border = "solid red 2px";
    return false;
  } else {
    errorBirthdate.style.display = "none";
    birthdate.style.border = "none";
    return true;
  }
}

// Fonction de validation de la quantité de tournois (doit être renseignée et comprise entre 0 et 99)
function quantityChecker() {
  if ((quantity.value.length == 0)) {
    errorQuantity.innerHTML =
      "Veuillez renseigner votre nombre de participation";
    errorQuantity.style.display = "block";
    quantity.style.border = "solid red 2px";
    return false;
  }
  else if (parseInt(quantity.value) < 0 || parseInt(quantity.value) > 99) {
    errorQuantity.innerHTML =
      "Doit être compris entre 0 et 99";
    errorQuantity.style.display = "block";
    quantity.style.border = "solid red 2px";
    return false;
  }
  else {
    errorQuantity.style.display = "none";
    quantity.style.border = "none";
    return true;
  }
}



// Fonction de validation de la ville (au moins une option doit être choisie)
function cityChecker() {
  let isChecked = false;

  for (let cityRadio of cityRadios) {
    if (cityRadio.checked) {
      isChecked = true;
      break;
    }
  }
  if (
    !isChecked
  ) {
    document.getElementById("city_error").innerHTML = 'Vous devez choisir une option.';
    return false;

  } else {
    document.getElementById("city_error").innerHTML = '';
    return true;
  }
}




// Fonction de validation de la charte d'utilisation (doit être acceptée)
function termsChecker() {
  if (terms.checked == false) {
    errorTerms.innerHTML = "Merci d'accepter les conditions d'utilisations";
    errorTerms.style.display = "block";
    return false;
  } else {
    errorTerms.style.display = "none";
    return true;
  }
};

//Gestionnaire de soumission de formulaire
form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (

    firstNameChecker() &&
    lastNameChecker() &&
    emailChecker() &&
    birthdateChecker() &&
    quantityChecker() &&
    cityChecker() &&
    termsChecker()

  ) {
    form.reset();
    validMessage.style.display = "block";
  }

});
// Gestionnaire de fermeture du modal
btnFermer.addEventListener("click", closeModalValide);


function closeModalValide() {
  modalbg.style.display = "none";
  valide.style.display = "none";
}
close.addEventListener("click", closeModalValide);


// Gestionnaire de lancement du modal
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

function launchModal() {
  modalbg.style.display = "block";
}