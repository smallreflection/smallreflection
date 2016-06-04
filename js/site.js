(function ($) {
  "use strict";

    function onScrollAnimations() {
    $('.wp-1').waypoint(function() {
      $('.wp-1').addClass('animated fadeInUp');
    }, {
      offset: '80%'
    });

    $('.wp-2').waypoint(function() {
      $('.wp-2').addClass('animated fadeInRight');
    }, {
      offset: '80%'
    });
  }

    onScrollAnimations();

})(jQuery)
