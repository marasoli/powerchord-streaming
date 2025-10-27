const iptSearch = document.querySelector('#search-input')
const mainPlaylists = document.querySelector('.seggested-playlists')
const resultSearch = document.querySelector('.search-result')
const artistsGrid = document.querySelector('.artists-grid')

function requestApi(searchTerm) {
    fetch(`http://localhost:3000/artists?band_like=${encodeURIComponent(searchTerm)}`)
        .then(response => response.json())
        .then(results => displayResults(results))
}

function displayResults(results) {
    hidePlaylists()
    artistsGrid.innerHTML = ""

    const searchTerm = iptSearch.value.toLowerCase().trim()
    const filtered = results.filter(artist =>
        artist.band.toLowerCase().includes(searchTerm)
    )

    if (filtered.length === 0) {
        resultSearch.innerHTML = "<h2>Nenhum artista encontrado.</h2>"
        resultSearch.classList.remove("hidden")
        return
    }

    filtered.forEach(artist => {
        const card = document.createElement("div")
        card.classList.add("artists-card")

        card.innerHTML = `
            <div class="card-img">
                <img src="${artist.urlImg}" alt="${artist.band}">
                <button class="fa-solid fa-shuffle"></button>
            </div>

            <div class="card-text">
                <a href="" class="artist-name">${artist.band}</a>
                <span class="musical-genre">${artist.genre}</span>
            </div>
        `

        artistsGrid.appendChild(card)
        checkMarqueeForCard(card)
    })

    resultSearch.classList.remove("hidden")
}

function hidePlaylists() {
    mainPlaylists.classList.add("hidden")
}

iptSearch.addEventListener("input", function () {
    const searchTerm = iptSearch.value.toLowerCase()
    if (searchTerm === "") {
        resultSearch.classList.add("hidden")
        mainPlaylists.classList.remove("hidden")
        return
    }
    requestApi(searchTerm)
})

function checkMarqueeForCard(card) {
    const marquee = card.querySelector('.card-text')
    const text = card.querySelector('.artist-name')

    if (text.scrollWidth > marquee.clientWidth) {
        text.style.animation = 'scrollText 8s linear infinite'
    } else {
        text.style.animation = 'none'
        text.style.transform = 'translateX(0)'
    }
}
