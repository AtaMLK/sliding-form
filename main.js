"use strict";
const overlayBtn1 = document.querySelector(".overlay-btn1");
const overlayBtn2 = document.querySelector(".overlay-btn2");
const singUp = document.querySelector(".singUp_card");
const singIn = document.querySelector(".singIn_card");
const singInOverlay = document.querySelector(".singIn_overlay");
const singUpOverlay = document.querySelector(".singUp_overlay");
const leftSide = document.querySelector(".left");
const rightSide = document.querySelector(".overlay");

overlayBtn1.addEventListener("click", function () {
  singIn.classList.toggle("hidden");
  singUp.classList.toggle("hidden");
  leftSide.style.translate = "translateX(-50%)";
  rightSide.style.translate = "translateX(50%)";
  singInOverlay.classList.toggle("hidden");
  singUpOverlay.classList.toggle("hidden");
});
overlayBtn2.addEventListener("click", function () {
  singIn.classList.toggle("hidden");
  singUp.classList.toggle("hidden");
  leftSide.translate = "translateX(-50%)";
  rightSide.translate = "translateX(50%)";
  singInOverlay.classList.toggle("hidden");
  singUpOverlay.classList.toggle("hidden");
});
