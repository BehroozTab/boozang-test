
window.onload = initForm;

var startSecond;

function randOrder(){
   return Math.floor(25* Math.random());
}

function showTime() 
{
    var time = new Date();

    thisSecond=time.getSeconds();
    thisMinute=time.getMinutes();
    thisHour=time.getHours();
	
	// change thisHour from 24-hour time to 12-hour time by:
    // 1) if thisHour < 12 then set ampm to " a.m." otherwise set it to " p.m."
    var ampm = (thisHour < 12) ? " a.m." : " p.m.";	 
	 
	// 2) subtract 12 from the thisHour variable
    thisHour = (thisHour > 12) ? thisHour - 12 : thisHour;
	
    // 3) if thisHour equals 0, change it to 12
    thisHour = (thisHour == 0) ? 12 : thisHour;
	
	// add leading zeros to minutes and seconds less than 10
    thisMinute = thisMinute < 10 ? "0"+thisMinute : thisMinute;
    thisSecond = thisSecond < 10 ? "0"+thisSecond : thisSecond;
	 
	document.forms[0].timeNow.value = thisHour + ":" + thisMinute + ":" + thisSecond + ampm;
}


function todayTxt() {
   var Today=new Date();
   return Today.getMonth()+1+"-"+Today.getDate()+"-"+Today.getFullYear();
}

function initForm() {
  

   document.forms[0].date.value = todayTxt();
   setInterval('showTime()',1000);
   
   document.forms[0].concat.onclick = fconcat;
   
   document.forms[0].showevent.onchange = fonchange;
   document.forms[0].showevent.onfocus = fonfocus;
   document.forms[0].showevent.onkeydown = fonkeydown;
   document.forms[0].showevent.onkeypress = fonkeypress;
   document.forms[0].showevent.onkeyup = fonkeyup;
   document.forms[0].showevent.onblur = fblur;
   document.forms[0].showevent.onclick = fclick;
   document.forms[0].showevent.ondblclick = fondblclick;
   document.forms[0].showevent.onmousedown = fonmousedown;
   document.forms[0].showevent.onmouseover = fonmouseover;
   document.forms[0].showevent.onmouseout = fonmouseout;
   document.forms[0].showevent.onmouseup = fonmouseup;
  
   var str = String.fromCharCode(randOrder() + 66)
	        + String.fromCharCode(randOrder() + 66)
			+ String.fromCharCode(randOrder() + 66)
			+ String.fromCharCode(randOrder() + 66)
			+ String.fromCharCode(randOrder() + 66)
			+ String.fromCharCode(randOrder() + 66);
									
   document.forms[0].randstr.value = str;
   
   document.forms[0].comparestr.onclick = fComclick;
   
   document.forms[0].additem.onclick = fadditem; 
   document.forms[0].deleteitem.onclick = fdeleteitem; 

   document.forms[0].timmer.onclick = ftimmer; 
   
   document.forms[0].onreset = resetForm;
   
}

function fComclick() {
	
   var str1 = document.forms[0].randstr.value;
   var str2 = document.forms[0].inputstr.value;
   
   if(str1 == str2){
	     	   alert(" Two strings are macthed.");
                }
   else {
	   	alert(" Two strings are not macthed.");
        var str = String.fromCharCode(randOrder() + 66)
                + String.fromCharCode(randOrder() + 66)
		    	+ String.fromCharCode(randOrder() + 66)
			    + String.fromCharCode(randOrder() + 66)
			    + String.fromCharCode(randOrder() + 66)
			    + String.fromCharCode(randOrder() + 66);
									
        document.forms[0].randstr.value = str;
        document.forms[0].inputstr.value = '';

        }
	
}

function fconcat() {
	
	var n = document.forms[0].nam.value;
	var f = document.forms[0].fam.value;
	
	document.forms[0].namfam.value = n + f;
	
}

function fonchange() {
	document.forms[0].event.value = ' onchange ';
}

function fonfocus() {
	document.forms[0].event.value = ' onfocus ';
}

function fonkeydown() {
	document.forms[0].event.value = ' onkeydown ';
}

function fonkeypress() {
	document.forms[0].event.value = ' onkeypress ';
}

function fonkeyup() {
	document.forms[0].event.value = ' onkeyup ';
}

function fonmouseup() {
	document.forms[0].event.value = ' onmouseup ';
}

function fonmouseout() {
	document.forms[0].event.value = ' onmouseout ';
}

function fonmouseover() {
	document.forms[0].event.value = ' onmouseover ';
}

function fblur() {
	document.forms[0].event.value = ' onblur ';
}

function fclick() {
	document.forms[0].event.value = ' onclick ';
}

function fondblclick() {
	document.forms[0].event.value = ' ondblclick ';
}

function fonmousedown() {
	document.forms[0].event.value = ' onmousedown ';
}

function ftimmer() 
{
    var time = new Date();

    thisSecond=time.getSeconds();
	
	var max = document.forms[0].maxtime;
	var min = document.forms[0].mintime;

    reqty = /^\d+$/;

   if(reqty.test(max.value)) {
	       if(reqty.test(min.value)) {
			                         if(document.forms[0].timmer.value == ' stop ')
	                                 {
                                       time =  thisSecond - startSecond;
      	                               document.forms[0].timmer.value = ' start ';
									   if (time < min.value)
                          	                    alert("Pre");
									   else if (time < max.value)
										        alert("during");
                                       else 
                          	                    alert("Post");					  
	                                  }
                                      else  {	
                                           startSecond = thisSecond;	
	                                       document.forms[0].timmer.value = ' stop ';
	                                        }
	       
                                      }
           else {
	            alert("Please enter a digit greater than or equal to 0");
	            min.value = 0;
	            min.focus(); 
	            }
      }
   else {
	   alert("Please enter a digit greater than or equal to 0");
	   max.value = 0;
	   max.focus(); 
	   }

	
}

function fadditem() 
{
	var num = document.forms[0].itemnum;

    reqty = /^\d+$/;

   if(reqty.test(num.value)) {
	   	                       num.value++;                                    
                             }
   else {
	   alert("Please enter a digit greater than or equal to 0");
	   num.value = 0;
	   num.focus(); 
	   }
	
}

function fdeleteitem() 
{	
	var num = document.forms[0].itemnum;

    reqty = /^\d+$/;

   if(reqty.test(num.value)&&(num.value>0)) {
	          	   	           num.value--;                                                      
                             }
   else {
	   alert("Please enter a digit greater than or equal to 0");
	   num.value = 0;
	   num.focus(); 
	   }
	
}


function resetForm() {
   
   location.reload();
}
