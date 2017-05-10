$(document).ready(function() {

		
	$(".select-seat.btn-yellow").on('click',function() {
		($(this).closest(".train-wrapper").find(".coach-classes-wrapper")).toggle();
	});

	$("#block-userblock").on('click',function() {
		$("#block-userblock>.block__inner").toggle();
	});
	
	


});