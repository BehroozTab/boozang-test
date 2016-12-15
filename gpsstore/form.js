/*

   Filename: form.js



   Functions List:

   todayTxt()
      Returns the current date in the format mm-dd-yyyy

   initForm()
      Sets up and initializes the Web form.

   productCosts()
      Returns the total product costs

   shipExpense()
      Stores the value of the selected shipping option

   calcTotal()
      Calculates the total cost of the order

   calcShipping()
      Calculates the total cost of shipping and updates the
      total cost of the order

   calcCost()
      Calculates the cost of each order and updates the total 
      cost

   validateForm()
      Validates the form prior to submission

   resetForm()
      Resets the Web form and Web page


*/

window.onload = initForm;

var displayevent;

function showTime(time) 
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
   document.forms[0].qty1.focus();
   
  
   document.forms[0].onsubmit = validateForm;
   document.forms[0].onreset = resetForm;
	
   document.forms[0].qty1.onblur = calcCost;
   document.forms[0].qty2.onblur = calcCost;
   document.forms[0].qty3.onblur = calcCost;
   document.forms[0].qty4.onblur = calcCost;
   document.forms[0].qty5.onblur = calcCost;
   document.forms[0].qty6.onblur = calcCost;
   
   document.forms[0].shipping.onchange = calcShipping; 
}


function calcCost() {
   
   var iNum = this.id.slice(3);
   var price = document.forms[0].elements["price"+ iNum];
   var qty = document.forms[0].elements["qty"+ iNum];
   var cost = document.forms[0].elements["cost"+ iNum];
   
   reqty = /^\d+$/;
   
   if(reqty.test(qty.value)) {
	       cost.value = (price.value * qty.value).toFixed(2);
		   calcTotal();  
   }
   else {
	   alert("Please enter a digit greater than or equal to 0");
	   qty.value =0;
	   qty.focus(); }
  
}

function productCosts() {
	
	var pc1 = parseFloat(document.forms[0].cost1.value);
	var pc2 = parseFloat(document.forms[0].cost2.value);
	var pc3 = parseFloat(document.forms[0].cost3.value);
	var pc4 = parseFloat(document.forms[0].cost4.value);
	var pc5 = parseFloat(document.forms[0].cost5.value);
	var pc6 = parseFloat(document.forms[0].cost6.value);
	
	return (pc1 + pc2 + pc3 + pc4 + pc5 + pc6);

}

function shipExpense() {
	
	var  sindex = document.forms[0].shipping.selectedIndex;
	
	return parseFloat(document.forms[0].shipping.options[sindex].value);

}

function calcTotal() {
   
   var ordercost = productCosts();
   var ordertax = ordercost * 0.05;
   var ordership = shipExpense();
   var ordertotal = ordercost + ordertax + ordership;
   
   document.forms[0].tax.value = ordertax.toFixed(2);	
   document.forms[0].total.value = ordertotal.toFixed(2);
}

function calcShipping() {
   
   document.forms[0].shipcost.value = shipExpense();
   
   calcTotal();  
}

function validateForm() {
   
   if(document.forms[0].shipping.selectedIndex == 0)
   {
	   alert("You must select a shipping option");
	   document.forms[0].shipping.focus();
	   return false;
   }
    else
	{
		return true;
	}
}

function resetForm() {
   
   location.reload();
}
