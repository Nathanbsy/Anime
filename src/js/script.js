//Declarando variaveis
let url = `https://api.jikan.moe/v4/top/anime?page=1`;
let urlPesquisa;

let valorFiltro;

let paginaAtual = 1;

const pesquisaSection = document.getElementById("secPesquisa");

const cards = document.getElementById("secPrincipal");

const barraPesquisa = document.getElementById("pesquisa");

const modal = document.querySelector("dialog");

const botaoFechar = document.getElementById("btnFechar");

botaoFechar.onclick = async function () {
    const div = document.getElementById("cardsAnimes");
    if (div) {
        div.remove();
        modal.close();
    }
}

async function filtrarPesquisa() {
    const div = document.createElement('div');
    div.id = 'cardsAnimes';
    modal.appendChild(div);
    modal.showModal();
    if (barraPesquisa != "") {
        valorFiltro = barraPesquisa.value.toLowerCase();
        urlPesquisa = `https://api.jikan.moe/v4/anime?q=${valorFiltro}`;
        const req = await fetch(urlPesquisa);
        const res = await req.json()
        const animes = res.data;
        animes.forEach((anime) => {
            div.innerHTML += `
            <div class="card">
                <div class="card-img">
                    <img src="${anime.images.jpg.image_url}"/>
                </div>
                <div class="card-textos">
                    <h3 class="anime_titulo">${anime.title}</h3>
                    <p>${anime.type} (${anime.episodes} Eps)</p>
                    <h4>Nota: ${anime.score}<h4/>
                </div>
            </div>
            `;
        });
    }
}

async function mostrarCatalogo() {
    try {
        const req = await fetch(url);
        const res = await req.json();
        const animes = res.data;
        animes.forEach((anime) => {
            cards.innerHTML += `
            <div class="card">
                <div class="card-img">
                    <img src="${anime.images.jpg.image_url}"/>
                </div>
                <div class="card-textos">
                    <h3 class="anime_titulo">${anime.title}</h3>
                    <p>${anime.type} (${anime.episodes} Eps)</p>
                    <h4>Nota: ${anime.score}<h4/>
                </div>
            </div>
            `;
        });
        
    } catch (error) {
        console.error(error);
    }
}

mostrarCatalogo();

async function mostrarMais() {
    paginaAtual++;
    url = `https://api.jikan.moe/v4/top/anime?page=${paginaAtual}`;
    const req = await fetch(url);
    const res = await req.json();
    const animes = res.data;
    animes.forEach((anime) => {
        cards.innerHTML += `
        <div class="card">
            <div class="card-img">
                <img src="${anime.images.jpg.image_url}"/>
            </div>
            <div class="card-textos">
                <h3 class="anime_titulo">${anime.title}</h3>
                <p>${anime.type} (${anime.episodes} Eps)</p>
                <h4>Nota: ${anime.score}<h4/>
            </div>
        </div>
         `;
    });
}