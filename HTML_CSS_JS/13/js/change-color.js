var heading = document.querySelector("#heading");
heading.onclick = function() {
    if (heading.style.color != "red")
        heading.style.color = "red";
    else
        heading.style.color = "blue";
}