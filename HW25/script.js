document.addEventListener("click", focusFunction);
document.addEventListener("click", blurFunction);

function focusFunction() {
    document.getElementById("focus").innerHTML = "Hello,Ivan!";
}

function blurFunction() {
    document.getElementById("focus").innerHTML = "";
}


