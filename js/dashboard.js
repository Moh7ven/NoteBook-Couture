let session = JSON.parse(sessionStorage.getItem("session"));
let nomPrenom = document.querySelector("#identName");
let clientHom = JSON.parse(localStorage.getItem("clientHom")) || [];
let clientFem = JSON.parse(localStorage.getItem("clientFem")) || [];
let depense = JSON.parse(localStorage.getItem("depense")) || [];

let nbrClient = document.querySelector("#nbrClient");
let nbrDepense = document.querySelector("#nbrDepense");
let sommeReste = document.querySelector("#sommeReste");

if (!session) {
  nomPrenom.textContent = "<Vous n'êtes pas connecter>";
  alert("Veuillez vous connecter !");
  window.location.href = "../pages/connexion.html";
} else {
  nomPrenom.textContent = `${session.prenomCouturier.toLowerCase()} ${session.nomCouturier.toUpperCase()}`;
}

// console.log(clientHom.length);
// console.log(depense.length);

if (clientHom === "" || clientHom === null) {
  nbrClient.textContent = 0;
} else {
  nbrClient.textContent = clientHom.length + clientFem.length;
}

if (depense === "" || depense === null) {
  nbrDepense.textContent = 0;
} else {
  nbrDepense.textContent = depense.length;
}



function calculSomme() {
  let resultSommeClientHom = [];
  let resultSommeClientFem = [];
  let resultDepense = [];
  let initialValue = 0;



  clientHom.forEach((element) => {
    resultSommeClientHom.push(parseInt(element.sommeHom));
  });

  clientFem.forEach((element) => {
    resultSommeClientFem.push(parseInt(element.sommeFem));
  });

  depense.forEach((element) => {
    resultDepense.push(parseInt(element.somme));
  });

  let totalDepense = resultDepense.reduce((a, b) => a + b, initialValue);
  console.log(resultDepense);
  console.log(totalDepense);

  let argentHom = resultSommeClientHom.reduce((a, b) => a + b, initialValue);
  let argentFem = resultSommeClientFem.reduce((a, b) => a + b, initialValue);

  if (clientHom === "" || clientHom === null) {
    sommeReste.textContent = 0;
  } else {
    sommeReste.textContent = (argentHom + argentFem)-totalDepense;
  }
}

calculSomme();

function ajoutRecent() {
  let clientHom = JSON.parse(localStorage.getItem("clientHom")) || [];
  let clientFem = JSON.parse(localStorage.getItem("clientFem")) || [];

  // console.log('ajoutRecent',clientHom, clientFem);

  //Je fusionne ici les données des deux types de client
  const tousLesClients = clientHom.concat(clientFem);
  console.log(tousLesClients);

  // Limiter le nombre de clients à afficher
  const nombreClientsAffiches = 10;
  const clientsRecents = tousLesClients.slice(0, nombreClientsAffiches);

  let html = "";
  console.log(clientsRecents);

  clientsRecents.forEach((element, index) => {
    html += `<tr>
    <td>${index+1}</td>
    <td>${element.nomHom || element.nomFem}</td>
    <td>${element.prenomHom || element.prenomFem}</td>
    <td>${element.telephoneHom || element.telephoneFem}</td>
    <td>${element.dateRetraitHom || element.dateRetraitFem}</td>
    <td class="dernier-td">${element.sommeHom || element.sommeFem} frs</td>
  </tr>`;
  });
  document.querySelector('#tableRecent tbody').innerHTML = html;
}

ajoutRecent();
