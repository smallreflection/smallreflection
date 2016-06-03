(function ($) {
  "use strict";

    function onScrollAnimations() {
    $('.wp-1').waypoint(function() {
      $('.wp-1').addClass('animated fadeInUp');
    }, {
      offset: '75%'
    });

    $('.wp-2').waypoint(function() {
      $('.wp-2').addClass('animated fadeInRight');
    }, {
      offset: '75%'
    });
  }

    onScrollAnimations();

})(jQuery)
