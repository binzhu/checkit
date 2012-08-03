jQuery(document).ready(function() {
	//alert("friends!");
	var toggleSwitch = false;


	

	jQuery('#friends-list li').click(function() {
		var userStorageObject = {};
		var userID = jQuery(this).attr("id");
		//alert(userID);
		var theUser = userID + "Array";

	
		if (toggleSwitch == false) {
			toggleSwitch = true;
			jQuery(this).css("background-color", "#fff9b3");
			//alert("yes");
	
			userStorageObject[theUser] = new Array();
		
			userStorageObject[theUser].push({eventTitle: "Friend Practice", eventDescription: "Description goes here", eventStartTimeYear: 2012, eventStartTimeMonth: 6, eventStartTimeDay: 17, eventStartTimeHour: 10, eventStartTimeMinutes: 30, eventEndTimeYear: 2012, eventEndTimeMonth: 7, eventEndTimeDay: 17, eventEndTimeHour: 15, eventEndTimeMinutes: 30});
	
			userStorageObject[theUser].push({eventTitle: "Friend Practice 2", eventDescription: "Description goes here", eventStartTimeYear: 2012, eventStartTimeMonth: 6, eventStartTimeDay: 19, eventStartTimeHour: 8, eventStartTimeMinutes: 30, eventEndTimeYear: 2012, eventEndTimeMonth: 7, eventEndTimeDay: 19, eventEndTimeHour: 15, eventEndTimeMinutes: 30});
	
			userStorageObject[theUser].push({eventTitle: "Friend Practice 3", eventDescription: "Description goes here", eventStartTimeYear: 2012, eventStartTimeMonth: 6, eventStartTimeDay: 20, eventStartTimeHour: 4, eventStartTimeMinutes: 30, eventEndTimeYear: 2012, eventEndTimeMonth: 7, eventEndTimeDay: 20, eventEndTimeHour: 13, eventEndTimeMinutes: 30});
		console.log("test");
			//alert(userStorageObject[theUser][0].eventTitle);
			// count items in array to limit the loop below	
			var friendArrayTotalItems = userStorageObject[theUser].length;
		
			var friendBox;
			
			// ADD FRIEND BOXES TO DOM, NO POSITIONING
			for (var f = 0; f < friendArrayTotalItems; f++) {
				friendBox = "<div class='friendBox " + userID + "' style='position:absolute'></div>";
				jQuery(".days table").append(friendBox);
				//alert("added!");
			} // end for loop
		
			// START POSITIONING GRAY BOXES
			var fr_initStartTime, fr_initStartMinutes, fr_initEndTime, fr_initEndMinutes, fr_initPosY, fr_initPosX, fr_initEndTime, fr_initDay, fr_initDayNum;
			var fr = 0;
			var fr_utcString;
			var testTop = 100;
			var testLeft = 30;
			
			// LOOP THROUGH EACH BOX AND POSITION IT
			jQuery(".friendBox").each(function() {
				fr_initStartMinutes = userStorageObject[theUser][fr].eventStartTimeMinutes/60;
				fr_initStartTime = userStorageObject[theUser][fr].eventStartTimeHour + fr_initStartMinutes;
		
				fr_initEndMinutes = userStorageObject[theUser][fr].eventEndTimeMinutes/60;
				fr_initEndTime = userStorageObject[theUser][fr].eventEndTimeHour + fr_initEndMinutes;
		
				fr_utcString = new Date(Date.UTC(userStorageObject[theUser][fr].eventStartTimeYear,  userStorageObject[theUser][fr].eventStartTimeMonth, userStorageObject[theUser][fr].eventStartTimeDay,  userStorageObject[theUser][fr].eventStartTimeHour, userStorageObject[theUser][fr].eventStartTimeMinutes));
				
				//alert(fr_utcString);
		
		
				// search utcString for day abbreviations
				// returns true or false
				var fr_forSunday=/Sun/g;
				var fr_testSunday = fr_forSunday.test(fr_utcString);
				var fr_forMonday=/Mon/g;
				var fr_testMonday = fr_forMonday.test(fr_utcString);
				var fr_forTuesday=/Tue/g;
				var fr_testTuesday = fr_forTuesday.test(fr_utcString);
				var fr_forWednesday=/Wed/g;
				var fr_testWednesday = fr_forWednesday.test(fr_utcString);
				var fr_forThursday=/Thu/g;
				var fr_testThursday = fr_forThursday.test(fr_utcString);
				var fr_forFriday=/Fri/g;
				var fr_testFriday = fr_forFriday.test(fr_utcString);
				var fr_forSaturday=/Sat/g;
				var fr_testSaturday = fr_forSaturday.test(fr_utcString);
				
				// EACH DAY CORRESPONDS TO A NUMBER VALUE, WHICH HELPS POSITIONING
				if (fr_testSunday == true) {
					//alert("Sunday!");
					fr_initDayNum = 0;
				} else if (fr_testMonday == true)  {
					//alert("Monday");
					fr_initDayNum = 1;
				} else if (fr_testTuesday == true)  {
					//alert("Tuesday");
					fr_initDayNum = 2;
				} else if (fr_testWednesday == true)  {
					//alert("Wednesday");
					fr_initDayNum = 3;
				} else if (fr_testThursday == true)  {
					//alert("Thursday");
					fr_initDayNum = 4;
				} else if (fr_testFriday == true)  {
					//alert("Friday");
					fr_initDayNum = 5;
				} else if (fr_testSaturday == true)  {
					//alert("Saturday");
					fr_initDayNum = 6;
				} else {
					//alert("no day assigned");
				}
				
				// TAKE THAT DAY NUMBER AND CALCULATE LEFT POSITION
				if (fr_testSunday == true) {
					fr_initPosX = 0;
				} else {
					fr_initPosX = fr_initDayNum * 120;
				}
				
				fr_initPosY = fr_initStartTime * 50;
				fr_initEndTime = fr_initEndTime * 50;
				
				jQuery(this).css("height", fr_initEndTime - fr_initPosY);
				
				fr_initDay = userStorageObject[theUser][fr].eventStartDay;
				
				if (fr_initDay == "Monday") {
					fr_initDayNum = 1;
				} else if (fr_initDay == "Tuesday") {
					fr_initDayNum = 2;
				} else if (fr_initDay == "Wednesday") {
					fr_initDayNum = 3;
				} else if (fr_initDay == "Thursday") {
					fr_initDayNum = 4;
				} else if (fr_initDay == "Friday") {
					fr_initDayNum = 5;
				} else if (fr_initDay == "Saturday") {
					fr_initDayNum = 6;
				}
				
				//alert(initDayNum);
			
				if (fr_initDay == "Sunday") {
					fr_initPosX = 0;
				} else {
					fr_initPosX = fr_initDayNum * 120;
				}
			
				// ANIMATE TO THE CORRECT POSITION
				jQuery(this).animate({
					"left": fr_initPosX,
					"top": fr_initPosY,
					"opacity": 1
				}, "fast");
				
				// INCREMENT COUNTER TO THE NEXT ARRAY ITEM
				fr++;
		}); // each method end
	
		} else {
			toggleSwitch = false;
			jQuery(this).css("background-color", "white");
			
			// TAKE THE ID AND TURN OFF ALL ASSOCIATED BOXES WITH THAT CLASS
			var userID = jQuery(this).attr("id");
			var userClassName = "." + userID;
			jQuery(userClassName).remove();
		}
		
		
		
	}); // click method end
});