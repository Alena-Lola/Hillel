const text = document.querySelector('input');

text.addEventListener('focus', (event) => {
        document.getElementById("words").innerHTML = "Hello,Ivan";
});


text.addEventListener('blur', (event) => {
    document.getElementById("words").innerHTML = "";
});







