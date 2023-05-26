const title = document.querySelector("#title");

function handleTitleClick() {
    title.style.color = "red";
}

function mouseenter() {
    console.log("mouse is here!");
}

title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", mouseenter);
