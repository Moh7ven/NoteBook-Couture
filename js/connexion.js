let btnConn = document.querySelector("#conn");

function validateForm() {
  let email = document.querySelector("#email").value;
  let mdp = document.querySelector("#password").value;
  let message = document.querySelector("#message");
  message.style.color = "red";

  if (email === "") {
    message.textContent = "Veuillez entrer votre Email";
    return false;
  } else if (!email.includes("@")) {
    message.textContent = "Veuillez entrer une adresse email valide !";
    return false;
  }

  if (mdp === "") {
    message.textContent = "Veuillez entrer votre mot de passe";
    return false;
  }

  return true;
}

function connect() {
  if (validateForm() === true) {
    let email = document.querySelector("#email").value;
    let mdp = document.querySelector("#password").value;

    let bdCouturier = JSON.parse(localStorage.getItem("couturier"));

    if (localStorage.getItem("couturier") == null) {
      bdCouturier = [];
    } else {
      bdCouturier = JSON.parse(localStorage.getItem("couturier"));
    }

    console.log(bdCouturier);

    let result;
    console.log(typeof result);
    bdCouturier.find((element) => {
      if (
        email === element.emailCouturier &&
        mdp === element.motDePasseCouturier
      ) {
        result = element;
        console.log(result);
      }
    });

    if (typeof result !== "undefined") {
      sessionStorage.setItem("session", JSON.stringify(result));
      window.location.replace("./dashboard.html");
    } else {
      message.textContent = "Email ou mot de passe incorrect !";
      // window.location.reload();
    }
  }
}

// connect();
btnConn.addEventListener("click", (e) => {
  e.preventDefault();
  connect();
});
