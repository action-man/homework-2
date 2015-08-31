$(document).ready(function() {

  if ($('.js-back-to-top').length) {
    backToTop.init($('.js-back-to-top'));
  }


  if ($('.js-catalog-menu').length) {
    catalogMenu.init($('.js-catalog-menu'));
  }


  $('.js-view-select').selectOrDie({
    onChange: function() {
      var val = $(this).val()

      $('.js-products')
        .removeClass('products_view-grid products_view-list')
        .addClass('products_view-' + val);
    }
  });

});