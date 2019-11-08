function check() {
    let user = document.getElementById("user").value;
    let pass = document.getElementById("pass").value
    if (user.length > 6 && pass.length > 6) {
        window.location = "/index.html";
        return false;
    }
    else {
        window.alert('Inserisci username e password nelle apposite caselle');
    }
    return false
}

$(function () {
    $('#reg').click(function () {
        $(".popup, .popup-content").toggleClass("active");
    });
});