let btnConn = document.querySelector("#conn");
let email = document.querySelector("#email").value;
let mdp = document.querySelector("#password").value;

function validateForm() {
  if (email === "") {
    alert("Veuillez entrer votre Email");
    return false;
  }

  if (mdp === "") {
    alert("Veuillez entrer votre mot de passe");
    return false;
  }
  return true;
}

function connect() {
  if (validateForm() === true) {
    let email = document.querySelector("#email").value;
    let mdp = document.querySelector("#password").value;

    let bdCouturier = JSON.parse(localStorage.getItem("couturier")) || [];
    console.log(bdCouturier);
    let result;

    bdCouturier.find((element) => {
      if (
        email === element.emailCouturier &&
        mdp === element.motDePasseCouturier
      ) {
        result = element;
        console.log(result);
      }
      if (typeof result !== "undefined") {
        sessionStorage.setItem("session", JSON.stringify(result));
        window.location.replace("./dashboard.html");
      } else {
        alert("Utilisateur inexistant !");
        window.location.reload();
      }
    });
  }
}

// connect();
btnConn.addEventListener("click", (e) => {
  e.preventDefault();
  connect();
});
