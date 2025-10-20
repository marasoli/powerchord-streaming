// FAVORITE BUTTON
const btnFavorite = document.querySelector('#favorite-button')

btnFavorite.addEventListener('click', () => {
    btnFavorite.classList.toggle('active')
})

// ADD BUTTON
const btnAddPlaylist = document.querySelector('#playlist-add')
let isCheck = false

btnAddPlaylist.addEventListener('click', () => {
    isCheck = !isCheck

    if (isCheck) {
        btnAddPlaylist.classList.remove('fa-plus')
        btnAddPlaylist.classList.add('fa-check')
    } else {
        btnAddPlaylist.classList.remove('fa-check')
        btnAddPlaylist.classList.add('fa-plus')
    }
})

// PLAY BUTTON
const btnPlay = document.querySelector('#play-button')
let isPlaying = true

btnPlay.addEventListener('click', () => {
    isPlaying = !isPlaying

    if (isPlaying) {
        btnPlay.classList.remove('fa-circle-play')
        btnPlay.classList.add('fa-circle-pause')
    } else {
        btnPlay.classList.remove('fa-circle-pause')
        btnPlay.classList.add('fa-circle-play')
    }
})
