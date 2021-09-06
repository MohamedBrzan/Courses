/*-------------------------------------------------
                       Page Loader
---------------------------------------------------*/

window.addEventListener("load", () => {
  document.querySelector(".main").classList.remove("hidden");
  document.querySelector(".home-section").classList.add("active");

  // Page Loader //
  document.querySelector(".page-loader").classList.add("fade-out");

  setTimeout(() => {
    document.querySelector(".page-loader").style.display = "none";
  }, 600);
});

/*-------------------------------------------------
                       Toggle NavBar
---------------------------------------------------*/

const navToggler = document.querySelector(".nav-toggler");

navToggler.addEventListener("click", () => {
  hideSection();
  toggleNavbar();
  document.body.classList.toggle("hide-scrolling");
});

function hideSection() {
  document.querySelector("section.active").classList.toggle("fade-out");
}

function toggleNavbar() {
  document.querySelector(".header").classList.toggle("active");
}

/*-------------------------------------------------
                       Active Section
---------------------------------------------------*/

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("link-item") && e.target.hash !== "") {
    // activate the overlay to prevent multiple clicks
    document.querySelector(".overlay").classList.add("active");
    navToggler.classList.add("hide");
    if (e.target.classList.contains("nav-item")) {
      toggleNavbar();
    } else {
      hideSection();
      document.body.classList.add("hide-scrolling");
    }
    setTimeout(() => {
      document
        .querySelector("section.active")
        .classList.remove("active", "fade-out");
      document.querySelector(e.target.hash).classList.add("active");
      window.scrollTo(0, 0);
      document.body.classList.remove("hide-scrolling");
      navToggler.classList.remove("hide");
      document.querySelector(".overlay").classList.remove("active");
    }, 500);
  }
});

/*-------------------------------------------------
                       About Tabs
---------------------------------------------------*/

const mySection = document.querySelector(".about-section"),
  myButtons = document.querySelector(".about-tabs");

myButtons.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("tab-item") &&
    !e.target.classList.contains("active")
  ) {
    myButtons.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");

    const Get = e.target.getAttribute("data-target");
    mySection.querySelector(".tab-content.active").classList.remove("active");
    mySection.querySelector(Get).classList.add("active");
  }
});

/*-------------------------------------------------
       Portfolio  item Details Popup
---------------------------------------------------*/

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("view-project-btn")) {
    togglePortfolio();
    itemDetails(e.target.parentElement);
    document.querySelector(".portfolio-popup").scrollTo(0, 0);
  }
});

function togglePortfolio() {
  document.querySelector(".portfolio-popup").classList.toggle("open");
  document.body.classList.toggle("hide-scrolling");
  document.querySelector(".main").classList.toggle("fade-out");
}

document.querySelector(".pp-close").addEventListener("click", togglePortfolio);

//                        hide Popup When Clicking Outside Of It

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("pp-inner")) {
    togglePortfolio();
  }
});

function itemDetails(portfolioItem) {
  document.querySelector(".pp-thumb img").src = portfolioItem.querySelector(
    ".portfolio-item-thumbnail img"
  ).src;

  document.querySelector(".pp-header h3").innerHTML =
    portfolioItem.querySelector(".portfolio-item-title").innerHTML;

  document.querySelector(".pp-body").innerHTML = portfolioItem.querySelector(
    ".portfolio-item-details"
  ).innerHTML;
}
