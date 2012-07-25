jQuery(document).ready(function() {
	alert("custom!");



	
// start of custom.js	
	var boxEndHeight = jQuery(".box").height();
	
	
	jQuery(".box").draggable({
		containment: "parent"
	}).resizable({handles: 's'});
	
	
	
    var currentBoxHeight;
    var theBoxHeight = jQuery(".box").height();
 	jQuery(".box").bind("resizestop", function(event, ui) {
 		//alert("stop");
 		currentBoxHeight = jQuery(this).height();
 		theBoxHeight = currentBoxHeight;
 		roundBoxHeight();
 		updateText();
	});
	
	var newBoxHeight;
	var boxTime;
	var newBoxHeightBorder;
	function roundBoxHeight() {
		newBoxHeight = Math.round(currentBoxHeight / 25) * 25;
		
		// determine extra height for borders
		newBoxHeightBorder = Math.round(newBoxHeight/50);
		theBoxHeight = newBoxHeight;
		
		jQuery(".box").animate({
			"height": newBoxHeight,
			"width": "110px"
		});
		boxTime = Math.round(newBoxHeight/25)*.5;
		updateText();
		//alert(theBoxHeight);
		updateEvent();
	}

	
	var initStartTime;
	var initPosY;
	var initPosX;
	var initDay;
	var initDayNum;
	function initBox() {
		//alert("init");
		//alert(eventArray[0].eventStartTime / 60);
		initStartTime = eventArray[0].eventStartTime / 60;
		
		initPosY = initStartTime * 50;
		
		initDay = eventArray[0].eventDay;
		//alert(initDay);
		if (initDay == "Monday") {
			initDayNum = 1;
		} else if (initDay == "Tuesday") {
			initDayNum = 2;
		} else if (initDay == "Wednesday") {
			initDayNum = 3;
		} else if (initDay == "Thursday") {
			initDayNum = 4;
		} else if (initDay == "Friday") {
			initDayNum = 5;
		} else if (initDay == "Saturday") {
			initDayNum = 6;
		}
		
		//alert(initDayNum);
		
		if (initDay == "Sunday") {
			initPosX = 0;
		} else {
		 	initPosX = initDayNum * 121;
		}
		
		jQuery(".box").animate({
			"left": initPosX,
			"top": initPosY
		}, "fast");
	}
	
	initBox();
	
	var row = "<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>"
	function buildRows() {
		for(var g=0; g<24; g++) {
		jQuery(".days table").append(row);
		}
	}
	buildRows();
	
	jQuery("#cal-days table tr:odd").find("td").css("background-color", "#f5fcff");
	
	var boxOffset;
	var boxTop;
	var boxLeft;
	
	jQuery(".box").bind("dragstop", function(event, ui) {
  		//alert("stop");
  		boxOffset = jQuery(".box").offset();
		boxTop = boxOffset.top;
		boxLeft = boxOffset.left;
		//alert("y is:" + boxTop + " and x is:" + boxLeft);
  		updateText();
  		moveBox();
  		
	});
	
	function updateText() {
		jQuery("#sidebar").find(".boxX").text(boxLeft);
		jQuery("#sidebar").find(".boxY").text(boxTop);
		jQuery("#sidebar").find(".boxHeight").text(currentBoxHeight);
		jQuery("#sidebar").find(".boxTime").text(boxTime);
	}
	
	var days = jQuery(".days");
	var daysPos = days.offset();
	var daysPosLeft = daysPos.left;
	var daysPosTop = daysPos.top;
	var numX1;
	var numX2;
	var numY1;
	var numY2;
	
	function moveBox() {
		//roundNum = (Math.round(boxLeft / 120) * 120);
		
		// X values
		numX1 = boxLeft - daysPosLeft;
		numX2 = Math.round(numX1 / 120) * 120;
		
		// Y values
		numY1 = boxTop - daysPosTop;
		numY2 = Math.round(numY1 / 25) * 25;
		numY2 = boxEndHeight;
		//alert(num2);
		//daysDiff = roundNum - daysPosLeft;
		//alert(daysDiff);
		jQuery(".box").animate({
			"left": numX2,
			"top": numY2
		}, "fast");
		updateEvent();
	}
	
	var newAMPM;
	var newEndAMPM;
	var newStartTimeString;
	var newEndTimeString;
	function updateEvent() {
		// new start time
		var newStartTimeHour = Math.floor(numY2 / 50);
		var newStartTimeHalf = numY2 / 50;
		if (newStartTimeHour < 12) {
			newAMPM = "am";
		} else {
			newAMPM = "pm";
		}
	
		if (newStartTimeHalf > newStartTimeHour) {
			if (newStartTimeHour >= 13) {
			newStartTimeHour -= 12;
			} else if (newStartTimeHour < 1) {
				newStartTimeHour = 12;
			}
			newStartTimeString = newStartTimeHour + ":30" + newAMPM;
		} else {
			if (newStartTimeHour >= 13) {
			newStartTimeHour -= 12;
			} else if (newStartTimeHour < 1) {
				newStartTimeHour = 12;
			}
			newStartTimeString = newStartTimeHour + newAMPM;
		}
	
		// new end time
		var newEndTimeHour = Math.floor((boxEndHeight + theBoxHeight)/50);
		var newEndTimeHalf = (boxEndHeight + theBoxHeight)/50;
		if (newEndTimeHour < 12) {
			newEndAMPM = "am";
		} else {
			newEndAMPM = "pm";
		}
		if (newEndTimeHalf > newEndTimeHour) {
			if (newEndTimeHour >= 13) {
			newEndTimeHour -= 12;
			}
			newEndTimeString = newEndTimeHour + ":30" + newEndAMPM;
		} else {
			if (newEndTimeHour >= 13) {
			newEndTimeHour -= 12;
			}
			newEndTimeString = newEndTimeHour + newEndAMPM;
		}
		
		//alert(newEndTimeHour);
		jQuery(".box").find(".eventStartTime").text(newStartTimeString);
		jQuery(".box").find(".eventEndTime").text(newEndTimeString);
	}

	
	// "times" table: the side column that holds 12:00am, 1:00am, etc.
	
	var timeCount = 0;
	
	var timeRow;
	var ampm = "am";
	var timeHours = 12;
	
	for (timeCount = 0; timeCount <24; timeCount++) {
		if (timeCount == 12) {
			ampm = "pm";
			timeHours = 12;
		}		

		timeRow = "<tr><td><div class='time-padding'>" + timeHours + ":00" + ampm + "</div></td></tr>";
		jQuery("#times").append(timeRow);
		
		
		if (timeHours == 12) {
			timeHours = 0;
		}
		
		timeHours++;
		
		
	}
	
	jQuery("#times tr:odd").find("td").css("background-color", "#f5fcff");
	
// end of custom.js

 
	

	
});  // ready method end 