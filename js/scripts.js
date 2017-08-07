$(window).ready(function() {

	console.log('Let\'s eat later');

	$('.category-item-name').click(function() {
		$(this).parent().siblings().removeClass('active');
		$(this).parent().toggleClass('active');
	});



});