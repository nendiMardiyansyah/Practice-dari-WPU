// event pada saat link diklik
$('.page-scroll').on('click', function(e) {
  //ambil isi dari href
  const href = $(this).attr('href');
  
  //tangkap element ybs
  const eHref = $(href);
  
  // ( problem solving✓. Terdapat error / kesalahan. Harus menggunakan 'html,' sebeleum body. )
  
  //pindahkan scroll
  $('html, body').animate({
    scrollTop: eHref.offset().top - 50
  }, 1250, 'easeInOutExpo');
  e.preventDefault();
});


// Paralax
// About - (load)
$(window).on('load', function() {
  $('.pKiri').addClass('pMuncul');
  $('.pKanan').addClass('pMuncul');
});

$(window).scroll(function() {
  let wScroll = $(this).scrollTop();
  // Jumbotron
  $('.jumbotron img').css({
    "transform": "translate(0px, "+ wScroll/4 +"%)"
  });
  $('.jumbotron h1').css({
    "transform": "translate(0px, "+ wScroll/2 +"%)"
  });
  $('.jumbotron p').css({
    "transform": "translate(0px, "+ wScroll/1.1 +"%)"
  });
  $('hr.koma').css({
    "display": "none"
  });
  
  
  // Portfolio
  if(wScroll > $('.portfolio').offset().top - 250){
    
    $('.portfolio .thumbnail').each(function(i) {
      setTimeout(function() {
        $('.portfolio .thumbnail').eq(i).addClass('muncul');
      }, 300 * (i+1));
    })
    
  };
});