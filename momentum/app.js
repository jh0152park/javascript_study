const h1 = document.querySelector("#title");

function handleTitleClick() {
    const clicked = "active";
    if (h1.classList.contains(clicked)) {
        h1.classList.remove(clicked);
    } else {
        h1.classList.add(clicked);
    }
}

h1.addEventListener("click", handleTitleClick);
