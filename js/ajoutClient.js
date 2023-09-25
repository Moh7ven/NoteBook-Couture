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

btnMan.addEventListener("click", (e) => {
  e.preventDefault();
  //   validateFormMan();
  addMan();
});
