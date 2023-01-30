
function menuWomen(sex) {
    document.getElementById("boxWomen").style.visibility = "visible";
    console.log(sex)

}


function menuMen(){
    document.getElementById("boxMen").style.visibility = "visible"
}


function women(){
    document.getElementById("moreInfo").style.visibility = "visible"
}


function men(){
    document.getElementById("moreInfo").style.visibility = "visible";
}


function myFunction() {
    if(confirm("Tовар куплений")){
        document.getElementById("moreInfo").style.visibility = "hidden";
        document.getElementById("boxMen").style.visibility = "hidden";
        document.getElementById("boxWomen").style.visibility = "hidden";
    }

}




