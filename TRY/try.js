const main=document.getElementsByClassName('main')[0];
function  handleInput(event){
    console.log('Input element event',)
    console.log(`inputet'${event.target.id}`, event.target.value)
    console.groupEnd()
}
const myInput=document.getElementById('name');
myInput.addEventListener('input',handleInput);
document.getElementById('city').addEventListener('change',handleInput)

function handleClick(event) {
    alert(`click button${event.target.id}`);
}
document.getElementById('another-btn').addEventListener('click',handleClick)
document.getElementById('another-btn').removeEventListener('click',handleClick)
