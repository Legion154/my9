function lang() {
  let en = document.getElementById("en");
  let ru = document.getElementById("ru");
  let uz = document.getElementById("uz");
  let langItems = document.getElementById("langItems");
  let langImg = document.getElementById("langChanger_img");
  let lang = localStorage.getItem("lang");

  if (lang === "en") {
    localStorage.setItem("lang", "en");
  }
  if (lang === "ru") {
    localStorage.setItem("lang", "ru");
  }
  if (lang === "uz") {
    localStorage.setItem("lang", "uz");
  }

  en.addEventListener("click", () => {
    langImg.src = "./images/en.png";
    langItems.classList.add("hidden");
    localStorage.setItem("lang", "en");
  });

  ru.addEventListener("click", () => {
    langImg.src = "./images/ru.png";
    langItems.classList.add("hidden");
    localStorage.setItem("lang", "ru");
  });
  uz.addEventListener("click", () => {
    langImg.src = "./images/uz.png";
    langItems.classList.add("hidden");
    localStorage.setItem("lang", "uz");
  });
}

function langMobile() {
  let enMobile = document.getElementById("EnMobile");
  let ruMobile = document.getElementById("RuMobile");
  let uzMobile = document.getElementById("UzMobile");

  enMobile.addEventListener("click", () => {
    enMobile.classList.add("bg-accent2");
    ruMobile.classList.remove("bg-accent2");
    uzMobile.classList.remove("bg-accent2");
  });
  ruMobile.addEventListener("click", () => {
    enMobile.classList.remove("bg-accent2");
    ruMobile.classList.add("bg-accent2");
    uzMobile.classList.remove("bg-accent2");
  });
  uzMobile.addEventListener("click", () => {
    enMobile.classList.remove("bg-accent2");
    ruMobile.classList.remove("bg-accent2");
    uzMobile.classList.add("bg-accent2");
  });
}

function mode() {
  let mode = document.getElementById("mode");
  let modeMobile = document.getElementById("modeMobile");
  let sun = document.getElementById("sun");
  let moon = document.getElementById("moon");
  let logoLight = document.querySelectorAll(".logoLight");
  let logoDark = document.querySelectorAll(".logoDark");
  let theme = localStorage.getItem("theme");

  if (!theme) {
    localStorage.setItem("theme", "light");
    theme = "light";
  }

  if (theme === "dark") {
    sun.classList.add("hidden");
    moon.classList.remove("hidden");
    modeMobile.checked = true;

    logoLight.forEach((logo) => logo.classList.add("hidden"));
    logoDark.forEach((logo) => logo.classList.remove("hidden"));

    document.body.classList.add("dark");
  } else {
    sun.classList.remove("hidden");
    moon.classList.add("hidden");
    modeMobile.checked = false;

    logoLight.forEach((logo) => logo.classList.remove("hidden"));
    logoDark.forEach((logo) => logo.classList.add("hidden"));

    document.body.classList.remove("dark");
  }

  mode.addEventListener("click", () => {
    if (theme === "light") {
      sun.classList.remove("hidden");
      moon.classList.add("hidden");
      modeMobile.checked = true;
      document.body.classList.add("dark");

      logoLight.forEach((logo) => logo.classList.add("hidden"));
      logoDark.forEach((logo) => logo.classList.remove("hidden"));

      theme = "dark";
      localStorage.setItem("theme", "dark");
    } else {
      sun.classList.add("hidden");
      moon.classList.remove("hidden");
      modeMobile.checked = false;
      document.body.classList.remove("dark");

      logoLight.forEach((logo) => logo.classList.remove("hidden"));
      logoDark.forEach((logo) => logo.classList.add("hidden"));

      theme = "light";
      localStorage.setItem("theme", "light");
    }
  });
}

function modeMobile() {
  let modeMobile = document.getElementById("modeMobile");
  let sun = document.getElementById("sun");
  let moon = document.getElementById("moon");
  let logoLights = document.querySelectorAll(".logoLight");
  let logoDarks = document.querySelectorAll(".logoDark");
  let theme = localStorage.getItem("theme");

  if (!theme) {
    localStorage.setItem("theme", "light");
    theme = "light";
  }

  if (theme === "dark") {
    sun.classList.remove("hidden");
    moon.classList.add("hidden");
    modeMobile.checked = true;
    document.body.classList.add("dark");

    logoLights.forEach((logo) => logo.classList.add("hidden"));
    logoDarks.forEach((logo) => logo.classList.remove("hidden"));
  } else {
    sun.classList.add("hidden");
    moon.classList.remove("hidden");
    modeMobile.checked = false;
    document.body.classList.remove("dark");

    logoLights.forEach((logo) => logo.classList.remove("hidden"));
    logoDarks.forEach((logo) => logo.classList.add("hidden"));
  }

  modeMobile.addEventListener("click", () => {
    if (theme === "light") {
      sun.classList.add("hidden");
      moon.classList.remove("hidden");
      modeMobile.checked = true;
      document.body.classList.add("dark");

      logoLights.forEach((logo) => logo.classList.add("hidden"));
      logoDarks.forEach((logo) => logo.classList.remove("hidden"));

      theme = "dark";
      localStorage.setItem("theme", "dark");
    } else {
      sun.classList.remove("hidden");
      moon.classList.add("hidden");
      modeMobile.checked = false;
      document.body.classList.remove("dark");

      logoLights.forEach((logo) => logo.classList.remove("hidden"));
      logoDarks.forEach((logo) => logo.classList.add("hidden"));

      theme = "light";
      localStorage.setItem("theme", "light");
    }
  });
}

function sitebar() {
  localStorage.setItem("sidebar", "none");
  let bar = localStorage.getItem("sidebar");
  let menu = document.getElementById("menu");
  let overlay = document.getElementById("overlay");
  let closeMenu = document.getElementById("closeMenu");

  if (bar === "none") {
    menu.style.width = "340px";
    menu.style.right = "0";
    overlay.classList.remove("hidden");
    localStorage.setItem("sidebar", "flex");
  }
  closeMenu.addEventListener("click", () => {
    menu.style.width = "0";
    menu.style.right = "-56px";
    overlay.classList.add("hidden");
    localStorage.setItem("sidebar", "none");
  });
  overlay.addEventListener("click", () => {
    menu.style.width = "0";
    menu.style.right = "-56px";
    overlay.classList.add("hidden");
    localStorage.setItem("sidebar", "none");
  });
}

function menuLinks(links) {
  const menu = document.getElementById("menu");
  const overlay = document.getElementById("overlay");
  const button = document.getElementById(links);

  setTimeout(() => {
    menu.style.width = "0";
    menu.style.right = "-56px";
    overlay.classList.add("hidden");
    localStorage.setItem("sidebar", "none");
  }, 100);

  // Execute ripple effect immediately
  const ripple = document.createElement("span");
  const rect = button.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const x = rect.width / 2 - size / 2;
  const y = rect.height / 2 - size / 2;

  ripple.style.width = ripple.style.height = `${size}px`;
  ripple.style.left = `${x}px`;
  ripple.style.top = `${y}px`;
  ripple.classList.add("ripple");

  button.appendChild(ripple);

  // Remove ripple after animation ends
  ripple.addEventListener("animationend", () => {
    ripple.remove();
  });
}

function accordation() {
  let accor1_text = document.getElementById("accor1");
  let accor1_btn = document.getElementById("accor1_btn");
  let accor1_icon = document.getElementById("accor1_icon");
  let accor2_text = document.getElementById("accor2");
  let accor2_btn = document.getElementById("accor2_btn");
  let accor2_icon = document.getElementById("accor2_icon");
  let accor3_text = document.getElementById("accor3");
  let accor3_btn = document.getElementById("accor3_btn");
  let accor3_icon = document.getElementById("accor3_icon");

  accor1_btn.addEventListener("click", () => {
    accor1_text.classList.toggle("h-full");
    accor1_icon.classList.toggle("rotate-180");
  });
  accor2_btn.addEventListener("click", () => {
    accor2_text.classList.toggle("h-full");
    accor2_icon.classList.toggle("rotate-180");
  });
  accor3_btn.addEventListener("click", () => {
    accor3_text.classList.toggle("h-full");
    accor3_icon.classList.toggle("rotate-180");
  });
}

function border() {
  window.onscroll = function () {
    scrollFunc();
  };
  function scrollFunc() {
    if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
      document
        .getElementsByTagName("header")[0]
        .classList.replace("border-b-transparent", "border-b-accent2");
    } else {
      document
        .getElementsByTagName("header")[0]
        .classList.replace("border-b-accent2", "border-b-transparent");
    }
  }
}

function loading() {
  let body = document.getElementsByClassName("body");
  let loading = document.getElementById("loading");
  window.addEventListener("DOMContentLoaded", () => {
    for (let i = 0; i < body.length; i++) {
      body[i].classList.remove("flex");
      body[i].classList.add("hidden");
      loading.style.display = "flex";
      setTimeout(() => {
        body[i].classList.add("flex");
        body[i].classList.remove("hidden");
        loading.style.display = "none";
      }, 2000);
    }
  });
}

// FUNCTION GENERATORS ----

lang();
langMobile();
mode();
modeMobile();
accordation();
border();
loading();
