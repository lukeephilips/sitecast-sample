$(document).ready(function(){
  for (var i = 0; i < 32; i++) {
    $('.round-1').append("<div class='row match1 team"+ i % 2+"'><span class='internal-border'>team " + i + "</span></div>")
  };
  for (var i = 0; i < 16; i++) {
    $('.round-2').append("<div class='row match2 team"+ i % 2+"'><span class='internal-border'>team " + i + "</span></div>")
  };
  for (var i = 0; i < 8; i++) {
    $('.round-3').append("<div class='row team"+ i % 2+"'><span class='internal-border'>team " + i + "</span></div>")
  };
  for (var i = 0; i < 4; i++) {
    $('.round-4').append("<div class='row team"+ i % 2+"'><span class='internal-border'>team " + i + "</span></div>")
  };
  for (var i = 0; i < 2; i++) {
    $('.round-5').append("<div class='row team"+ i % 2+"'><span class='internal-border'>team " + i + "</span></div>")
  };
  for (var i = 0; i < 2; i++) {
    $('.round-6').append("<div class='row team"+ i % 2+"'><span class='internal-border'>team " + i + "</span></div>")
  };
  // $('.team0').click(function(){
  //   $(this).addClass("won")
  //   $(this).siblings().addClass("lost")
  // });
});
