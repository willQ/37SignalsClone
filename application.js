$('document').ready(function() {
	$('.basecamp_btn').mouseenter(function () {
		$('.mainlogo_text').hide();
		$('.basecamp_text').show();
		$('div.basecamp_btn').append("<img class='arrow' src='images/arrow-left.png'>");
	});
	$('.basecamp_btn').mouseleave(function () {
		$('.basecamp_text').hide();
		$('.mainlogo_text').show();
		$('img.arrow').remove();

	});

	$('.highrise_btn').mouseenter(function () {
		$('.mainlogo_text').hide();
		$('.highrise_text').show();
		$('div.highrise_btn').append("<img class='arrow' src='images/arrow-left.png'>");
	});
	$('.highrise_btn').mouseleave(function () {
		$('.highrise_text').hide();
		$('.mainlogo_text').show();
		$('img.arrow').remove();
	});

	$('.campfire_btn').mouseenter(function () {
		$('.mainlogo_text').hide();
		$('.campfire_text').show();
		$('div.campfire_btn').append("<img class='arrow_right' src='images/arrow-right.png'>");
	});
	$('.campfire_btn').mouseleave(function () {
		$('.campfire_text').hide();
		$('.mainlogo_text').show();
		$('img.arrow_right').remove();
	});
});