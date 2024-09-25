const url = `https://api.jikan.moe/v4/top/anime`;

const cards = document.querySelector("main");

async function mostrarCatalogo() {
    try {
        const req = await fetch(url);
        const res = await req.json();
        const animes = res.data;
        console.log(animes)
        animes.forEach((anime) => {
            cards.innerHTML += `
            <div class="card">
                <div class="card-img">
                    <img src="${anime.images.jpg.image_url}"/>
                </div>
                <div class="card-textos">
                    <h3>${anime.title}</h3>
                    <p>${anime.type}</p>
                </div>
            </div>
            `;
        });
    } catch (error) {
        console.error(error);
    }
}

mostrarCatalogo();