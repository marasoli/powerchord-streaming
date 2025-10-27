// FOOTER MUSIC PLAYER
const btnFavorite = document.querySelector('#favorite-button')

btnFavorite.addEventListener('click', () => {
    btnFavorite.classList.toggle('active')
})

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

const btnPlay = document.querySelector('#play-button')
let isPlaying = false

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

const range = document.querySelector('#range')
const timeDisplay = document.querySelector('#time-display')

range.addEventListener('input', () => {
    const seconds = parseInt(range.value)

    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60

    const formatted = `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`

    timeDisplay.textContent = formatted
})
