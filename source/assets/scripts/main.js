function attachListeners(){
  $('ul.nav li.dropdown').hover(function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
  }, function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
  });

  $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top -50
          }, 1000);
          return false;
        }
      }
    });
  });
}



$(document).ready(equalise);
$(document).ready(attachListeners);

$(window).resize(equalise);

function equalise(){

  $(".grp1").height("auto");
  $(".grp2").height("auto");
  $(".grp3").height("auto");
  $(".grp4").height("auto");

  if( $(window).width() > 750 ) {

    var grp1MaxHeight = 0;
    var grp2MaxHeight = 0;
    var grp3MaxHeight = 0;
    var grp4MaxHeight = 0;

    $(".grp1").each(function(){
      if ($(this).height() > grp1MaxHeight) { 
        grp1MaxHeight = $(this).height(); 
      }
    });

    $(".grp2").each(function(){
      if ($(this).height() > grp2MaxHeight) { 
        grp2MaxHeight = $(this).height(); 
      }
    });

    $(".grp3").each(function(){
      if ($(this).height() > grp3MaxHeight) { 
        grp3MaxHeight = $(this).height(); 
      }
    });
    
    $(".grp4").each(function(){
      if ($(this).height() > grp4MaxHeight) { 
        grp4MaxHeight = $(this).height(); 
      }
    });

    $(".grp1").height(grp1MaxHeight);
    $(".grp2").height(grp2MaxHeight);
    $(".grp3").height(grp3MaxHeight);
    $(".grp4").height(grp4MaxHeight);
  }
}

