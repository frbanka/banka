const socialsTitle = document.querySelector("h2");
window.addEventListener("mousemove", addClassTitle);
function addClassTitle() {
  socialsTitle.classList.add("title");
}
const proceedButton = document.querySelector(".proceedButton");
proceedButton.addEventListener("click", proceedFurtherButton);
function proceedFurtherButton() {
  window.location.href = "./page-three.html";
}
