// JavaScript Document

$(document).ready(function() {
	$('.slide-down').hide();
	$('.up').hide();
    $('.glyphicon-arrow-down').click(function(){
		$('.slide-down').slideToggle('slow');
		$('.down').hide();
		$('.up').show();
	});
	$('.glyphicon-arrow-up').click(function(){
		$('.slide-down').slideToggle('slow');
		$('.up').hide();
		$('.down').show();
	});
});