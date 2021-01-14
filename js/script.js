$(document).ready(function(){
	// Open mobile nav when clicking on burger menu
	$("#nav-toggle").click(function(){
		$(".responsive-menu li").slideDown("Slow");
		$(".nav-dim").slideDown("Slow");
	});

	// Open dropdown when clicking on provided div id
	$("#dropbtn-mobile").click(function(){
		$(".dropdown-toggle").toggle("Slow");
	});

	// Close mobile nav when clicking on dark side
	$(".nav-dim").click(function() { 
		$(".responsive-menu li").slideUp("Slow");
		$(".nav-dim").slideUp("Slow");
		$(".dropdown-toggle").slideUp("Slow");
	});

	// Scroll to Top on click
	$(".arrow-button").click(function(){
		$("html, body").animate({ scrollTop: "0" }, 300); 
	});

	// Search (Kinda) feature. Actually more like filter
	$("#searchItems").on("keyup", function() {
		var value = $(this).val().toLowerCase();
		$(".items").filter(function() {
			$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
		});
	});

	// ===== Price live update =====
	$('#quantity').change(function(){
		if($('#quantity').val() < 0) {
			$('#totalPrice').html("Rp 0");
		} else {
			var totalHarga = $('#productPrice').val() * this.value;
	    	$('#totalPrice').html("Rp " + totalHarga);
		}
	});
});

$(document).scroll(function() {
	// Show arrow button when user has scrolled 500px down
	if ($(document).scrollTop() >= 500) {
		$(".arrow-button").css("right", "2%");
	} else {
		$(".arrow-button").css("right", "-50%");
	}
});