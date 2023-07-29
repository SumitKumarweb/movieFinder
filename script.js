document.getElementById("btn-search").addEventListener("click", async () => {
    const value = document.getElementById("search-value").value;
    const url = `https://online-movie-database.p.rapidapi.com/auto-complete?q=${value}`;

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'd5954b5b9emsh7c9a963540a5437p1ea164jsn848d2c0c6f4f',
            'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();
        const cards = document.getElementById("cards");
        cards.innerHTML = '';

        data.d.forEach(element => {
            const card = document.createElement("div");
            card.innerHTML = `
          <div class="card">
            <img src="${String(element.i.imageUrl)}" alt="movie image">
            <h1>${element.l}</h1>
            <button>Watch Now</button>
          </div>
        `;
            cards.append(card);
        });
    } catch (error) {
        console.error(error);
    }
});