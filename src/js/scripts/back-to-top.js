var backToTop = (function(argument) {
  
  var $moduleEl;


  function init($elem) {
    $moduleEl = $elem;

    // кол-во прокченных пикселов, когда кнопка должна появиться
    var shouldBeVisible = 100,
        animateSpeed = 300;


    $(window)
      .on('scroll', function() {
        if ($(window).scrollTop() >= shouldBeVisible) {
          $moduleEl.fadeIn(200);
        }
        else {
          $moduleEl.fadeOut(200);
        }
      })
      .trigger('scroll');


    $moduleEl.on('click', function(e) {
      e.preventDefault();

     $('html, body').animate({
         scrollTop: 0
     }, animateSpeed);
    });

  }


  return {
    init: init
  }

})();