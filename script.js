const enterButton = document.querySelector(".button");
enterButton.addEventListener("click", enterPageTwo);
function enterPageTwo() {
  window.location.href = "./page-two.html";
}

const socialsTitle = document.querySelector("h2");
socialsTitle.classList.add("title");
