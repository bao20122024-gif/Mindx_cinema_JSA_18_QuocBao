var login_form = document.getElementById("log_form");
login_form.addEventListener("submit", function(e) {
    e.preventDefault()

    var username = document.getElementById("username").value.trim();
    var password = document.getElementById("password").value.trim();
    // if (username === "" || password === "") {
    //     alert("Vui lòng điền đầy đủ thông tin");
    //     return;
    // }
    var users = localStorage.getItem('users');
    var userislogin = null;
    var user_arr = JSON.parse(users)
    user_arr.forEach(u => {
        if (u.Username === username && u.Password === password) {
            userislogin = u;
            return;
        }

    });
    if (userislogin === null) {
        alert("Tai khoan hoac mat khau khong dung")
        return
    }
    localStorage.setItem("login-user", JSON.stringify(userislogin));
    alert("Dang nhap thanh cong")
    window.location.href = './index.html'
})