$(document).ready(function(){
	// ===== Toggle mobile nav on click =====
	$(".showNav").click(function() {
		$(".nav-content").toggle(500);
	});

	$(".mobileShowDropdown").click(function() {
		$(".dropdown-content").toggle(500);
	});
	// ===== Scroll to Top on click =====
	$(".arrow-button").click(function(){
		$("html, body").animate({ scrollTop: "0" }, 300); 
	});

	// ===== Price live update =====
	$(document).ready(function(){
		$('#quantity').change(function(){
			if($('#quantity').val() < 0) {
				$('#totalPrice').html("Rp 0");
			} else {
				var totalHarga = $('#productPrice').val() * this.value;
		    	$('#totalPrice').html("Rp " + totalHarga);
			}
		});
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