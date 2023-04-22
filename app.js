const pokemon1 = document.querySelector('#pokemon1');
const pokemon2 = document.querySelector('#pokemon2');
const result = document.querySelector('.result');
const battleButton = document.querySelector('.battle-button');

async function getPokemonData(id) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await response.json();
  return data;
}

async function displayPokemon(pokemon, element) {
  const data = await getPokemonData(pokemon);
  const name = data.name.charAt(0).toUpperCase() + data.name.slice(1);
  const sprite = data.sprites.front_default;
  const hp = data.stats[0].base_stat;
  const attack = data.stats[1].base_stat;
  const defense = data.stats[2].base_stat;
  const specialAttack = data.stats[3].base_stat;
  const specialDefense = data.stats[4].base_stat;
  const speed = data.stats[5].base_stat;

  const spriteElement = element.querySelector('.pokemon-sprite');
  spriteElement.style.backgroundImage = `url(${sprite})`;

  const nameElement = element.querySelector('.pokemon-name');
  nameElement.textContent = name;

  const statsElement = element.querySelector('.pokemon-stats');
  statsElement.innerHTML = ''; // Clear any existing content

  const statsList = document.createElement('ul');
  statsList.innerHTML = `
    <li>HP: ${hp}</li>
    <li>Attack: ${attack}</li>
    <li>Defense: ${defense}</li>
    <li>Special Attack: ${specialAttack}</li>
    <li>Special Defense: ${specialDefense}</li>
    <li>Speed: ${speed}</li>
  `;
  statsElement.appendChild(statsList);
}


function getRandomPokemonId() {
  return Math.floor(Math.random() * 898) + 1;
}



async function generateBlurb(pokemon1Name, pokemon2Name) {
  document.querySelector('.result').innerHTML = '';
  document.getElementById("loading-circle").style.display = "block";
  const response = await fetch('/api/openai', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      prompt: `Who would win in a battle between ${pokemon1Name} and ${pokemon2Name}?`
    }),
  });

  const data = await response.json();
  const blurb = data.winner.trim();
  document.getElementById("loading-circle").style.display = "none";
  return blurb;
}



async function startBattle() {
  const pokemon1Id = getRandomPokemonId();
  const pokemon2Id = getRandomPokemonId();

  const pokemon1Data = await getPokemonData(pokemon1Id);
  const pokemon2Data = await getPokemonData(pokemon2Id);

  const pokemon1Name = pokemon1Data.name.charAt(0).toUpperCase() + pokemon1Data.name.slice(1);
  const pokemon2Name = pokemon2Data.name.charAt(0).toUpperCase() + pokemon2Data.name.slice(1);

  await displayPokemon(pokemon1Id, pokemon1);
  await displayPokemon(pokemon2Id, pokemon2);

  const blurb = await generateBlurb(pokemon1Name, pokemon2Name);
  result.textContent = blurb;
}

battleButton.addEventListener('click', startBattle);
