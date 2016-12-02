
window.onload = defineMarquee;

var marqueeTxt;

function  defineMarquee()
{
       marqueeTxt = document.getElementById("marqueeTxt1");
	   mStyles = document.defaultView.getComputedStyle(marqueeTxt, null);
	   topValue = parseInt(mStyles.getPropertyValue("left"));
	   marqueeTxt.style.left = topValue;
       setInterval("moveText()", 5);
}


function moveText() 
{
   
	   mStyles = document.defaultView.getComputedStyle(marqueeTxt, null);
	   var topPos = parseInt(mStyles.getPropertyValue("left"));
	   
	   if (topPos < -200) 
		   marqueeTxt.style.left = "1000px";
	    else {
			topPos--;
		    marqueeTxt.style.left = topPos + "px";		
		
		   
   }
   
}



