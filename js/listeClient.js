let session = JSON.parse(sessionStorage.getItem("session"));
let nomPrenom = document.querySelector("#identName");

let clientHom = JSON.parse(localStorage.getItem("clientHom"));
let cleintFem = JSON.parse(localStorage.getItem("clientFem"));
console.log(clientHom);
// console.log(session);

if (!session) {
  nomPrenom.textContent = "<Vous n'êtes pas connecter>";
  alert("Veuillez vous connecter !");
  window.location.href = "../pages/connexion.html";
} else {
  nomPrenom.textContent = `${session.prenomCouturier.toLowerCase()} ${session.nomCouturier.toUpperCase()}`;
}

let currentDeleteIndexHom;

function setDeleteIndexHom(index) {
  currentDeleteIndexHom = index;
}

function showDataHom() {
  let html = "";

  let clientHom;
  if (localStorage.getItem("clientHom") == null) {
    clientHom = [];
  } else {
    clientHom = JSON.parse(localStorage.getItem("clientHom"));
  }

  clientHom.forEach((element, index) => {
    html += `
    <tr>
    <td>${index + 1}</td>
    <td>${element.nomHom}</td>
    <td>${element.prenomHom}</td>
    <td>${element.telephoneHom}</td>
    <td>${element.dateRetraitHom}</td>
    <td>${element.sommeHom}</td>
    <td class="dernier-td">
      <button class="btn-voirplus" onclick = "updateDataHom(${index})"><a href="#popup-voirplus-homme">Voir plus</a></button>
      <button class="btn-delete" ><a href="#popup-supprimer" onclick="setDeleteIndexHom(${index})">Supprimer</a></button>
    </td>
  </tr>

  <div id="popup-supprimer" class="overlay">
      <div class="overlay-content">
          <a class="close" href="#">&times;</a>
          <div class="popup">
              <div class="content-popup">
                  <section class="principal">
                      <div class="container-pop">
                          <form action="./acceuil.html">
                              <div class="titre-form-supprimer">
                                  <img src="../img/alerte.png" alt="logo-alert">
                              </div>
                              <div class="element">
                                  <div class="style-msg-alert">
                                  <span class="desc">ATTENTION!! Voulez-vous vraimment supprimer ce client ?</span>
                                  </div>
                                  <div class="yesOrNo">
                                      <button class="no" id="no" onclick = "noDelete()">Non</button>
                                      <button class="sup" id="supprimer" onclick="deleteDataHom(${index})">Oui</button>
                                  </div>
                          </form>
                      </div>
                  </section>
              </div>
          </div>
      </div>
    </div>

    `;
  });

  document.querySelector("#tableHom tbody").innerHTML = html;
}

let currentDeleteIndexFem;

function setDeleteIndexFem(index) {
  currentDeleteIndexFem = index;
}

function showDataFem() {
  let htmlFem = "";

  let clientFem;
  if (localStorage.getItem("clientFem") == null) {
    clientFem = [];
  } else {
    clientFem = JSON.parse(localStorage.getItem("clientFem"));
  }

  clientFem.forEach((element, index) => {
    htmlFem += `
    <tr>
    <td>${index + 1}</td>
    <td>${element.nomFem}</td>
    <td>${element.prenomFem}</td>
    <td>${element.telephoneFem}</td>
    <td>${element.dateRetraitFem}</td>
    <td>${element.sommeFem}</td>
    <td class="dernier-td">
      <button class="btn-voirplus" onclick = "updateDataFem(${index})"><a href="#popup-voirplus-femme">Voir plus</a></button>
      <button class="btn-delete" ><a href="#popup-supprimerFem" onclick="setDeleteIndexFem(${index})">Supprimer</a></button>
    </td>
  </tr>

  <div id="popup-supprimerFem" class="overlay">
      <div class="overlay-content">
          <a class="close" href="#">&times;</a>
          <div class="popup">
              <div class="content-popup">
                  <section class="principal">
                      <div class="container-pop">
                          <form action="./acceuil.html">
                              <div class="titre-form-supprimer">
                                  <img src="../img/alerte.png" alt="logo-alert">
                              </div>
                              <div class="element">
                                  <div class="style-msg-alert">
                                  <span class="desc">ATTENTION!! Voulez-vous vraimment supprimer ce client ?</span>
                                  </div>
                                  <div class="yesOrNo">
                                      <button class="no" id="noFem" onclick = "noDeleteFem()">Non</button>
                                      <button class="sup" id="supprimerFem" onclick="deleteDataFem(${index})">Oui</button>
                                  </div>
                          </form>
                      </div>
                  </section>
              </div>
          </div>
      </div>
    </div>

    `;
  });
  // console.log(htmlFem);

  document.querySelector("#tableFem tbody").innerHTML = htmlFem;
}

//Charge toutes les données quand le document ou la page aura chargé.
document.onload = showDataHom();
document.onload = showDataFem();

function deleteDataHom(index) {
  let clientHom = JSON.parse(localStorage.getItem("clientHom"));

  if (currentDeleteIndexHom !== undefined) {
    clientHom.splice(currentDeleteIndexHom, 1);
    localStorage.setItem("clientHom", JSON.stringify(clientHom));
    showDataHom();
  } else {
    console.error("L'indice de suppression n'est pas défini.");
  }

  window.location.href = "../pages/listeClient.html";
}

function deleteDataFem(index) {
  let clientFem = JSON.parse(localStorage.getItem("clientFem"));

  if (currentDeleteIndexFem !== undefined) {
    clientFem.splice(currentDeleteIndexFem, 1);
    localStorage.setItem("clientFem", JSON.stringify(clientFem));
    showDataFem();
  } else {
    console.error("L'indice de suppression n'est pas défini.");
  }

  window.location.href = "../pages/listeClient.html";
}

//Ne pas supprimer
function noDelete() {
  let clientHom;
  if (localStorage.getItem("clientHom") == null) {
    clientHom = [];
  } else {
    clientHom = JSON.parse(localStorage.getItem("clientHom"));
  }
  window.location.href = "../pages/listeClient.html";
}

function noDeleteFem() {
  let clientFem;
  if (localStorage.getItem("clientFem") == null) {
    clientFem = [];
  } else {
    clientFem = JSON.parse(localStorage.getItem("clientFem"));
  }
  window.location.href = "../pages/listeClient.html";
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
  let longPantalonHom = document.querySelector("#LongPantalon-hom").value;
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

function updateDataHom(index) {
  let clientHom = JSON.parse(localStorage.getItem("clientHom"));

  document.querySelector("#poitrine-hom").value = clientHom[index].poitrineHom;
  document.querySelector("#epaule-hom").value = clientHom[index].epauleHom;
  document.querySelector("#longManche-hom").value =
    clientHom[index].longMancheHom;
  document.querySelector("#tourManche-hom").value =
    clientHom[index].tourMancheHom;
  document.querySelector("#bassin-hom").value = clientHom[index].bassinHom;
  document.querySelector("#ceinture-hom").value = clientHom[index].ceintureHom;
  document.querySelector("#cuisse").value = clientHom[index].cuisseHom;
  document.querySelector("#LongPantalon-hom").value =
    clientHom[index].longPantalonHom;
  document.querySelector("#bassinPantalon-hom").value =
    clientHom[index].bassinPantalonHom;

  document.querySelector("#nomClient-hom").value = clientHom[index].nomHom;
  document.querySelector("#prenomClient-hom").value =
    clientHom[index].prenomHom;
  document.querySelector("#adresseClient-hom").value =
    clientHom[index].adresseHom;
  document.querySelector("#telephone-hom").value =
    clientHom[index].telephoneHom;
  document.querySelector("#sommeClient-hom").value = clientHom[index].sommeHom;
  document.querySelector("#dateRetrait-hom").value =
    clientHom[index].dateRetraitHom;

  let updateClientHom = document.querySelector("#update");

  updateClientHom.addEventListener("click", (e) => {
    e.preventDefault();

    if (validateFormMan() === true) {
      clientHom[index].poitrineHom =
        document.querySelector("#poitrine-hom").value;
      clientHom[index].epauleHom = document.querySelector("#epaule-hom").value;
      clientHom[index].longMancheHom =
        document.querySelector("#longManche-hom").value;
      clientHom[index].tourMancheHom =
        document.querySelector("#tourManche-hom").value;
      clientHom[index].bassinHom = document.querySelector("#bassin-hom").value;
      clientHom[index].ceintureHom =
        document.querySelector("#ceinture-hom").value;
      clientHom[index].cuisseHom = document.querySelector("#cuisse").value;
      clientHom[index].longPantalonHom =
        document.querySelector("#LongPantalon-hom").value;
      clientHom[index].bassinPantalonHom = document.querySelector(
        "#bassinPantalon-hom"
      ).value;

      clientHom[index].nomHom = document.querySelector("#nomClient-hom").value;
      clientHom[index].prenomHom =
        document.querySelector("#prenomClient-hom").value;
      clientHom[index].adresseHom =
        document.querySelector("#adresseClient-hom").value;
      clientHom[index].telephoneHom =
        document.querySelector("#telephone-hom").value;
      clientHom[index].sommeHom =
        document.querySelector("#sommeClient-hom").value;
      clientHom[index].dateRetraitHom =
        document.querySelector("#dateRetrait-hom").value;

      localStorage.setItem("clientHom", JSON.stringify(clientHom));

      // showDataHom();

      window.location.href = "../pages/listeClient.html";

      console.log("page rechargée");
    }
  });
}

function updateDataFem(index) {
  let clientFem = JSON.parse(localStorage.getItem("clientFem"));

  document.querySelector("#poitrine-fem").value = clientFem[index].poitrineFem;
  document.querySelector("#Taille-fem").value = clientFem[index].tailleFem;
  document.querySelector("#longTaille-fem").value =
    clientFem[index].longTailleFem;
  document.querySelector("#bassin-fem").value = clientFem[index].bassinFem;
  document.querySelector("#longManche-fem").value =
    clientFem[index].longMancheFem;
  document.querySelector("#tourManche-fem").value =
    clientFem[index].tourMancheFem;
  document.querySelector("#ceinture-fem").value = clientFem[index].ceintureFem;

  document.querySelector("#bassinJupe").value = clientFem[index].bassinJupeFem;
  document.querySelector("#ceintureJupe").value =
    clientFem[index].ceintureJupeFem;
  document.querySelector("#longueurJupe").value =
    clientFem[index].longueurJupeFem;

  document.querySelector("#nomClient-fem").value = clientFem[index].nomFem;
  document.querySelector("#prenomClient-fem").value =
    clientFem[index].prenomFem;
  document.querySelector("#adresseClient-fem").value =
    clientFem[index].adresseFem;
  document.querySelector("#telephone-fem").value =
    clientFem[index].telephoneFem;
  document.querySelector("#sommeClient-fem").value = clientFem[index].sommeFem;
  document.querySelector("#dateRetrait-fem").value =
    clientFem[index].dateRetraitFem;

  let updateClientFem = document.querySelector("#saveFem");

  updateClientFem.addEventListener("click", (e) => {
    e.preventDefault();

    if (validateFormFem() === true) {
      clientFem[index].poitrineFem =
        document.querySelector("#poitrine-fem").value;
      clientFem[index].tailleFem = document.querySelector("#Taille-fem").value;
      clientFem[index].longTailleFem =
        document.querySelector("#longTaille-fem").value;
      clientFem[index].bassinFem = document.querySelector("#bassin-fem").value;
      clientFem[index].longMancheFem =
        document.querySelector("#longManche-fem").value;
      clientFem[index].tourMancheFem =
        document.querySelector("#tourManche-fem").value;
      clientFem[index].ceintureFem =
        document.querySelector("#ceinture-fem").value;

      clientFem[index].bassinJupeFem =
        document.querySelector("#bassinJupe").value;
      clientFem[index].ceintureJupeFem =
        document.querySelector("#ceintureJupe").value;
      clientFem[index].longueurJupeFem =
        document.querySelector("#longueurJupe").value;

      clientFem[index].nomFem = document.querySelector("#nomClient-fem").value;
      clientFem[index].prenomFem =
        document.querySelector("#prenomClient-fem").value;
      clientFem[index].adresseFem =
        document.querySelector("#adresseClient-fem").value;
      clientFem[index].telephoneFem =
        document.querySelector("#telephone-fem").value;
      clientFem[index].sommeFem =
        document.querySelector("#sommeClient-fem").value;
      clientFem[index].dateRetraitFem =
        document.querySelector("#dateRetrait-fem").value;

      localStorage.setItem("clientFem", JSON.stringify(clientFem));

      // showDataHom();

      window.location.href = "../pages/listeClient.html";

      // console.log("page rechargée");
    }
  });
}
