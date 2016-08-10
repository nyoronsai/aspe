jQuery(document).ready(function(){

	
	if($(window).width() > 780){
		
    $(window).scroll(function () {
        if ($(this).scrollTop() > 700) {
			$("#s-ad").addClass("open");
        } else {
			$("#s-ad").removeClass("open");
		}
		
    });

	};

});
