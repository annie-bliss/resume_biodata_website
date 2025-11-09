// small interactions using jQuery
$(function() {
  // set year
  $('#year, #year2').text(new Date().getFullYear());

  // mobile nav toggle
  $('#menuToggle').on('click', function(){
    $('.topnav').toggleClass('open');
  });

  // print btn
  $('#printBtn').on('click', function(){ window.print(); });

  // smooth anchor scroll for same page links
  $('a[href^="#"]').on('click', function(e){
    e.preventDefault();
    var target = $($(this).attr('href'));
    if(target.length) $('html,body').animate({scrollTop: target.offset().top - 20}, 400);
  });
});
