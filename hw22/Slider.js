let myImg = document.querySelector('.myImg');
let img = ['image1.jpeg', 'image2.jpeg', 'image3.jpeg', 'image4.jpeg'];
let i = 0;

function prev(){
    if(i <= 0)
        i = img.length;
    i--;
    return setImg();
}

function next(){
    if(i >= img.length-1)
        i = -1;
    i++;
    return setImg();
}

function setImg(){
    return myImg.setAttribute('src', "img/"+img[i]);

}
