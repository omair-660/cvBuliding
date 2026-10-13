let darkBtn = document.querySelector(".darkBtn");
let body = document.body;
let isDark = false;

if (JSON.parse(localStorage.getItem("dark"))) {
  body.classList.add("dark");
  darkBtn.innerHTML = `<i style='color:#ffd43f' class='fa-solid fa-sun'></i>`;
} else {
  body.classList.remove("dark");
  darkBtn.innerHTML = `<i class='fa-solid fa-moon'></i>`;
}

darkBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
  if (body.classList.contains("dark")) {
    isDark = true;
    darkBtn.innerHTML = `<i style='color:#ffd43f' class='fa-solid fa-sun'></i>`;
  } else {
    isDark = false;
    darkBtn.innerHTML = `<i class='fa-solid fa-moon'></i>`;
  }
  localStorage.setItem("dark", JSON.stringify(isDark));
});

let barsBtn = document.querySelector("nav .bars");
let links = document.querySelector("nav .links");

barsBtn.addEventListener("click", () => {
  links.classList.toggle("active");
  if (links.classList.contains("active")) {
    barsBtn.innerHTML = `<i style='color: var(--danger)' class="fa-solid fa-close"></i>`;
  } else {
    barsBtn.innerHTML = `<i class="fa-solid fa-bars-staggered"></i>`;
  }
});

let topContainer = document.createElement("div");
let topIcon = document.createElement("i");

topContainer.setAttribute("class", "goTop");
topIcon.setAttribute("class", "fa-solid fa-arrow-up");

topContainer.appendChild(topIcon);
body.appendChild(topContainer);

window.addEventListener("scroll", () => {
  if (window.scrollY > 800) {
    topContainer.classList.add("show");
  } else {
    topContainer.classList.remove("show");
  }
});

topContainer.addEventListener("click", () => {
  window.scrollTo({ top: 0 });
});
