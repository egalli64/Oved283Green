$(function () {
    function anim(){
        var div = $("#testo");
        div.animate({ left: '100px', fontSize: '10em' }, "slow");
        div.animate({ right: '100px', fontSize: '2em' }, "slow");
    }
    $("#loop").click(function () {
        setInterval(anim, 2000);
    });    
});




