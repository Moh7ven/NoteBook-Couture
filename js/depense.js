let session = JSON.parse(sessionStorage.getItem("session"));
let nomPrenom = document.querySelector("#identName");
let envoie = document.querySelector("#submit");
let tDeplist = document.querySelector("#tDepList");
let sommeDepense = document.querySelector("#sommeDepense");

if (!session) {
  nomPrenom.textContent = "<Vous n'êtes pas connecter>";
  alert("Veuillez vous connecter !");
  window.location.href = "../pages/connexion.html";
} else {
  nomPrenom.textContent = `${session.prenomCouturier.toLowerCase()} ${session.nomCouturier.toUpperCase()}`;
}

function validateFormDepenses() {
  let nom = document.querySelector("#nom").value;
  let somme = document.querySelector("#somme").value;

  if (nom === "") {
    alert("Veuillez remplir le champ nom");
    return false;
  }

  if (somme === "") {
    alert("Veuillez remplir le champ somme");
    return false;
  }

  return true;
}

function validateFormDepensesUpdate() {
  let nom = document.querySelector("#nom-depense").value;
  let somme = document.querySelector("#somme-depense").value;

  if (nom === "") {
    alert("Veuillez remplir le champ nom");
    return false;
  }

  if (somme === "") {
    alert("Veuillez remplir le champ somme");
    return false;
  }

  return true;
}

let currentDeleteIndex;

function setDeleteIndex(index) {
  currentDeleteIndex = index;
}

function showDataDepense() {
  //   let depense = JSON.parse(localStorage.getItem("depense"));

  let html = "";

  let depense;
  if (localStorage.getItem("depense") == null) {
    depense = [];
  } else {
    depense = JSON.parse(localStorage.getItem("depense"));
  }

  depense.forEach((element, indice) => {
    html += `
        <tr>
        <td>${indice + 1}</td>
        <td>${element.nom}</td>
        <td>${element.somme}</td>
        <td class="dernier-td">
          <button id="update"><a href="#popup-edite-depnses" onclick="updateDataDepense(${indice})">Mettre à jour</a></button>
          <button id="delete"> <a href="#popup-supprimer-depense"  onclick="setDeleteIndex(${indice})">Supprimer</a></button>
        </td>

        <div id="popup-supprimer-depense" class="overlay">
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
                                  <span class="desc">ATTENTION!! Voulez-vous vraimment supprimer cette dépense ? </span>
                                  </div>
                                  <div class="yesOrNo">
                                      <button class="no" id="no" onclick = "noDelete()">Non</button>
                                      <button class="sup" id="supprimer" onclick="deleteDataDepense()">Oui</button>
                                  </div>
                          </form>
                      </div>
                  </section>
              </div>
          </div>
      </div>
    </div>
      </tr>

      
        `;
  });
  document.querySelector("#tableDepense tbody").innerHTML = html;
}

//Charge toutes les données quand le document ou la page aura chargé.
document.onload = showDataDepense();

function deleteDataDepense(index) {
  let depense = JSON.parse(localStorage.getItem("depense"));

  if (currentDeleteIndex !== undefined) {
    depense.splice(currentDeleteIndex, 1);
    localStorage.setItem("depense", JSON.stringify(depense));
    showDataDepense();
  } else {
    console.error("L'indice de suppression n'est pas défini.");
  }

  window.location.href = "../pages/depense.html";
}

//Ne pas supprimer
function noDelete() {
  let depense;
  if (localStorage.getItem("depense") == null) {
    depense = [];
  } else {
    depense = JSON.parse(localStorage.getItem("depense"));
  }
  window.location.href = "../pages/depense.html";
}

function addDepense() {
  if (validateFormDepenses() === true) {
    let nom = document.querySelector("#nom").value;
    let somme = document.querySelector("#somme").value;

    let data = {
      nom: nom,
      somme: somme,
    };
    console.log(data);

    let depense = localStorage.getItem("depense");

    if (depense === null) {
      depense = [];
      depense.push(data);

      localStorage.setItem("depense", JSON.stringify(depense));
      window.location.reload();
    } else {
      depense = JSON.parse(depense);
      depense.push(data);

      localStorage.setItem("depense", JSON.stringify(depense));

      showDataDepense();

      document.querySelector("#nom").value = "";
      document.querySelector("#somme").value = "";

      window.location.reload();
    }
  }
}

envoie.addEventListener("click", (e) => {
  e.preventDefault();
  addDepense();
});

function updateDataDepense(index) {
  let depense = JSON.parse(localStorage.getItem("depense"));

  document.querySelector("#nom-depense").value = depense[index].nom;
  document.querySelector("#somme-depense").value = depense[index].somme;

  let updateDepense = document.querySelector("#save");

  updateDepense.addEventListener("click", (e) => {
    e.preventDefault();
    if (validateFormDepensesUpdate() === true) {
      depense[index].nom = document.querySelector("#nom-depense").value;
      depense[index].somme = document.querySelector("#somme-depense").value;

      localStorage.setItem("depense", JSON.stringify(depense));

      window.location.href = "../pages/depense.html";
    }
  });
}

function listeDepenseTotale() {
  let depense;
  if (localStorage.getItem("depense") == null) {
    depense = [];
  } else {
    depense = JSON.parse(localStorage.getItem("depense"));
  }

  if (depense.length === "" || depense.length === null) {
    tDeplist.textContent = 0;
  } else {
    tDeplist.textContent = depense.length;
  }

  console.log(depense.length);
}
listeDepenseTotale();

function calculSommeDepense() {
  let depense;
  if (localStorage.getItem("depense") == null) {
    depense = [];
  } else {
    depense = JSON.parse(localStorage.getItem("depense"));
  }

  let sommeDepenseRecup = [];

  depense.forEach((element) => {
    sommeDepenseRecup.push(parseInt(element.somme));
  });

  let sommeTotalRecup = sommeDepenseRecup.reduce((a, b) => a + b, 0);

  if (depense === "") {
    sommeDepense.textContent = 0;
  } else {
    sommeDepense.textContent = sommeTotalRecup;
  }
}
calculSommeDepense();

function sommeCouvertes() {
  let clientHom = JSON.parse(localStorage.getItem("clientHom")) || [];
  let clientFem = JSON.parse(localStorage.getItem("clientFem")) || [];
  let depense = JSON.parse(localStorage.getItem("depense")) || [];

  // let sommeDepenseRecup = [];
  let sommeClientHomRecup = [];
  let sommeClientFemRecup = [];

  clientHom.forEach((element) => {
    sommeClientHomRecup.push(parseInt(element.sommeHom));
  });
  let sommeTotalClientHom = sommeClientHomRecup.reduce((a, b) => a + b, 0);

  clientFem.forEach((element) => {
    sommeClientFemRecup.push(parseInt(element.sommeFem));
  });
  let sommeTotalClientFem = sommeClientFemRecup.reduce((a, b) => a + b, 0);

  const sommeTotalClient = sommeTotalClientHom + sommeTotalClientFem;
  // console.log(sommeTotalClient);

  let sommeTotalCouverte = 0;
  let compteur = 0;

  depense.forEach((element, index) => {
    montantDepense = parseInt(element.somme);

    if (montantDepense <= sommeTotalClient) {
      sommeTotalCouverte += montantDepense;
      compteur++;
    }
  });

  if (
    sommeTotalCouverte === "" ||
    sommeTotalCouverte === null ||
    sommeTotalCouverte === undefined
  ) {
    document.querySelector("#sommeCouvertes").textContent = O;
    document.querySelector("#depTotal").textContent = 0;
  } else {
    document.querySelector("#sommeCouvertes").textContent = sommeTotalCouverte;
    document.querySelector("#depTotal").textContent = compteur;
  }

  console.log(sommeTotalCouverte, sommeTotalClient);
  // let sommeTotalDepense = sommeDepenseRecup.reduce((a, b) => a + b, 0);

  // console.log(sommeTotalClient);

  // console.log(sommeTotalCouverte);
}
sommeCouvertes();
