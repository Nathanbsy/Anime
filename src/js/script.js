let pagina = 1;

let url = `https://myanimelist.p.rapidapi.com/anime/top/all?p=${pagina}`;
const opcoes = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '28a45349eemsh32d4f46539be530p187e76jsnf22cc51df762',
        'x-rapidapi-host': 'myanimelist.p.rapidapi.com'
    }
};

const cards = document.querySelector("main");

async function mostrarCatalogo() {
    try {
        const req = await fetch(url, opcoes);
        const res = await req.json();
        res.forEach((anime) => {
            cards.innerHTML += `
            <div class="card">
                <div class="card-img">
                    <img src="${anime.picture_url}"/>
                </div>
                <div class="card-textos">
                    <h3>${anime.title}</h3>
                    <p>${anime.type}</p>
                </div>
            </div>
            `;
        });
        console.log(res);
    } catch (error) {
        console.error(error);
    }
}

mostrarCatalogo();