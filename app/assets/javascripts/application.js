// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= #require jquery
//= require jquery_ujs  


$(document).ready(function(){
   //alert("application js called") ;

   $('#userinputid').click(function(){
      if ($(this).focus()){
         //alert('focused');
         $(this).val(""); // clear input field hint when user click on it
      }
   });
   
   $('#userbtn_submit').click(function(){
    alert("searched!");
    
    var input = $('#userinputid').val();
      if (input.length == 0){
      //alert('Please put in friend information');
      $('#notice').html("please put in some friend information")
      setTimeout(function(){ $('#notice').empty();},3000);
      return false;//prevent button to make post request
      };//end if input == 0
   });// end click of user submit 
});//end document ready

      /*
            $.ajax({
             type: "GET",
             //url: 'http://serverurl/events/getmeetings.json',
	     //rl: 'http://checkitit.herokuapp.com/events/getmeetings.json',
	     url: 'http://localhost:3000/events/getmeetings.json',
             dataType: "json",
               success: function(data){
		//alert("ajaxed!");
                var items = []
                     $.each(data, function(key, val) {
                     items.push(val);
		     //alert("event pushed!");
                    });//each data push end
		//alert(items[0].name);
		
                 }// success end
             }); //ajax end 
    */