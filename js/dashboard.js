let session = JSON.parse(sessionStorage.getItem("session"));
let nomPrenom = document.querySelector("#identName");
// console.log(session);

if (!session) {
  nomPrenom.textContent = "<Vous n'êtes pas connecter>";
  alert("Veuillez vous connecter !");
  window.location.href = "../pages/connexion.html";
} else {
  nomPrenom.textContent = `${session.prenomCouturier.toLowerCase()} ${session.nomCouturier.toUpperCase()}`;
}
