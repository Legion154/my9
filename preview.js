localStorage.setItem("password", "none");

function glass(name) {
  let password = localStorage.getItem(name);
  if (password == "none") {
    document.getElementById("password").setAttribute("type", "text");
    document.getElementById("icon").classList.add("fa-lock-open");
    localStorage.setItem(name, "flex");
  } else {
    document.getElementById("password").setAttribute("type", "password");
    document.getElementById("icon").classList.remove("fa-lock-open");
    localStorage.setItem(name, "none");
  }
}

function form() {
  let form = document.getElementById("form");
  let body = document.getElementsByClassName("body");
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  let modal = document.getElementById("alert");
  let warning = document.getElementById("warning");
  let loading = document.getElementById("loading");
  let trueEmail = "my9@gmail.com";
  let truePassword = "12345";

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (email.value === trueEmail && password.value === truePassword) {
      for (let i = 0; i < body.length; i++) {
        body[i].classList.remove("flex");
        body[i].classList.add("hidden");
        form.classList.remove("flex");
        form.classList.add("flex");
        loading.style.display = "flex";
        setTimeout(() => {
          body[i].classList.add("flex");
          body[i].classList.remove("hidden");
          form.classList.add("flex");
          form.classList.remove("flex");
          loading.style.display = "none";
        }, 2000);
      }
      form.style.display = "none";
    }
    if (email.value !== trueEmail || password.value !== truePassword) {
      modal.style.top = "15px";
      warning.textContent = "Username or password is incorrect!";
    }
    if (!email.value || !password.value) {
      modal.style.top = "15px";
      warning.textContent = "Username or password is not filled";
    }
  });
  for (let i = 0; i < body.length; i++) {
    body[i].classList.remove("flex");
    body[i].classList.add("hidden");
  }
}

form();
mode();
