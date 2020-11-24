function checkPswd() {
        var confirmPassword = "admin";
        var confirmKod = "16.";
        var password = document.getElementById("pswd").value;
        var kod = document.getElementById("kodzik").value;
        if (password == confirmPassword && kod == confirmKod) {
             window.location="52.2391541,"+ kod +"8626765";
        }
        else{
            alert("Błędne hasło lub kod :(");
        }
    }
