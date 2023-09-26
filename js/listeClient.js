let session = JSON.parse(sessionStorage.getItem("session"));
let nomPrenom = document.querySelector("#identName");

let clientHom = JSON.parse(localStorage.getItem("clientHom"));
console.log(clientHom);
// console.log(session);

if (!session) {
  nomPrenom.textContent = "<Vous n'êtes pas connecter>";
  alert("Veuillez vous connecter !");
  window.location.href = "../pages/connexion.html";
} else {
  nomPrenom.textContent = `${session.prenomCouturier.toLowerCase()} ${session.nomCouturier.toUpperCase()}`;
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
    <td>${index}</td>
    <td>${element.nomHom}</td>
    <td>${element.prenomHom}</td>
    <td>${element.telephoneHom}</td>
    <td>${element.dateRetraitHom}</td>
    <td>${element.sommeHom}</td>
    <td class="dernier-td">
      <button class="btn-voirplus" onclick = "updateDataHom(${index})"><a href="#popup-voirplus-homme">Voir plus</a></button>
      <button class="btn-delete" ><a href="#popup-supprimer" onclick = "noDelete()">Supprimer</a></button>
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
                                      <button class="no" id="no">Non</button>
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

//Charge toutes les données quand le document ou la page aura chargé.
document.onload = showDataHom();

function deleteDataHom(index) {
  let clientHom = JSON.parse(localStorage.getItem("clientHom"));

  clientHom.splice(index, 1);
  localStorage.setItem("clientHom", JSON.stringify(clientHom));
  showDataHom();
}

//Ne pas supprimer
function noDelete() {
  let clientHom;
  if (localStorage.getItem("clientHom") == null) {
    clientHom = [];
  } else {
    clientHom = JSON.parse(localStorage.getItem("clientHom"));
  }
  document.querySelector("#no").addEventListener("click", (e) => {
    window.location.href = "../pages/listeClient.html";
  });
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
