$(document).ready(function(){
	// ===== Toggle mobile nav on click =====
	$(".showNav").click(function(){
		$(".nav-responsive").toggle(500);
	});

	// ===== Scroll to Top on click =====
	$(".arrow-button").click(function(){
		$("html, body").animate({ scrollTop: "0" }, 300); 
	});
});

$(document).scroll(function() {
	// ===== Show arrow button when user has scrolled 500px down =====
	if ($(document).scrollTop() >= 500) {
		$(".arrow-button").css("right", "2%");
	} else {
		$(".arrow-button").css("right", "-50%");
	}
});