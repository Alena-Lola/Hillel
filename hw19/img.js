function getRandomImage(){
    let randomNum = Math.floor(Math.random() * 8);
    document.getElementById("image").src =`img/image${randomNum}.jpeg`;

}
getRandomImage()