const grid = document.querySelector('.grid');
const modal = document.getElementById('modal');
const modalContent = document.querySelector('.modal-content');
const closeBtn = document.querySelector('.close');
const pokemonImage = document.getElementById('pokemon-image');
const pokemonWeight = document.getElementById('pokemon-weight');
const pokemonHeight = document.getElementById('pokemon-height');

// Fetch data from API
fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
    .then(response => response.json())
    .then(data => {
        const pokemonList = data.results;
        pokemonList.forEach(pokemon => {
            const pokemonDiv = document.createElement('div');
            pokemonDiv.classList.add('pokemon');
            pokemonDiv.innerHTML = `
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split('/')[6]}.png">
        <p>${pokemon.name}</p>
      `;
            grid.appendChild(pokemonDiv);

            pokemonDiv.addEventListener('click', () => {
                fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
                    .then(response => response.json())
                    .then(data => {
                        pokemonImage.src = data.sprites.front_default;
                        pokemonWeight.textContent = `Weight: ${data.weight}`;
                        pokemonHeight.textContent = `Height: ${data.height}`;
                        modal.style.display = 'block';
                    });
            });
        });
    });

// Close modal when user clicks the close button
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close modal when user clicks anywhere outside the modal
window.addEventListener('click', event => {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});
