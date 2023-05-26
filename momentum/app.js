const h1 = document.querySelector("#title");

function handleTitleClick() {
    console.log(typeof h1.className);
    if (h1.className == "active") {
        h1.className = "";
    } else {
        h1.className = "active";
    }
}

h1.addEventListener("click", handleTitleClick);
