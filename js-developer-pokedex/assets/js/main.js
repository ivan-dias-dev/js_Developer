//http-server

const limit = 20;
let offset = 0;
const maxRecord = 151;

let pokemonLista = document.getElementById("pokemonList");

function loadPokemonItens(offset, limit) {
  pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
    const newHtml = pokemons
      .map(
        (pokemon) =>
          `<li class="pokemon ${pokemon.type}" id="${pokemon.number}">
          <span class="number">#${pokemon.number}</span>
          <span class="name">${pokemon.name}</span>
          <div class="detail">
            <ol class="types">
              ${pokemon.types
                .map((type) => `<li class="type ${type}">${type}</li>`)
                .join("")}
            </ol>
            <img src="${pokemon.photo}" 
            alt="${pokemon.name}"
          />
          </div>
        </li>
        `
      )
      .join("");

    pokemonLista.innerHTML += newHtml;
    expandePokemon();
  });
}
const loadMoreButton = document.getElementById("loadMoreButton");
loadPokemonItens(offset, limit);
loadMoreButton.addEventListener("click", () => {
  offset += limit;
  const qtdRecordNextPage = offset + limit;
  if (qtdRecordNextPage >= maxRecord) {
    const newLimit = maxRecord - offset;
    loadPokemonItens(offset, newLimit);
    loadMoreButton.parentElement.removeChild(loadMoreButton);
  } else {
    loadPokemonItens(offset, limit);
  }
});
var listaAtual;
function expandePokemon() {
  const pokemonList = document.querySelector(".pokemons");
  pokemonList.addEventListener("click", (event) => {
    const clickedPokemon = event.target.closest(".pokemon");
    if (clickedPokemon) {
      let id = clickedPokemon.id;
      let nome = clickedPokemon.children[1].innerHTML;
      let classe = clickedPokemon.className;
      let imagem = clickedPokemon.children[2].children[1].src;
      let details = clickedPokemon.children[2].children[0].children;
      listaAtual = pokemonLista.innerHTML;
      montaCard(id, nome, classe, imagem, details);
    }
  });
}

function detalhesCard(details) {
  let detalhes;
  if (details.length > 1) {
    detalhes = ` <li class="type ${details[0].innerHTML} tipagem">${details[0].innerHTML}</li>
              <li class="type ${details[1].innerHTML} tipagem">${details[1].innerHTML}</li>
              `;
    console.log(detalhes);
    return detalhes;
  } else {
    detalhes = ` <li class="type ${details[0].innerHTML} tipagem">${details[0].innerHTML}</li>
    `;
    return detalhes;
  }
}
function montaCard(id, nome, classe, imagem, details) {
  const detalhes = detalhesCard(details);
  let tamanhoCard = document.getElementById("content");
  tamanhoCard.style.height = "45em";

  //height: 45em;

  pokeApi.getStatusPokemons(id).then((status) => {
    status = pokeApi.convertePokeStatus(status);
    let total =
      status.HP +
      status.Attack +
      status.Defense +
      status.SpAtt +
      status.SpDef +
      status.Speed;
    console.log(status);
    pokemonLista.innerHTML = `
        <div
        class="divInicialCard"
      >
        <div
           class="${nome} divGeral" id="${id} "
        >
        </div>
       </div>
  
       <div class="baseCard">
        <div>
          <div class="po${classe} card">
            <div style="padding: 2em 3em 0 3em">
              <span class="botaosair"onclick="sair()">&larr;</span>
              <div
                style="padding-top: 10px; display: flex; flex-direction: column"
              >
                <span class="cardNome">${nome}</span>
                <span style="text-align: right">#00${id}</span>
                <div class="" style="display: flex; justify-content: left">
                 ${detalhes} 
                </div>
                <div class="detalhes">
                  <img
                    style="border-style: none; height: 196px; z-index: 1"
                    src="${imagem}"
                    alt="bulbasaur"
                  />
                </div>
              </div>
            </div>
            <div class="fundoSobre">
              <div class="divStatus">
                <h3>Status</h3>
              </div>
              <div style="display: flex">
                <div class="status">
                  <ol style="display: block; list-style: none">
                    <li>HP</li>
                    <li>Attack</li>
                    <li>Defense</li>
                    <li>Sp-Att</li>
                    <li>Sp-Def</li>
                    <li>Speed</li>
                    <li>Total</li>
                  </ol>
                </div>
                <div class="status">
                  <ol style="display: block; list-style: none" class="estilo2">
                    <li>${status.HP}</li>
                    <li>${status.Attack}</li>
                    <li>${status.Defense}</li>
                    <li>${status.SpAtt}</li>
                    <li>${status.SpDef}</li>
                    <li>${status.Speed}</li>
                    <li>${total}</li>
                  </ol>
                </div>
                <ol class="olBarra" id="olBarra" >
                
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      `;
    mostrabarra(status, classe);
  });

  return pokemonLista.innerHTML;
}
function sair() {
  return (pokemonLista.innerHTML = listaAtual);
}

function mostrabarra(status, classe) {
  console.log("status", status);
  let total =
    status.HP +
    status.Attack +
    status.Defense +
    status.SpAtt +
    status.SpDef +
    status.Speed;
  let barraTotal = document.getElementById("olBarra");
  let tamanho = status;
  barraTotal.innerHTML = `
  <li class="barra" ><div style="width: ${
    tamanho.HP + "%"
  }" class="barrinha pi${classe}"></div></li>
  <li class="barra"><div style="width: ${
    tamanho.Attack + "%"
  }" class="barrinha pi${classe}"></div></li>
  <li class="barra "><div style="width: ${
    tamanho.Defense + "%"
  }" class="barrinha pi${classe}"></div></li>
  <li class="barra"><div style="width: ${
    tamanho.SpAtt + "%"
  }" class="barrinha pi${classe}"></div></li>
  <li class="barra"><div style="width: ${
    tamanho.SpDef + "%"
  }" class="barrinha pi${classe}"></div></li>
  <li class="barra"><div style="width: ${
    tamanho.Speed + "%"
  }" class="barrinha pi${classe}"></div></li>
  <li class="barra"><div class="barrinha pi${classe}"></div></li>
`;
  console.log(classe);
  return barraTotal.innerHTML;
}
