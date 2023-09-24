let session = JSON.parse(sessionStorage.getItem("session"));
let nomPrenom = document.querySelector("#identName").value;
console.log(session);

if (!session) {
    nomPrenom.textContent = "";
  alert("Veuillez vous connecter !");
} else {
    console.log(nomPrenom)
}
