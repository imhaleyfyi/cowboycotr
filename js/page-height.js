$(document).ready(function(){
	var $height =  $(window).height();
	var $container = $('div.super-container > div.container.sixteen.columns');
	if ($container.height() < $height) {
		$container.height($height - 102);
	}
});