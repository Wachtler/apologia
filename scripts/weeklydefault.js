function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      if (oldonload) {
        oldonload();
      }
      func();
    }
  }
}

function getWeekNumber(){
	date = new Date()
	
	var x = 0;
	
	if (date < new Date("2017","0", "23")){x = 15;}
	if (date < new Date("2017","0", "17")){x = 14;}
	if (date < new Date("2017","0", "9")){x = 13;}
	if (date < new Date("2016","11", "12")){x = 12;}
	if (date < new Date("2016","11", "5")){x = 11;}
	if (date < new Date("2016","10", "28")){x = 10;}
	if (date < new Date("2016","10", "14")){x = 9;}
	if (date < new Date("2016","10", "7")){x = 8;}
	if (date < new Date("2016","9", "31")){x = 7;}
	if (date < new Date("2016","9", "24")){x = 6;}
	if (date < new Date("2016","9", "17")){x = 5;}
	if (date < new Date("2016","9", "10")){x = 4;}
	if (date < new Date("2016","9", "3")){x = 3;}
	if (date < new Date("2016","8", "26")){x = 2;}
	if (date < new Date("2016","8", "19")){x = 1;}
	if (date < new Date("2016","8", "12")){x = 0;}
	
	return x;
}

addLoadEvent(function (){document.getElementById("embeddedlist").src="./embed/weeklyembed" + getWeekNumber() + ".html");