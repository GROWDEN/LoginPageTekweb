function login() {
        if ($('Username').val() == 'coba' && $('Password').val() == 'test') {
            alert("you are a valid user");
            window.open('index.html', '_self');
        } else {
            alert("you are not a valid user");
            window.open('Login.html', '_self');
        }
    }