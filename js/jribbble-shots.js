$.jribbble.setToken('7f9dffbff413d2f25df26a8f67c433249a416ce1c0f4629b5f8beb904640329b');

$.jribbble.users('smallreflection').shots({per_page: 8}).then(function(shots) {
  var html = [];

  shots.forEach(function(shot) {
    html.push('<li class="shots--shot">');
    html.push('<a href="' + shot.html_url + '" target="_blank">');
    html.push('<img src="' + shot.images.normal + '">');
    html.push('</a></li>');
  });

  $('.shots').html(html.join(''));
});
