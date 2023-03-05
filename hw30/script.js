function getWrapper(){
    const endpoint='https://pokeapi.co/api/v2/pokemon'
    const valueWrapper = document.getElementsByTagName('div')[0]
    return endpoint;
}

function getPokemons() {
    fetch(getWrapper() , { method: "GET" })
        .then(res => res.json())
        .then(res => showPokemons(res))
}

getPokemons()

function showPokemons(respons){
    const pokemons = respons.results;
    for (let i=0; i< pokemons.length ; i++ ){
        const pokemon = document.createElement('div');
        const pokemonName = document.createElement('p');
              pokemonName.textContent = pokemons[i].name

        pokemon.appendChild(pokemonName)

        console.log(pokemon.innerText)

    }
}


// // Получить модальный
// var modal = document.getElementById("myModal");
//
// // Получить кнопку, которая открывает модальный
// var btn = document.getElementById("myBtn");
//
// // Получить элемент <span>, который закрывает модальный
// var span = document.getElementsByClassName("close")[0];
//
// // Когда пользователь нажимает на кнопку, откройте модальный
// btn.onclick = function() {
//     modal.style.display = "block";
// }
//
// // Когда пользователь нажимает на <span> (x), закройте модальное окно
// span.onclick = function() {
//     modal.style.display = "none";
// }
//
// // Когда пользователь щелкает в любом месте за пределами модального, закройте его
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }
