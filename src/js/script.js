
// On cible les éléments à modifier
const toggle = document.querySelector(".menu-btn");
const nav = document.querySelector(".menu");
const main = document.querySelector("main"); // pour cacher le contenu principal

// Ajoute un écouteur d'événements à l'élément 'toggle'
toggle.addEventListener("click", () => {

  const isOpen = toggle.ariaExpanded === "true";
  const isClosed = !isOpen;
  console.log("isOpen :", isOpen, "isClosed :", isClosed);

  // Si
  if (isClosed) {
    nav.ariaHidden = "false";
    toggle.ariaExpanded = "true";
    main.setAttribute("hidden", ""); // cache le contenu principal
  } 
  // fermeture 
  else {
    nav.ariaHidden = "true";
    toggle.ariaExpanded = "false";
    main.removeAttribute("hidden");
  }
});
