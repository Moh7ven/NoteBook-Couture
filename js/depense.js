let session = JSON.parse(sessionStorage.getItem("session"));
let nomPrenom = document.querySelector("#identName");
let envoie = document.querySelector("#submit");

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

function showDataDepense() {
  //   let depense = JSON.parse(localStorage.getItem("depense"));

  let html = "";

  let depense;
  if (localStorage.getItem("depense") == null) {
    depense = [];
  } else {
    depense = JSON.parse(localStorage.getItem("depense"));
  }

  depense.forEach((element, index) => {
    html += `
        <tr>
        <td>${index}</td>
        <td>${element.nom}</td>
        <td>${element.somme}</td>
        <td class="dernier-td">
          <button id="update"><a href="#popup-edite-depnses" onclick="updateDataDepense(${index})">Mettre à jour</a></button>
          <button id="delete"> <a href="#popup-supprimer">Supprimer</a></button>
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
                                  <span class="desc">ATTENTION!! Voulez-vous vraimment supprimer cette dépense ?</span>
                                  </div>
                                  <div class="yesOrNo">
                                      <button class="no" id="no">Non</button>
                                      <button class="sup" id="supprimer" onclick="deleteDataDepense(${index})">Oui</button>
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
  document.querySelector("#tableDepense tbody").innerHTML = html;
}

//Charge toutes les données quand le document ou la page aura chargé.
document.onload = showDataDepense();

function deleteDataDepense(index) {
  let depense = JSON.parse(localStorage.getItem("depense"));

  depense.splice(index, 1);
  localStorage.setItem("depense", JSON.stringify(depense));
  showDataDepense();
}

//Ne pas supprimer
function noDelete() {
  let depense;
  if (localStorage.getItem("depense") == null) {
    depense = [];
  } else {
    depense = JSON.parse(localStorage.getItem("depense"));
  }
  document.querySelector("#no").addEventListener("click", (e) => {
    window.location.href = "../pages/depense.html";
  });
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
