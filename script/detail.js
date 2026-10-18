var user_info = document.getElementById("user-info")
var auth_buttons = document.getElementById('auth-buttons')
var user_dis = document.getElementById("username-display")
var btn_log_out = document.getElementById("logout-button")

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

function movieDetailed(params) {

}




getMovieData(movieUrl)

getMovieData(movieUrl)