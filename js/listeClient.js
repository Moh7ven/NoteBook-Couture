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

function showData() {
  let clientHom = JSON.parse(localStorage.getItem("clientHom"));

  let html = "";

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
      <button class="btn-voirplus"><a href="#popup-voirplus-homme">Voir plus</a></button>
      <button class="btn-delete"><a href="#popup-supprimer">Supprimer</a></button>
    </td>
  </tr>
    `;
  });

  document.querySelector("#tableHom tbody").innerHTML = html;
}

//Charge toutes les données quand le document ou la page aura chargé.
document.onload = showData();


function deleteData(){

}
