// Aparição das formações acadêmicas de acordo com o scroll
window.addEventListener("scroll", function () {
  // Verifica se a largura da janela é menor ou igual a 480 pixels
  if (window.innerWidth >= 480) {
    const myGrad = this.document.querySelector(".my-graduations");
    const gradMain = this.document.querySelector(".grad-main-title");

    if (window.scrollY > 1200 && window.scrollY < 1650) {
      myGrad.classList.add("roll");
      gradMain.classList.add("roll");
    } else {
      myGrad.classList.remove("roll");
      gradMain.classList.remove("roll");
    }
  }
});

// Aparição das formações acadêmicas versão responsiva
window.addEventListener("scroll", function () {
  const myGrad = this.document.querySelector(".my-graduations");
  const gradMain = this.document.querySelector(".grad-main-title");

  if (window.scrollY > 1100 && window.scrollY < 1650) {
    myGrad.classList.add("scroll");
  } else {
    myGrad.classList.remove("scroll");
  }
});

// Botões direcionando a cada aba da página
const about = this.document.querySelector("#about-me");
const grad = this.document.querySelector("#graduation");
const courses = this.document.querySelector("#courses");
const portfolio = this.document.querySelector("#portfolio");
const banner2 = document.querySelector(".banner-2");
const banner3 = document.querySelector(".banner-3");
const banner4 = document.querySelector(".banner-4");
const banner5 = document.querySelector(".banner-5");

about.addEventListener("click", function () {
  const banner2Position = banner2.offsetTop;

  window.scrollTo({
    top: banner2Position - 100,
    behavior: "smooth",
  });
});
grad.addEventListener("click", function () {
  const banner3Position = banner3.offsetTop;

  window.scrollTo({
    top: banner3Position,
    behavior: "smooth",
  });
});
courses.addEventListener("click", function () {
  const banner4Position = banner4.offsetTop;

  window.scrollTo({
    top: banner4Position - 130,
    behavior: "smooth",
  });
});
portfolio.addEventListener("click", function () {
  const banner5Position = banner5.offsetTop;

  window.scrollTo({
    top: banner5Position - 98,
    behavior: "smooth",
  });
});

// Header com background após rolagem
window.addEventListener("scroll", function () {
  const header = this.document.querySelector("header");
  header.classList.toggle("roll", window.scrollY > 300);
});

// Adicionar rotação em botão após clique
const btnBlue = document.querySelector("#btn-blue");
const btnPink = document.querySelector("#btn-pink");
const udeCont = document.querySelector(".udemy-content");
const abaCont = document.querySelector(".aba-content");
const frontMain = document.querySelector("#front-main");
const engMain = document.querySelector("#english-main");

btnBlue.addEventListener("click", function () {
  frontMain.classList.toggle("press");
  udeCont.classList.toggle("press");
  btnBlue.classList.add("press");
  btnBlue.classList.toggle("return");
  setTimeout(() => {
    btnBlue.textContent = btnBlue.textContent === "+" ? "-" : "+";
  }, 660);
});

btnPink.addEventListener("click", function () {
  engMain.classList.toggle("press");
  abaCont.classList.toggle("press");
  btnPink.classList.add("press");
  btnPink.classList.toggle("return");
  setTimeout(() => {
    btnPink.textContent = btnPink.textContent === "+" ? "-" : "+";
  }, 660);
});

// botão expansor
if (window.innerWidth <= 480) {
  const navBar = document.querySelector(".nav-bar");
  const menuHamb = document.querySelector(".hamburguer-menu");
  const contentOpt = document.querySelector(".content-opt");
  const header = document.querySelector("header");
  const menuOpt = document.querySelector(".options-menu");
  navBar.classList.add("response");

  menuHamb.addEventListener("click", function () {
    contentOpt.classList.toggle("clicked");
    header.classList.toggle("clicked");
    menuOpt.classList.toggle("clicked");
    menuHamb.classList.toggle("clicked");
  });
}

// background responsivo
window.addEventListener("scroll", function () {
  const header = this.document.querySelector("header");
  header.classList.toggle("scrolled", window.scrollY > 300);
});

// ligação botões responsivos às páginas
const aboutBtn = this.document.querySelector("#about-me-btn");
const gradBtn = this.document.querySelector("#grad-btn");
const coursesBtn = this.document.querySelector("#courses-btn");
const portfolioBtn = this.document.querySelector("#portfolio-btn");

aboutBtn.addEventListener("click", function () {
  const banner2Position = banner2.offsetTop;

  window.scrollTo({
    top: banner2Position - 100,
    behavior: "smooth",
  });
});
gradBtn.addEventListener("click", function () {
  const banner3Position = banner3.offsetTop;

  window.scrollTo({
    top: banner3Position,
    behavior: "smooth",
  });
});
coursesBtn.addEventListener("click", function () {
  const banner4Position = banner4.offsetTop;

  window.scrollTo({
    top: banner4Position - 98,
    behavior: "smooth",
  });
});
portfolioBtn.addEventListener("click", function () {
  const banner5Position = banner5.offsetTop;

  window.scrollTo({
    top: banner5Position - 198,
    behavior: "smooth",
  });
});
