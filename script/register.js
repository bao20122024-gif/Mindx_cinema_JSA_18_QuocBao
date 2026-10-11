var re_form = document.getElementById("re_form");
re_form.addEventListener("submit", function(e) {
    e.preventDefault();

    var email = document.getElementById("txt_cr_email").value.trim();
    var username = document.getElementById("txt_cr_name").value.trim();
    var password = document.getElementById("txt_cr_Pass").value.trim();
    var c_password = document.getElementById("txt_cPass").value.trim();

    if (email === "" || username === "" || password === "" || c_password === "") {
        alert("Vui lòng điền đầy đủ thông tin");
        return;
    }

    if (password.length < 6) {
        alert("Mật khẩu phải có ít nhất 6 ký tự");
        return;
    }

    if (password !== c_password) {
        alert("Mật khẩu không khớp");
        return;
    }

    var users = localStorage.getItem('users');
    var newUser = {
        Email: email,
        Username: username,
        Password: password,
    };

    if (users == null) {
        localStorage.setItem('users', JSON.stringify([newUser]));
    } else {
        var arr_user = JSON.parse(users);
        var is_exsist = arr_user.some(user => user.Email === email);

        if (is_exsist) {
            alert("Tài khoản đã tồn tại");
            return;
        }

        arr_user.push(newUser);
        localStorage.setItem('users', JSON.stringify(arr_user));
    }

    alert("Tài khoản " + email + " đã được đăng ký thành công");
    window.location.href = "./login.html";
});