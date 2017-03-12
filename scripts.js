$(document).ready(function(){
  for(var j=1;j<6;j++){
    for (var i = 0; i < 64 / Math.pow(2,j); i++) {
      $('.round-'+j).append("<div class='row match1 team"+ i % 2+"'><span class='internal-border'>team " + i + "</span></div>")
    };
  }
  for (var i = 0; i < 2; i++) {
    $('.round-6').append("<div class='row match1 team"+ i % 2+"'><span class='internal-border'>team " + i + "</span></div>")
  };
});
