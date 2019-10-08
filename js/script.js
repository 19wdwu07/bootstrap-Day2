$('#page2').hide();

$(document).ready(function(){

  $('#btn2').click(function(){
    $('#page2').show();
    $('#page1').hide();
  })

  $('#btn1').click(function(){
    $('#page1').show();
    $('#page2').hide();
  })
});
