jQuery(document).ready(function() {

	var windowH = jQuery(window).height();
    var windowW = jQuery(window).width();
    jQuery("#shadow").css("height", windowH);
    jQuery("#shadow").css("width", windowW);
    var createEventHeight = jQuery("#createEvent").height();
    var createEventMarginTop = (windowH - createEventHeight)/2;
    jQuery("#createEvent").css("margin-top", createEventMarginTop);
    
    jQuery("#createEventClose").click(function() {
    	jQuery(this).parents("#createEvent").hide();
    	jQuery(this).parents("#shadow").hide();
    });

	var calCropOffset = jQuery(".days").offset();
	calOffSetTop = calCropOffset.top;
	calOffSetLeft = calCropOffset.left;

	//alert("loaded!");
	var monthNameList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	
	var monthDayTotals = ["31", "28", "31", "30", "31", "30", "31", "31", "30", "31", "30", "31"];
	var monthDayTotalsLeap = ["31", "29", "31", "30", "31", "30", "31", "31", "30", "31", "30", "31"];

	var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	
	
	var weekList = new Array();
	
	
	var theYear = 2012;
	var theWeek = 1;
	var leapYearCount = 1;
	var leapYear = true;
	var week52total = 1;
	var currentMonth = 0;
	
	var day365 = 1;
	var dayTotal = 366;
	var yearDayTotal;
	var day7 = 1;
	var weekday1;
	var weekday2;
	var weekday3;
	var weekday4;
	var weekday5;
	var weekday6;
	var weekday7;
	var total365 = 1;
	var useLeapArray;
	var theArray;
	for (var loopFuel = 1; loopFuel < 100; loopFuel++) {
		
		if (leapYearCount == 1) {
			// leap year
			leapYear = true;
			useLeapArray = true;
			dayTotal = 367; 
			theArray = monthDayTotalsLeap;
			//leap();
			leapYearCount++;
		} else if (leapYearCount == 4) {
			leapYearCount = 1;
			leapYear = false;
			useLeapArray = false;
			dayTotal = 366; 
			theArray = monthDayTotals;
			//leap();
		} else {
			//not leap year
			leapYear = false;
			useLeapArray = false;
			dayTotal = 366; 
			theArray = monthDayTotals;
			//leap();
			leapYearCount++;
		}
		
		/*function leap() {
			if (leapYear == true) {
				jQuery("#box").append("<p>leap year!" + loopFuel + "</p>");
			} else {
				jQuery("#box").append("<p>not leap year!" + loopFuel + "</p>");
			}
		}*/
		
		
			for (var i=0; i<dayTotal; i++) {
				if (day7 == 1) {
					weekday1 = monthNameList[currentMonth] + " " + day365;
				} else if (day7 == 2) {
					weekday2 = monthNameList[currentMonth] + " " + day365;
				} else if (day7 == 3) {
					weekday3 = monthNameList[currentMonth] + " " + day365;
				} else if (day7 == 4) {
					weekday4 = monthNameList[currentMonth] + " " + day365;
				} else if (day7 == 5) {
					weekday5 = monthNameList[currentMonth] + " " + day365;
				} else if (day7 == 6) {
					weekday6 = monthNameList[currentMonth] + " " + day365;
				} else if (day7 == 7) {
					weekday7 = monthNameList[currentMonth] + " " + day365;
				}
				
				if (day365 == theArray[currentMonth] ) {
					day365 = 1;
					if (currentMonth == 11) {
						currentMonth = 0;
						theYear++;
					} else {
						currentMonth++;
					}
				} else {
					day365++;
				}
				
				if(day7 == 7) {
					day7 = 1;
					weekList.push({
					weekYear: theYear, 
					weekSunday: weekday1 + ", " + theYear, 
					weekMonday: weekday2 + ", " + theYear, 
					weekTuesday: weekday3 + ", " + theYear, 
					weekWednesday: weekday4 + ", " + theYear, 
					weekThursday: weekday5 + ", " + theYear, 
					weekFriday: weekday6 + ", " + theYear,  
					weekSaturday: weekday7 + ", " + theYear
					});
				} else {
					day7++;
				}
				
				
			} // for end
	} //for loopfuel
	
	
	
	var current = new Date();  
 	var month = current.getMonth();  
 	var day = current.getDate();  
 	var year = current.getFullYear();
 	//var thisDay = current.getDay();
 	var dateString = monthNameList[month] + " " + day + ", " +  year;
 	
 	for (var c = 0; c < 100; c++) {
 		if (dateString == weekList[c].weekSunday) {
 			//alert("Sunday Match");
 			fillTableHead();
 			break;
 		} else if (dateString == weekList[c].weekMonday) {
 			//alert("Monday Match");
 			fillTableHead();
 			break;
 		} else if (dateString == weekList[c].weekTuesday) {
 			//alert("Tuesday Match");
 			fillTableHead();
 			break;
 		} else if (dateString == weekList[c].weekWednesday) {
 			//alert("Wednesday Match");
 			fillTableHead();
 			break;
 		} else if (dateString == weekList[c].weekThursday) {
 			//alert("Thursday Match");
 			fillTableHead();
 			break;
 		} else if (dateString == weekList[c].weekFriday) {
 			//alert("Friday Match");
 			fillTableHead();
 			break;
 		} else if (dateString == weekList[c].weekSaturday) {
 			//alert("Saturday Match");
 			fillTableHead();
 			break;
 		}
 	}
 	
 	function fillTableHead() {
 		jQuery("#days-header thead tr").append("<th>" + weekList[c].weekSunday + "</th><th>" + weekList[c].weekMonday + "</th><th>" + weekList[c].weekTuesday + "</th><th>" + weekList[c].weekWednesday + "</th><th>" + weekList[c].weekThursday + "</th><th>" + weekList[c].weekFriday + "</th><th>" + weekList[c].weekSaturday + "</th>");
 		jQuery(".weekBeginMonth").text(weekList[c].weekSunday);
 		jQuery(".weekEndMonth").text(weekList[c].weekSaturday);
 		jQuery('#days-header thead tr th').each(function() {
       	 	//jQuery(this).text(jQuery(this).text().replace(', 2012', ''));
       	 	jQuery(this).text(jQuery(this).text().replace(", " + weekList[c].weekYear + "", ""));
    	});
 	}
 	
 	jQuery("#previousWeek").click(function(event) {
 		event.preventDefault();
 		//alert("clicked!");
 		c--;
 		clearTableHead();
 	});
 	
 	jQuery("#nextWeek").click(function(event) {
 		event.preventDefault();
 		//alert("clicked!");
 		c++;
 		clearTableHead();
 	});
 	
 	function clearTableHead() {
 		jQuery("#days-header thead tr").empty();
 		fillTableHead();
 		//stripYear();
 	}
 	
 	function stripYear() {
 		
    }
    
    stripYear();
    
    var clickCheck = false;
    jQuery("#friends-btn").click(function() {
    	
    	if (clickCheck == false) {
    		clickCheck = true;
    		jQuery(this).parents(".friends h2").find("span.arrow").css("background-position", "-64px -16px");
    	} else {
    		clickCheck = false;
    		jQuery(this).parents(".friends h2").find("span.arrow").css("background-position", "-32px -16px");
    	}
    	jQuery(this).parents(".friends").find("#friends-list").slideToggle();
    });
    
 	
 	//alert(dateString);
	
	
	
	/*function updateText() {
		for (var c = 0; c < 1000; c++) {
		//jQuery("#box").append("<p>" + weekList[i].weekYear + "</p>");
		jQuery("#box").append("<p>" + weekList[c].weekYear + "," + weekList[c].weekSunday + "," + weekList[c].weekMonday + "," + weekList[c].weekTuesday + "," + weekList[c].weekWednesday + "," + weekList[c].weekThursday + "," + weekList[c].weekFriday + "," + weekList[c].weekSaturday + "</p>");
		}
		
	}*/
	
	// fire the text output
	//updateText();
	
	var mainHeight = jQuery("#main").height();
	var sidebarHeight = jQuery("#sidebar-left").height();
	
	function setHeight() {
		//alert(mainHeight);
		if (mainHeight > sidebarHeight) {
			jQuery("#sidebar-left").css("height", mainHeight);
		}
	}
 
 	setHeight();
 	
 	
 	
 	//jQuery(".slide-box").css("margin-top", "100px");
 	
 	jQuery(".slide-box").draggable({
		containment: "parent"
	});
	
	jQuery(".slide-box").bind("drag", function() {
		//jQuery(this).css("background-color", "pink");
		var barOffset = jQuery(".scroll-padding").offset();
		//alert(barOffset.top);
		var barTop = barOffset.top;
		var slideOffset = jQuery(this).offset();
		var slideTop = slideOffset.top;
		jQuery(".slide-box").css("top", slideTop-barTop);
		
		var slideDifference = slideTop - barTop;
		var slidePercent = (slideDifference * 100) / 450;

		var calPercent = ((1125 * slidePercent) / 100) * -1;
		jQuery(".days").css("margin-top", calPercent);
		jQuery("#times").css("margin-top", calPercent);  
		//jQuery(".percent").text(slidePercent);
	});
	
	
	// initial position, moves everything to 8am
	function setSlide() {
		// begin at 8:00am
 		jQuery(".days").css("margin-top", "-400px");
 		jQuery("#times").css("margin-top", "-400px");
 		var slidePosition = (32*500)/100;
 		jQuery(".slide-box").css("top", slidePosition);
		
	}
 	setSlide();
 	
 	
 	var flag = false;
	jQuery(".days table").mousedown(function(event){
   		flag = true;
   		var target = jQuery(event.target);
   		
   		if (target.hasClass("box")) {
   			// if you clicked on an existing box, don't do anything
   			jQuery(".boxStatus").text("mouse clicked on a box");
   			//alert("yes");
   			flag = false;
   		} else {
   			// if you DIDN'T click on an existing box, create new event
   			jQuery(".boxStatus").text("not on a box");
   			
   			/*var currentCalMarginTop = parseInt(jQuery(".days").css("margin-top"));
   			var currentCalMarginLeft = parseInt(jQuery(".days").css("margin-left"));
   			
   			var clickY = (event.pageY - calOffSetTop) - currentCalMarginTop;
   			var clickX = (event.pageX - calOffSetLeft) - currentCalMarginLeft;
   			
   			// round down to nearest calendar increment
   			var clickYround = Math.round(clickY / 25) * 25;
   			var clickXround = Math.floor(clickX / 120) * 120;
   			
   			var newEvent = jQuery("<div class='box' style='position:absolute; opacity:1;'></div>");
   			
   			jQuery(".days table").append(newEvent);
   			
   			jQuery(newEvent).css("top", clickYround);
   			jQuery(newEvent).css("left", clickXround);
   			
   			jQuery(".days table").bind("mousemove.newevent", function(event) {
   				jQuery(".mouseStatus").text("mousemoving");
   			}).mouseup(function(event) {
                jQuery(target).unbind("mousemove.newevent");
        		alert("new event");
    			jQuery(".mouseStatus").text("mouseup");
    			flag = false;
   			});*/
   		} // end of click conditional
  
   		// trace the event
   		jQuery(".mouseStatus").text("mousedown");
   		
   		
   		//jQuery(".mouseStatus").text("mousedown");
	});
	
	
	
	jQuery(".days table").on("mouseup", function(event){
		var target = jQuery(event.target);
		if (flag == true) {
			jQuery(".mouseStatus").text("mouseup");
    		showCreateEventForm();
    	} else {
		flag = false;
		
		/*jQuery(target).unbind("mousemove.newevent");*/
        //alert("new event");
    	jQuery(".mouseStatus").text("mouseup");
    	/*jQuery(".days table").unbind("mousemove");*/
    	}
	});
	
	jQuery("#createEventBtn").click(function() {
		showCreateEventForm();
	});
	
	function showCreateEventForm() {
		jQuery("#shadow").show();
    	jQuery("#createEvent").fadeIn();
	}
	
	
 	
});  // ready method end 