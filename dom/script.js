"use strict";
let x = document.getElementById("heading");
setTimeout(function () {
    x.style.color = "red";
    x.style.fontWeight = "30px";
}, 4000);
let y = document.getElementById("heading2");
setTimeout(function () {
    y.style.color = "red";
    y.innerHTML = "muneeb";
}, 4000);
let div = document.getElementById("ele1");
div === null || div === void 0 ? void 0 : div.addEventListener("click", function () {
    div.style.backgroundColor = "green";
    div.style.borderColor = "black";
    div.style.border = "3";
});
