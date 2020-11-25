function checkPswd() {
        var confirmPassword = "admin";
        var password = document.getElementById("pswd").value;
        var kod = document.getElementById("kodzik").value;
        if (password == confirmPassword) {
             window.location="52.2391541,"+ kod +"8626765";
        }
        else{
            alert("Błędne hasło lub kod :((");
            changeBackground("red");
        }
    }


function goBack() {
  window.history.back();
}

function changeBackground(color) {
   document.body.style.background = color;
   Thread.sleep(10);
   alert("a teraz kolor na blue");
}
