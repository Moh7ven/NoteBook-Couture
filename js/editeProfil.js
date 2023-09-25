let session = JSON.parse(sessionStorage.getItem("session"));
let local = JSON.parse(localStorage.getItem("couturier"));
let save = document.querySelector("#save");

let nomPrenom = document.querySelector("#identName");
let nomEdit = document.querySelector("#nomEdit");
let prenomEdit = document.querySelector("#prenomEdit");
let emailEdit = document.querySelector("#emailEdit");
let sexeEdit = document.querySelector("#sexeEdit");

function validateForm() {
  let nom = document.querySelector("#nom-user").value;
  let prenom = document.querySelector("#prenom-user").value;
  let email = document.querySelector("#email-user").value;
  let sexe = document.querySelector("#sexe-user").value;
  let mdp = document.querySelector("#password-user").value;
  let mdpConfir = document.querySelector("#conf-password-user").value;

  if (nom === "") {
    alert("Veuillez entrer votre Nom s'il vous plait");
    return false;
  }

  if (prenom === "") {
    alert("Veuillez entrer votre Prenom s'il vous plait");
    return false;
  }

  if (email === "") {
    alert("Veuillez entrer votre Email s'il vous plait");
    return false;
  } else if (!email.includes("@")) {
    alert("Veuillez entrer une adresse Email valide !");
    return false;
  }

  if (sexe === "") {
    alert("Veuillez entrer votre Sexe s'il vous plait");
    return false;
  }

  if (mdp === "") {
    alert("Veuillez entrer un MOT DE PASSE s'il vous plait");
    return false;
  }

  if (mdpConfir == "") {
    alert("Veuillez Confirmer votre MOT DE PASSE s'il vous plait");
    return false;
  }

  if (mdpConfir !== mdp) {
    alert("Vos mot de passe ne correspondent pas");
    return false;
  }

  return true;
}

if (!session) {
  nomPrenom.textContent = "<Vous n'êtes pas connecter>";
  alert("Veuillez vous connecter !");
  window.location.href = "../pages/connexion.html";
} else {
  console.log("vous êtes connecter");

  nomPrenom.textContent = `${session.prenomCouturier.toLowerCase()} ${session.nomCouturier.toUpperCase()}`;
  nomEdit.textContent = session.nomCouturier;
  prenomEdit.textContent = session.prenomCouturier.toLowerCase();
  emailEdit.textContent = session.emailCouturier;
  sexeEdit.textContent = session.sexeCouturier.toLowerCase();

  document.querySelector("#nom-user").value = session.nomCouturier;
  document.querySelector("#prenom-user").value = session.prenomCouturier;
  document.querySelector("#email-user").value = session.emailCouturier;
  document.querySelector("#sexe-user").value = session.sexeCouturier;
  document.querySelector("#password-user").value = session.motDePasseCouturier;
  document.querySelector("#conf-password-user").value =
    session.confirMdpCouturier;
}

function updateUser() {
  if (validateForm() === true) {
    let nom = document.querySelector("#nom-user").value;
    let prenom = document.querySelector("#prenom-user").value;
    let email = document.querySelector("#email-user").value;
    let sexe = document.querySelector("#sexe-user").value;
    let mdp = document.querySelector("#password-user").value;
    let mdpConfir = document.querySelector("#conf-password-user").value;

    local.find((element) => {
      if (email === element.emailCouturier) {
        element.nomCouturier = nom;
        element.prenomCouturier = prenom;
        element.sexeCouturier = sexe;
        element.email = email;
        element.motDePasseCouturier = mdp;
        element.confirMdpCouturier = mdpConfir;

        sessionStorage.setItem("session", JSON.stringify(local));
        localStorage.setItem("couturier", JSON.stringify(local));

        /* let session = JSON.parse(sessionStorage.getItem("session")); */

        console.log("Informations de l'utilisateur mises à jour avec succès.");

        window.location.href = "../pages/profil.html";
      } else {
        console.log("Utilisateur non trouvé. Aucune mise à jour effectuée.");
      }
    });
  }
  
}

save.addEventListener("click", (e) => {
  //   e.preventDefault();
  updateUser();
});
