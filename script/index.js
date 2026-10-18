var user_info = document.getElementById("user-info")
var auth_buttons = document.getElementById('auth-buttons')
var user_dis = document.getElementById("username-display")
var btn_log_out = document.getElementById("logout-button")
var moive_list = document.getElementById("movie_list")
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


function getMovieData(url) {
    fetch(url)
        .then(data => data.json())
        .then(data => {
            createMovieList(data.results)
        })
        .catch(error => {
            alert("Error")
            console.error(error)
        })
}

function createMovieList(film) {
    moive_list.innerHTML = "";
    var innerhtml = "";
    for (let i = 0; i < film.length; i++) {
        var movie = film[i];
        innerhtml += ` 
        <div class="col-3 mb-4">
                <div class="card">
                    <img src="https://image.tmdb.org/t/p/w300${movie.poster_path}" alt="photo" class="card-img-top">
                    <div class="card-body">
                       <a href="./detailed.html?movie_id=${movie.id}">${movie.title}</a>
                        <p class="card-text">${movie.overview}</p>
                    </div>
                </div>
            </div>`;

    }
    moive_list.innerHTML = innerhtml
}

getMovieData(movieUrl)