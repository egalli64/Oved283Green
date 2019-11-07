$(function () {
  $("#flip").click(function () {
    $("#panel").slideToggle();
  });
  $('#move').click(function () {
    $('#animotion').animate({
      height: '+=100px',
      width: '+=150px'
    });
  });
  $('#animotion').click(function(){
    $('#surprise').slideToggle();
  });
});