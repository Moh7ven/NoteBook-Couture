let session = JSON.parse(sessionStorage.getItem("session"));
let local = JSON.parse(localStorage.getItem("couturier"));

let btnMan = document.querySelector("#saveMan");
let btnWoman = document.querySelector("#saveWoman");
let nomPrenom = document.querySelector("#identName");

if (!session) {
  nomPrenom.textContent = "<Vous n'êtes pas connecter>";
  alert("Veuillez vous connecter !");
  window.location.href = "../pages/connexion.html";
} else {
  console.log("vous êtes connecter");

  nomPrenom.textContent = `${session.prenomCouturier.toLowerCase()} ${session.nomCouturier.toUpperCase()}`;
}

//Fonction pour verifier les données une fois soumis.
function validateFormMan() {
  let poitrineHom = document.querySelector("#poitrine-hom").value;
  let epauleHom = document.querySelector("#epaule-hom").value;
  let longMancheHom = document.querySelector("#longManche-hom").value;
  let tourMancheHom = document.querySelector("#tourManche-hom").value;
  let bassinHom = document.querySelector("#bassin-hom").value;
  let ceintureHom = document.querySelector("#ceinture-hom").value;
  let cuisseHom = document.querySelector("#cuisse").value;
  let longPantalonHom = document.querySelector("#longPantalon-hom").value;
  let bassinPantalonHom = document.querySelector("#bassinPantalon-hom").value;

  let nomHom = document.querySelector("#nomClient-hom").value;
  let prenomHom = document.querySelector("#prenomClient-hom").value;
  let adresseHom = document.querySelector("#adresseClient-hom").value;
  let telephoneHom = document.querySelector("#telephone-hom").value;
  let sommeHom = document.querySelector("#sommeClient-hom").value;
  let dateRetraitHom = document.querySelector("#dateRetrait-hom").value;

  if (poitrineHom === "") {
    alert("Veuillez entrer la poitrine du client s'il vous plait");
    return false;
  }

  if (epauleHom === "") {
    alert("Veuillez entrer l'épaule du client s'il vous plait");
    return false;
  }

  if (longMancheHom === "") {
    alert("Veuillez entrer la longueur de manche du client s'il vous plait");
    return false;
  }

  if (tourMancheHom === "") {
    alert("Veuillez entrer la tour de manche du client s'il vous plait");
    return false;
  }

  if (bassinHom === "") {
    alert("Veuillez entrer le bassin du client s'il vous plait");
    return false;
  }

  if (ceintureHom === "") {
    alert("Veuillez entrer la ceinture du client s'il vous plait");
    return false;
  }

  if (cuisseHom === "") {
    alert("Veuillez entrer la cuisse du client s'il vous plait");
    return false;
  }

  if (longPantalonHom === "") {
    alert("Veuillez entrer la longueur pantalon du client s'il vous plait");
    return false;
  }

  if (bassinPantalonHom === "") {
    alert("Veuillez entrer le bassin du pantalon du client s'il vous plait");
    return false;
  }

  if (nomHom === "") {
    alert("Veuillez entrer le Nom du client s'il vous plait");
    return false;
  }

  if (prenomHom === "") {
    alert("Veuillez entrer le Prenom  du client s'il vous plait");
    return false;
  }

  if (adresseHom === "") {
    alert("Veuillez entrer votre l'adresse du clien'il vous plait");
    return false;
  }

  if (telephoneHom === "") {
    alert("Veuillez entrer le numero de téléphone du client s'il vous plait");
    return false;
  }

  if (sommeHom == "") {
    alert("Veuillez entrer la somme versée par le client s'il vous plait");
    return false;
  }

  if ((dateRetraitHom = "")) {
    alert("Veuillez entrer la somme versée par le client s'il vous plait");
    return false;
  }

  return true;
}

function validateFormFem() {
  let poitrineFem = document.querySelector("#poitrine-fem").value;
  let tailleFem = document.querySelector("#Taille-fem").value;
  let longTailleFem = document.querySelector("#longTaille-fem").value;
  let bassinFem = document.querySelector("#bassin-fem").value;
  let longMancheFem = document.querySelector("#longManche-fem").value;
  let tourMancheFem = document.querySelector("#tourManche-fem").value;
  let ceintureFem = document.querySelector("#ceinture-fem").value;

  let bassinJupeFem = document.querySelector("#bassinJupe").value;
  let ceintureJupeFem = document.querySelector("#ceintureJupe").value;
  let longueurJupeFem = document.querySelector("#longueurJupe").value;

  let nomFem = document.querySelector("#nomClient-fem").value;
  let prenomFem = document.querySelector("#prenomClient-fem").value;
  let adresseFem = document.querySelector("#adresseClient-fem").value;
  let telephoneFem = document.querySelector("#telephone-fem").value;
  let sommeFem = document.querySelector("#sommeClient-fem").value;
  let dateRetraitFem = document.querySelector("#dateRetrait-fem").value;

  if (poitrineFem === "") {
    alert("Veuillez entrer la poitrine de la cliente s'il vous plait");
    return false;
  }

  if (tailleFem === "") {
    alert("Veuillez entrer la taille de la cliente s'il vous plait");
    return false;
  }

  if (longTailleFem === "") {
    alert("Veuillez entrer la longueur taille de la cliente s'il vous plait");
    return false;
  }

  if (bassinFem === "") {
    alert("Veuillez entrer le bassin de la cliente s'il vous plait");
    return false;
  }

  if (longMancheFem === "") {
    alert(
      "Veuillez entrer la longueur de manche de la cliente s'il vous plait"
    );
    return false;
  }

  if (tourMancheFem === "") {
    alert("Veuillez entrer le tour de manche de la cliente s'il vous plait");
    return false;
  }

  if (ceintureFem === "") {
    alert("Veuillez entrer la ceinture de la cliente s'il vous plait");
    return false;
  }

  if (bassinJupeFem === "") {
    alert("Veuillez entrer le bassin de jupe de la cliente s'il vous plait");
    return false;
  }

  if (ceintureJupeFem === "") {
    alert("Veuillez entrer la ceinture de jupe de la cliente s'il vous plait");
    return false;
  }

  if (longueurJupeFem === "") {
    alert("Veuillez entrer la longueur de jupe de la cliente s'il vous plait");
    return false;
  }

  if (nomFem === "") {
    alert("Veuillez entrer le Nom de la cliente s'il vous plait");
    return false;
  }

  if (prenomFem === "") {
    alert("Veuillez entrer le Prenom  de la cliente s'il vous plait");
    return false;
  }

  if (adresseFem === "") {
    alert("Veuillez entrer votre l'adresse de la cliente s'il vous plait");
    return false;
  }

  if (telephoneFem === "") {
    alert(
      "Veuillez entrer le numero de téléphone de la cliente s'il vous plait"
    );
    return false;
  }

  if (sommeFem == "") {
    alert("Veuillez entrer la somme versée par la cliente s'il vous plait");
    return false;
  }

  if ((dateRetraitFem = "")) {
    alert("Veuillez entrer la somme versée par la cliente s'il vous plait");
    return false;
  }

  return true;
}

function addMan() {
  if (validateFormMan() === true) {
    let poitrineHom = document.querySelector("#poitrine-hom").value;
    let epauleHom = document.querySelector("#epaule-hom").value;
    let longMancheHom = document.querySelector("#longManche-hom").value;
    let tourMancheHom = document.querySelector("#tourManche-hom").value;
    let bassinHom = document.querySelector("#bassin-hom").value;
    let ceintureHom = document.querySelector("#ceinture-hom").value;
    let cuisseHom = document.querySelector("#cuisse").value;
    let longPantalonHom = document.querySelector("#longPantalon-hom").value;
    let bassinPantalonHom = document.querySelector("#bassinPantalon-hom").value;

    let nomHom = document.querySelector("#nomClient-hom").value;
    let prenomHom = document.querySelector("#prenomClient-hom").value;
    let adresseHom = document.querySelector("#adresseClient-hom").value;
    let telephoneHom = document.querySelector("#telephone-hom").value;
    let sommeHom = document.querySelector("#sommeClient-hom").value;
    let dateRetraitHom = document.querySelector("#dateRetrait-hom").value;

    let data = {
      poitrineHom: poitrineHom,
      epauleHom: epauleHom,
      longMancheHom: longMancheHom,
      tourMancheHom: tourMancheHom,
      bassinHom: bassinHom,
      ceintureHom: ceintureHom,
      cuisseHom: cuisseHom,

      longPantalonHom,
      longPantalonHom,
      bassinPantalonHom: bassinPantalonHom,

      nomHom: nomHom,
      prenomHom: prenomHom,
      adresseHom: adresseHom,
      telephoneHom: telephoneHom,
      sommeHom: sommeHom,
      dateRetraitHom: dateRetraitHom,
    };

    console.log(data);

    let clientHom = localStorage.getItem("clientHom");

    if (clientHom === null) {
      clientHom = [];

      clientHom.push(data);

      localStorage.setItem("clientHom", JSON.stringify(clientHom));

      window.location.href = "../pages/ajouterClient.html";
    } else {
      clientHom = JSON.parse(clientHom);

      clientHom.push(data);
      localStorage.setItem("clientHom", JSON.stringify(clientHom));
      window.location.href = "../pages/ajouterClient.html";
    }
  }
}

function addFem() {
  if (validateFormFem() === true) {
    let poitrineFem = document.querySelector("#poitrine-fem").value;
    let tailleFem = document.querySelector("#Taille-fem").value;
    let longTailleFem = document.querySelector("#longTaille-fem").value;
    let bassinFem = document.querySelector("#bassin-fem").value;
    let longMancheFem = document.querySelector("#longManche-fem").value;
    let tourMancheFem = document.querySelector("#tourManche-fem").value;
    let ceintureFem = document.querySelector("#ceinture-fem").value;

    let bassinJupeFem = document.querySelector("#bassinJupe").value;
    let ceintureJupeFem = document.querySelector("#ceintureJupe").value;
    let longueurJupeFem = document.querySelector("#longueurJupe").value;

    let nomFem = document.querySelector("#nomClient-fem").value;
    let prenomFem = document.querySelector("#prenomClient-fem").value;
    let adresseFem = document.querySelector("#adresseClient-fem").value;
    let telephoneFem = document.querySelector("#telephone-fem").value;
    let sommeFem = document.querySelector("#sommeClient-fem").value;
    let dateRetraitFem = document.querySelector("#dateRetrait-fem").value;

    let data = {
      poitrineFem: poitrineFem,
      tailleFem: tailleFem,
      longTailleFem: longTailleFem,
      bassinFem: bassinFem,
      longMancheFem: longMancheFem,
      tourMancheFem: tourMancheFem,
      ceintureFem: ceintureFem,

      bassinJupeFem: bassinJupeFem,
      ceintureJupeFem: ceintureJupeFem,
      longueurJupeFem: longueurJupeFem,

      nomFem: nomFem,
      prenomFem: prenomFem,
      adresseFem: adresseFem,
      telephoneFem: telephoneFem,
      sommeFem: sommeFem,
      dateRetraitFem: dateRetraitFem,
    };

    console.log(data);

    let clientFem = localStorage.getItem("clientFem");

    if (clientFem === null) {
      clientFem = [];

      clientFem.push(data);

      localStorage.setItem("clientFem", JSON.stringify(clientFem));

      window.location.href = "../pages/ajouterClient.html";
    } else {
      clientFem = JSON.parse(clientFem);

      clientFem.push(data);
      localStorage.setItem("clientFem", JSON.stringify(clientFem));
      window.location.href = "../pages/ajouterClient.html";
    }
  }
}

btnMan.addEventListener("click", (e) => {
  e.preventDefault();
  //   validateFormMan();
  addMan();
});

btnWoman.addEventListener("click", (e) => {
  e.preventDefault();
  //   validateFormMan();
  addFem();
});
