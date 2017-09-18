


function addCurrentTime(x){
  var TimeBox = document.getElementById(x);
  var now = new Date();
  var dateString = now.getHours() + ":" + now.getMinutes();
  TimeBox.value = dateString;
}


function SetDate(){
	var date = new Date();

	var day = date.getDate();
	var month = date.getMonth() + 1;
	var year = date.getFullYear();

	if (month < 10) month = "0" + month;
	if (day < 10) day = "0" + day;

	var today = year + "-" + month + "-" + day;
	document.getElementById('DefaultDate').value = today;
}





window.setTimeout(function() {
    $(".alert").fadeTo(500, 0).slideUp(500, function(){
        $(this).remove(); 
    });
}, 4000);