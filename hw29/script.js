function getInput() {
    const valueInput = document.getElementsByTagName('input')[0]
    return `https://jsonplaceholder.typicode.com/posts/${valueInput.value}`;
}


function fetchId() {
    fetch(getInput() , { method:"GET" })
        .then(res => res.json())
        .then(res => {
            const block =document.getElementsByTagName('p')[0]
                block.innerText= res.title
            const btnP=document.getElementById('btnP')
            btnP.style.visibility=''
            btnP.innerHTML = res.button

        })


}

const button = document.getElementsByTagName('form')[0]
    button.addEventListener('submit' , function (event) {
    event.preventDefault()

    fetchId()
})




function getCommets(){
    const comments = document.getElementsByTagName('input')[0]
    return `https://jsonplaceholder.typicode.com/posts/1/comments/${comments.value}`

}


const btnP = document.getElementsByTagName('form')[1]
btnP.addEventListener('submit' , function (event) {
    event.preventDefault()

fetchCommets()
})


function fetchCommets() {
    fetch(getCommets() , { method:"GET" })
        .then(res => res.json())
        .then(res => {
            const block =document.getElementsByTagName('p')[1]
            block.innerText= res.title

})
}