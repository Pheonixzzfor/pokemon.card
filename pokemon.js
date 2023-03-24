// fetch('https://pokeapi.co/api/v2/')
// .then(res => res.json())
// .then(data => console.log(data))

const $container = document.querySelector(".container"); 
const $btnPrev = document.querySelector(".btn-prev"); 
const $btnNext = document.querySelector(".btn-next"); 
const $page = document.querySelector(".counter"); 
 
const LIMIT = 20; 
const TOTAL_POKEMONS = 1118; 
const TOTAL_PAGES = Math.floor(TOTAL_POKEMONS / LIMIT); 
 
let pageCounter = 1; 
 
let offsetCounter = 0; 
 
//  ${api.main}?offset=${offsetCounter}&limit=${LIMIT} 
 
let api = { 
  main: "https://pokeapi.co/api/v2/pokemon/", 
}; 
 
const setInfoPokemon = (url) => 
  setData(url).then((data) => { 
    $container.innerHTML = CardPokemon(data); 
  }); 
 
const setData = (url) => fetch(url).then((res) => res.json()); 
 
window.addEventListener("load", () => { 
  setData(`${api.main}?offset=${offsetCounter}&limit=${LIMIT}`).then((data) => { 
    let temp = data.results 
      .map((pokemon) => TitlePokemonCard(pokemon)) 
      .join(""); 
    $container.innerHTML = temp; 
  }); 
}); 
 
// title card pokemons 
function TitlePokemonCard(pokemon) { 
  return ` 
    <div class="card" onClick="setInfoPokemon('${pokemon.url}')"> 
      <h1>${pokemon.name}</h1> 
    </div> 
  `; 
} 
 
// Card info pokemons 
function CardPokemon(info) { 
  console.log(info); 
  return ` 
  <div class="cards-style"> 
    <h1 onClick="reloadWindowFunc()"><-------------- Back</h1> 
    <h1>${info.name}</h1> 
    <h3>${info.height}</h3> 
    <p>${info.base_experience}</p> 
    <p>color: ${info.moves[0].move.name}</p> 
    <img src='${info.sprites.other.dream_world.front_default}'/> 
  </div> 
  `; 
} 
 
// Reload function 
function reloadWindowFunc() { 
  window.location.reload(); 
} 
 
// Pagination 
window.addEventListener("load", () => { 
  $page.innerHTML = pageCounter; 
  $btnPrev.setAttribute("disabled", true); 
}); 
 
$btnNext.addEventListener("click", (e) => { 
  e.preventDefault(); 
  $btnPrev.removeAttribute("disabled"); 
  if (pageCounter >= 1 && pageCounter <= TOTAL_PAGES) { 
    if (pageCounter === TOTAL_PAGES) { 
      $btnNext.setAttribute("disabled", true); 
      setData( 
        `${api.main}?offset=${(offsetCounter += LIMIT)}&limit=${LIMIT} 
      `).then((data) => { 
        pageCounter++; 
        $page.innerHTML = pageCounter; 
        let temp = data.results 
          .map((pokemon) => TitlePokemonCard(pokemon)) 
          .join(""); 
        $container.innerHTML = temp; 
      }); 
    } else { 
      setData(`
        ${api.main}?offset=${(offsetCounter += LIMIT)}&limit=${LIMIT} 
      `).then((data) => { 
        pageCounter++; 
        $page.innerHTML = pageCounter; 
        let temp = data.results 
          .map((pokemon) => TitlePokemonCard(pokemon)) 
          .join(""); 
        $container.innerHTML = temp; 
      }); 
    } 
  } 
}); 
 
$btnPrev.addEventListener("click", (e) => { 
  e.preventDefault(); 
  if ((pageCounter) => 1) { 
    pageCounter--; 
 
    if (pageCounter === 1) { 
      $btnPrev.setAttribute("disabled", true); 
      offsetCounter = 0; 
      setData(`${api.main}?offset=${offsetCounter}&limit=${LIMIT}`).then( 
        (data) => { 
          $page.innerHTML = pageCounter; 
          let temp = data.results 
            .map((pokemon) => TitlePokemonCard(pokemon)) 
            .join(""); 
          $container.innerHTML = temp; 
        } 
      ); 
    } else { 
      setData(`${api.main}?offset=${offsetCounter -= LIMIT}&limit=${LIMIT}`).then( 
        (data) => { 
          $btnNext.removeAttribute('disabled') 
          $page.innerHTML = pageCounter; 
          let temp = data.results 
            .map((pokemon) => TitlePokemonCard(pokemon)) 
            .join(""); 
          $container.innerHTML = temp; 
        } 
      ); 
    } 
  } 
});






    


