document.write("<center><table border='5px'>");
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        document.write("<td><center>" + i * j);
    }
    document.write("</tr>");
}

function newInput(){
    let input = document.getElementById('login')
    input.value
    // console.log(input.value)
}
