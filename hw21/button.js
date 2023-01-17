function first() {
    window.location.assign("https://www.google.com/");

}
function second() {
    window.location.assign("https://www.youtube.com/");

}

document.getElementById("Button").addEventListener("click", first);
document.getElementById("btn").addEventListener("click", second);