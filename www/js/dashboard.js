$(document).ready(function(){
	$(".button-collapse").sideNav();
	$('.modal').modal();

	$('.calculate-semester').on('click',function(){
		$('.button-collapse').sideNav('hide');
	});
});