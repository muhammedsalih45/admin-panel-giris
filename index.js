document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Basit bir kullanıcı doğrulama işlemi
    if (username === 'admin' && password === '1234') {
        // Başarılı giriş işlemi, admin paneline yönlendirme
        window.location.href = 'admin-panel.html';
    } else {
        alert('Hatalı kullanıcı adı veya şifre. Tekrar deneyin.');
    }
});


