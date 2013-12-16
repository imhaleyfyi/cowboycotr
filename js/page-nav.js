$(document).ready(function() {
	var $navItems = [];
	$('ol.articles h1').each(function(index) {
		$(this).attr('id', index+1);
		$navItems.push('<li><a href="#' + (index+1) + '">' + $(this).text() + '</a></li>');
	});
	$('nav.sidebar ol').append($navItems.join(''));
});