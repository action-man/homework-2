var catalogMenu = (function() {

  var $moduleEl,
      $triggers,
      $levels;


  function init($elem) {
    $moduleEl = $elem;
    $triggers = $moduleEl.find('.js-catalog-menu__trigger');
    $levels = $moduleEl.find('.js-catalog-menu__level');

    attachEvents();

  }

  function attachEvents() {
    $moduleEl.on('click', '.js-catalog-menu__trigger', onTriggerClick);
  }

  function onTriggerClick(e) {
    e.preventDefault();

    var $this = $(this);

    $this.toggleClass('is-active');
    $triggers.not($this).removeClass('is-active');

    var level = $this.next('.js-catalog-menu__level');
    $levels.not(level).slideUp(200);

    level.stop(true, true).slideToggle(200);
  }


  return {
    init: init
  }

})();