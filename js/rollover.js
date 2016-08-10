/************************************************
  
    Site Name: 
	Description: common script
	Version: 1.0
	Author: 
	Last Modified :

************************************************/
$(function()
{
		var targetImgs = $('img');
		
		targetImgs.each(function()
		{
			if(this.src.match('_off'))
			{
				
				this.rollOverImg = new Image();
				this.rollOverImg.src = this.getAttribute("src").replace("_off", "_on");;
				$(this.rollOverImg).css({position: 'absolute', opacity: 0});
				$(this).before(this.rollOverImg);
				
				$(this.rollOverImg).mousedown(function(){
					$(this).stop().animate({opacity: 0}, {duration: 0, queue: false});
				});
				
				$(this.rollOverImg).hover(function(){
					$(this).animate({opacity: 1}, {duration: 200, queue: false});
				},
				function(){
					$(this).animate({opacity: 0}, {duration: 200, queue: false});
				});
				
			}
		});
});
