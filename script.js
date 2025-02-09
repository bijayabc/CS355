if (window.location.pathname.includes('page2.html')) {
    const formResponse = new URLSearchParams(location.search)

    const fullname = formResponse.get("fullname")
    const actor = formResponse.get("actor")
    const movie = formResponse.get("movie")
    const tvshow = formResponse.get("tvshow")
    const genre = formResponse.get("genre")

    const nameInput = document.getElementById('grid-fullname')
    const actorInput = document.getElementById('grid-actor')
    const movieInput = document.getElementById('grid-movie')
    const tvshowInput = document.getElementById('grid-tvshow')
    const genreInput = document.getElementById('grid-genre')

    nameInput.innerHTML = fullname
    actorInput.innerHTML = actor
    movieInput.innerHTML = movie
    tvshowInput.innerHTML = tvshow
    genreInput.innerHTML = genre

}

const theme = localStorage.getItem('theme')
const toggleButton = document.getElementById("toggle")

if (theme == 'dark') {
    toggleButton.innerHTML = 'LIGHT'
    document.body.classList.toggle('dark-mode')
}

handleToggle = () => {
    if (toggleButton.innerHTML == 'DARK') {
        toggleButton.innerHTML = 'LIGHT'
        localStorage.setItem('theme', 'dark')
        document.body.classList.toggle('dark-mode')
    } else {
        toggleButton.innerHTML = 'DARK'
        localStorage.setItem('theme', 'light')
        document.body.classList.toggle('dark-mode')
    }
}
toggleButton.addEventListener('click', handleToggle)