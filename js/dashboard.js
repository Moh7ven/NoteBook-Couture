let session = JSON.parse(sessionStorage.getItem("session"));
let nomPrenom = document.querySelector("#identName");
let clientHom = JSON.parse(localStorage.getItem("clientHom"));
let depense = JSON.parse(localStorage.getItem("depense"));

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

console.log(clientHom.length);
console.log(depense.length);

if (clientHom === "") {
  nbrClient.textContent = 0;
} else {
  nbrClient.textContent = clientHom.length;
}

if (depense === "") {
  nbrDepense.textContent = 0;
} else {
  nbrDepense.textContent = depense.length;
}

function calculSomme() {
  let resultSommeClient = [];
  let resultDepense = [];
  let initialValue = 0;

  clientHom.forEach((element) => {
    resultSommeClient.push(parseInt(element.sommeHom));
  });

  depense.forEach((element) => {
    resultDepense.push(parseInt(element.somme));
  });

  let totalDepense = resultDepense.reduce((a, b) => a + b, initialValue);
  console.log(resultDepense);
  console.log(totalDepense);

  let argentHom = resultSommeClient.reduce((a, b) => a + b, initialValue)-totalDepense;

  if (clientHom === "") {
    sommeReste.textContent = 0;
  } else {
    sommeReste.textContent = argentHom;
  }
}

calculSomme();
