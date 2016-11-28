$(document).ready(function() {
	var length = 64;
	var squareLength = 760/length;
	for (var i = 0; i < length; ++i) {
		$('#grid').append("<div class=\"line\">");
		for (var j = 0; j < length; ++j) {
			$('#grid').append("<div class=\"square\"></div>");
		}
		$('#grid').append("</div>");
	}

	$('.square').width(squareLength);
	$('.square').height(squareLength);

	$('.square').mouseenter(function() {
		$(this).css("background-color","#22a");
	});

	$('#clear').click(function() {
		var newLength = prompt("How many squares do you want on each side?");
		$('.square').each(function() {
			$(this).css("background-color","#fff");
		});
		length = newLength;
	});

});