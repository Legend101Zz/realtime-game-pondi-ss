// set height and width of canvas equal to window

let wHeight = window.innerHeight;
let wWidth = window.innerWidth;
const canvas = document.querySelector("#the-canvas");
const context = canvas.getContext("2d");
canvas.width = wWidth;
canvas.height = wHeight;

window.addEventListener("load", () => {
  //on page load , open the login modal
  const loginModal = new bootstrap.Modal(document.querySelector("#loginModal"));
  loginModal.show();
});
