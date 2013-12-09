$('document').ready(function() {
	$('.basecamp_btn').mouseenter(function () {
		$('.mainlogo_text').hide();
		$('.basecamp_text').show();
	});
	$('.basecamp_btn').mouseleave(function () {
		$('.basecamp_text').hide();
		$('.mainlogo_text').show();
	});

	$('.highrise_btn').mouseenter(function () {
		$('.mainlogo_text').hide();
		$('.highrise_text').show();
	});
	$('.highrise_btn').mouseleave(function () {
		$('.highrise_text').hide();
		$('.mainlogo_text').show();
	});

	$('.campfire_btn').mouseenter(function () {
		$('.mainlogo_text').hide();
		$('.campfire_text').show();
	});
	$('.campfire_btn').mouseleave(function () {
		$('.campfire_text').hide();
		$('.mainlogo_text').show();
	});
});