const title = document.getElementById("title");
const description = document.querySelector(".description");
const box = document.querySelector("#box");

title.textContent = "Hello from JavaScript";
description.textContent = "This text was changed by script.js";

title.style.color = "darkblue";
title.style.backgroundColor = "lightgray";

box.classList.add("active");
