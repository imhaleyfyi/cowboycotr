nav = "nav.sixteen.columns.not-small";

$(document).ready(function(){
	$(".nav-trigger").click(function(){
		$(nav).toggle("blind")
	})

	$(window).resize(function(){
		if ($(window).width() > 767) {
			$(nav).show();
		}

		if ($(window).width() < 768) {
			$(nav).hide();
		}
	});
});