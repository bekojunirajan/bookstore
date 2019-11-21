$(document).ready(function(){
	$(window).scroll(function(){
		if($(this).scrollTop() > 50){
			$('nav').addClass("fixed-top");
			$('.fixed-top').css("background","#454545");
			$('.title-info h1').css("padding-top", "80px");
		}
		else{
			$('.fixed-top').css("background","transparent");
			$('nav').removeClass("fixed-top");
			$('.title-info h1').css("padding-top", "0px");
		}
	});
});