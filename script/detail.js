var user_info = document.getElementById("user-info")
var auth_buttons = document.getElementById('auth-buttons')
var user_dis = document.getElementById("username-display")
var btn_log_out = document.getElementById("logout-button")
    //-----------------------------------------------------
var backdrop_img = document.getElementById("backdrop-image")
var poster = document.getElementById("poster-image")
var movieTitle = document.getElementById("movie_title")
var movie_detail = document.getElementById("movie_detail")
var movieDate = document.getElementById("movie_release_date")
var movieGenre = document.getElementById("movie_genre")
const TMBD_API_KEY = 'a173250af1a6602792a99db6297d42b4';
const movieUrl = `https://api.themoviedb.org/3/trending/movie/week?api_key=${TMBD_API_KEY}`

function checkout() {
    var loginUser = localStorage.getItem("login-user")
    if (loginUser == null) {
        user_info.style.display = 'none';
        auth_buttons.style.display = 'block'

    } else {
        auth_buttons.style.display = 'none'
        user_info.style.display = 'block';

        var user = JSON.parse(loginUser)
        user_dis.innerText = user.Email;
    }
}
btn_log_out.addEventListener("click", function() {
    localStorage.removeItem("login-user");
    // window.location.href = "./login.html"
    checkout()
})
checkout()

function movieDetailed() {
    var query = new URLSearchParams(location.search);
    var movieID = query.get("movie_id")
        // console.log(movieID);
    var movie_url = `https://api.themoviedb.org/3/movie/${movieID}?api_key=${TMBD_API_KEY}`
    fetch(movie_url)
        .then(data => data.json())
        .then(data => {
            backdrop_img.src = `https://image.tmdb.org/t/p/original${data.backdrop_path}`
            poster.src = `https://image.tmdb.org/t/p/w300${data.poster_path}`
            movieTitle.innerText = data.title;
            movie_detail.innerText = data.overview;
            movieDate.innerText = `Release date: ${data.release_date}`
            let genres = "";
            for (let i = 0; i < data.genres.length; i++) {
                genres += data.genres[i].name + ", ";
            }
            movieGenre.innerText = "Genres: " + genres

        })
        .catch(error => {
            alert("error")
            console.error(error)
        })

}
movieDetailed()