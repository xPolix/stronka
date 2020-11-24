function checkPswd() {
        var confirmPassword = "admin";
        var password = document.getElementById("pswd").value;
        if (password == confirmPassword) {
             window.location="52.2391541,16.8626765";
        }
        else{
            alert("Błędne hasło :(");
        }
    }
