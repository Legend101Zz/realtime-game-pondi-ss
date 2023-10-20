// set height and width of canvas equal to window

let wHeight = window.innerHeight;
let wWidth = window.innerWidth;
const canvas = document.querySelector("#the-canvas");
const context = canvas.getContext("2d");
canvas.width = wWidth;
canvas.height = wHeight;
