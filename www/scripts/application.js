/**
 * Created by AmolKothari on 13/03/15.
 */

$( document ).bind( "mobileinit", function() {
				   // We want popups to cover the page behind them with a dark background
				   $.mobile.orientationChangeEnabled = false;
				   $.mobile.page.prototype.options.backBtnTheme = "a";
				   $.mobile.page.prototype.options.backBtnText = "Back";
				   $.mobile.selectmenu.prototype.options.nativeMenu = true;
				   });

function onSubmit(){
	$.mobile.changePage( "views/dashboard.html", { transition: "slide", changeHash: false });
};


function alertDismissed() {
	// do something
};

// process the confirmation dialog result
function onConfirm(buttonIndex) {
	if(buttonIndex == 1){
		
		navigator.notification.alert(
									 'Incident Captured Successfully!',  // message
									 alertDismissed,         // callback
									 'EHS',            // title
									 'Ok'                  // buttonName
									 );
		
	}
	
};

function onSubmitEnv(){
	navigator.notification.confirm('Are you sure that you want to submit the Incident', // message
								   onConfirm,
								   'EHS Confirm',
								   ['Yes','Cancel']
								   );
};

function onCancelEnv(){
	$.mobile.changePage( "myincident.html", { transition: "slide", changeHash: false });
};


function onConfirmBeh(buttonIndex) {
	if(buttonIndex == 1){
		
		navigator.notification.alert(
									 'Observation/Incident Captured Successfully!',  // message
									 alertDismissed,         // callback
									 'EHS',            // title
									 'Ok'                  // buttonName
									 );
		
	}
	
};

function onSubmitBeh(){
	navigator.notification.confirm('Are you sure that you want to submit the Incident/Observation', // message
								   onConfirmBeh,
								   'EHS Confirm',
								   ['Yes','Cancel']
								   );
};

function onCancelBeh(){
	$.mobile.changePage( "dashboard.html", { transition: "slide", changeHash: false });
};
//pagebeforeshow
$( document ).bind( "pageinit", "#incident_envpage",function() {
				   console.log('okokokoko');
				   //  $("date_incident").datepicker('setDate', new Date());
				   var myDate = new Date();
				   var month = myDate.getMonth() + 1;
				   var formatted_date = month + '/' + myDate.getDate() + '/' + myDate.getFullYear();
				   var formatted_time = myDate.getHours() + ":" + myDate.getMinutes();
				   var h =  myDate.getHours(), m = myDate.getMinutes();
				   var _time = (h > 12) ? (h-12 + ':' + m +' PM') : (h + ':' + m +' AM');
				   
				   //				   $("#date_incident").val(prettyDate);
//				   $( "#date_incident" ).attr({
//										   text:prettyDate,});
				  //myDate= Date.today().toString("d-MMM-yyyy HH:mm"); // 19-Nov-2007
				   $("#date_time_text").text(" " +formatted_date+" "+_time);
				   
				   });

$( document ).bind( "pageinit", "#incident_health",function() {
				   console.log('okokokoko');
				   //  $("date_incident").datepicker('setDate', new Date());
				   var myDate = new Date();
				   var month = myDate.getMonth() + 1;
				   var formatted_date = month + '/' + myDate.getDate() + '/' + myDate.getFullYear();
				   var formatted_time = myDate.getHours() + ":" + myDate.getMinutes();
				   var h =  myDate.getHours(), m = myDate.getMinutes();
				   var _time = (h > 12) ? (h-12 + ':' + m +' PM') : (h + ':' + m +' AM');
				   
				   //				   $("#date_incident").val(prettyDate);
				   //				   $( "#date_incident" ).attr({
				   //										   text:prettyDate,});
				   //myDate= Date.today().toString("d-MMM-yyyy HH:mm"); // 19-Nov-2007
				   $("#date_time_text_health").text(" " +formatted_date+" "+_time);
				   
				   });

$( document ).bind( "pageinit", "#behaviour_page",function() {
				   console.log('okokokoko');
				   //  $("date_incident").datepicker('setDate', new Date());
				   var myDate = new Date();
				   var month = myDate.getMonth() + 1;
				   var formatted_date = month + '/' + myDate.getDate() + '/' + myDate.getFullYear();
				   var formatted_time = myDate.getHours() + ":" + myDate.getMinutes();
				   var h =  myDate.getHours(), m = myDate.getMinutes();
				   var _time = (h > 12) ? (h-12 + ':' + m +' PM') : (h + ':' + m +' AM');
				   
				   //				   $("#date_incident").val(prettyDate);
				   //				   $( "#date_incident" ).attr({
				   //										   text:prettyDate,});
				   //myDate= Date.today().toString("d-MMM-yyyy HH:mm"); // 19-Nov-2007
				   $("#date_time_text_beh").text(" " +formatted_date+" "+_time);
				   
				   });


$( document ).bind( "pageinit", "#incident_details_HSX123",function() {
				   console.log('okokokoko');
				   $("#checkbox-details").checkboxradio('disable');
				   });



var app = {
	//var user_name ;
initialize: function(){
	this.bindEvents();
	
	
},
bindEvents: function(){
	document.addEventListener('deviceready',this.onDeviceReady,false);
	document.addEventListener('online',this.onLine,false)
	document.addEventListener('offline',this.offLine,false);;
},
onDeviceReady: function(){
	var  pictureSource=navigator.camera.PictureSourceType;
	var  destinationType=navigator.camera.DestinationType;
	var A,B,C;
	app.receivedEvent('deviceready');
	
},
receivedEvent:function(id){
	console.log('Events'+id);
	app.bindings();
},
onLine: function(){
	console.log('Intenet it there');
},
offLine: function(){
	console.log('internet is off');
},
getPhoto: function() {
	// Retrieve image file location from specified source
	navigator.camera.getPicture(app.onPhotoDataSuccess, app.onFail,
								{quality: 50,
								targetWidth: 80,
								targetHeight: 80,
								correctOrientation: true,
								destinationType: Camera.DestinationType.DATA_URL});
},
onFail: function(message) {
	alert('Failed because: ' + message);
},
onPhotoURISuccess: function(imageURI) {
	// Uncomment to view the image file URI
	
	$("#image_capture_env").empty().append('<a href="#" class="ui-btn ui-icon-camera ui-btn-icon-right ui-shadow ui-corner-all">Upload Image<img src="data:image/jpeg;base64,'+imageURI+'" id="image_cap" class="ui-li-thumb"></a>');
	$( "#image_capture_env" ).listview( "refresh" );
	
},
onPhotoDataSuccess:function(imageData){
	$("#image_capture_health").empty().append('<a href="#" class="ui-btn ui-icon-camera ui-btn-icon-right ui-shadow ui-corner-all">Upload Image<img src="data:image/jpeg;base64,'+imageData+'" id="image_cap" class="ui-li-thumb"></a>');
	$( "#image_capture_health" ).listview( "refresh" );
},
onPhotoCaptureSuccess:function(imageData){
	
	$("#image_capture_bev").empty().append('<a href="#" class="ui-btn ui-icon-camera ui-btn-icon-right ui-shadow ui-corner-all">Upload Image<img src="data:image/jpeg;base64,'+imageData+'" id="image_cap" class="ui-li-thumb"></a>');
	$( "#image_capture_bev" ).listview( "refresh" );
},
getbehPhoto: function(){
	
	navigator.camera.getPicture(app.onPhotoCaptureSuccess, app.onFail, { quality: 50,
								targetWidth: 80,
								targetHeight: 80,
								correctOrientation: true,
								destinationType: Camera.DestinationType.DATA_URL });
	
},
enableCamera: function(){
	
	// Take picture using device camera and retrieve image as base64-encoded string
	navigator.camera.getPicture(app.onPhotoURISuccess, app.onFail, { quality: 50,
								targetWidth: 80,
								targetHeight: 80,
								correctOrientation: true,
								destinationType: Camera.DestinationType.DATA_URL });
	
},
displayRPN: function(){
	
	if (A === undefined || A === null || B === undefined || B === null || C === undefined || C === null) {
		
	}else
	{
		var result = A*B*C;
		console.log('HERHEE');
		console.log('Result'+result);
//		
//		$("#RPN").empty().append('<li class="ui-li ui-li-static ui-btn-up-c">RPN(Risk Priority Number)</li><li class="ui-li ui-li-static ui-btn-up-c">'+result+'</li>');
//		$( "#RPN" ).listview( "refresh" );
		 $("#RPN_text").text(result);
		
	}
	
},
	
bindings: function(){
	$(document).on('click','#image_capture_env',function(e){
				   //console.log('Enable the Camera');
				   app.enableCamera();
				   });
	
	$(document).on('click','#image_capture_health',function(e){
				   //console.log('Enable the Camera');
				   app.getPhoto();
				   });
	$(document).on('click','#image_capture_bev',function(e){
				   //console.log('Enable the Camera');
				   app.getbehPhoto();
				   });
	
	$(document).on('click','#incidentDetails li',function(e){
				   //						   alert('Selected Name=' + $(this).attr('id'));
				   //						   alert( $(this).id );
				   });
	$(document).on('click','#date_incident',function(e){
				   var options = {
				   date: new Date(),
				   mode: 'datetime'
				   };
				   var selected_date;
				   // calling show() function with options and a result handler
				   datePicker.show(options, function(date){
								 
								   selected_date = date.toString("MM/dd/yyyy hh:mm tt");
								     console.log("date result" + selected_date);
								   $("#date_time_text").text(selected_date);
								   });

				   
				   });
	
	$(document).on('click','#date_incident_beh',function(e){
				   var options = {
				   date: new Date(),
				   mode: 'datetime'
				   };
				   var selected_date;
				   // calling show() function with options and a result handler
				   datePicker.show(options, function(date){
								   
								   selected_date = date.toString("MM/dd/yyyy hh:mm tt");
								   console.log("date result" + selected_date);
								   $("#date_time_text_beh").text(selected_date);
								   });
				   
				   
				   });
	
	$(document).on('click','#date_incident_health',function(e){
				   var options = {
				   date: new Date(),
				   mode: 'datetime'
				   };
				   var selected_date;
				   // calling show() function with options and a result handler
				   datePicker.show(options, function(date){
								   
								   selected_date = date.toString("MM/dd/yyyy hh:mm tt");
								   console.log("date result" + selected_date);
								   $("#date_time_text_health").text(selected_date);
								   });
				   
				   
				   });
	
	
	$(document).on('change','#occurrence',function(e){
				   C = $(this).val(); // or this.value
				   console.log('selected value'+C);
				   app.displayRPN();
				   });
	
	$(document).on('change','#empID',function(e){
				   var emp_number = $(this).val();
				   console.log('value entered'+$(this).val());
				   if(emp_number === undefined || emp_number === null || emp_number === ""){
				   
				   $("#emp_name").text("Employee Name:");
				   $("#emp_age").text("Employee Age:");
				   $("#emp_department").text("Employee Department:");
				   $("#emp_loc").text("Employee Location:");
//				   $("#emp_details").empty().append('<li class="ui-li ui-li-static ui-btn-up-c">Employee Name</li><li class="ui-li ui-li-static ui-btn-up-c">Employee Age</li><li class="ui-li ui-li-static ui-btn-up-c">Employee Department</li><li class="ui-li ui-li-static ui-btn-up-c">Employee Location</li>');
//				   $( "#emp_details" ).listview( "refresh" );
				   }
				   else{
				   $("#emp_name").text("Employee Name: Robin, Mark");
				   $("#emp_age").text("Employee Age: 28 Years");
				   $("#emp_department").text("Employee Department: Assembly Line");
				   $("#emp_loc").text("Employee Location: Minneapolis");
				   
//				   $("#emp_details").empty().append('<li class="ui-li ui-li-static ui-btn-up-c">Employee Name: XXXXXX</li><li class="ui-li ui-li-static ui-btn-up-c"></li><li class="ui-li ui-li-static ui-btn-up-c">Employee Department: XXXXXXXX</li><li class="ui-li ui-li-static ui-btn-up-c">Employee Location: XXXXXXX</li>');
//				   $( "#emp_details" ).listview( "refresh" );
				   }
				   });
	
	$(document).on('change','#frequency',function(e){
				   B = $(this).val(); // or this.value
				   console.log('selected value'+ B);
				   app.displayRPN();
				   });
	
	$(document).on('change','#severity',function(e){
				   A = $(this).val(); // or this.value
				   console.log('selected value'+ A);
				   app.displayRPN();
				   });
	
	$(document).on('change','#incident_env',function(e){
				   var selected = $(this).val(); // or this.value
				   console.log('selected value'+selected);
				   $('#incident_cls').empty();
				   if(selected == 1) //Spill/Release
				   {
				   $('#incident_cls').append('<option>Select Incident Classification</option>');
				   $('#incident_cls').append('<option value="oil">Oil</option>');
				   $('#incident_cls').append('<option value="chemicals">Chemicals</option>');
				   $('#incident_cls').append('<option value="waste">Waste Waters</option>');
				   $('#incident_cls').append('<option value="haz">Hazardous</option>');
				   $('#incident_cls').append('<option value="nonhaz">Non Hazardous</option>');
				   }
				   if(selected == 2) //Emission
				   {
				   $('#incident_cls').append('<option>Select Incident Classification</option>');
				   $('#incident_cls').append('<option value="air">Emission to Air</option>');
				   $('#incident_cls').append('<option value="water">Emission to Water</option>');
				   }
				   if(selected == 3) //Permits
				   {
				   $('#incident_cls').append('<option>Select Incident Classification</option>');
				   $('#incident_cls').append('<option value="breach">Permit Breach</option>');
				   
				   }
				   if(selected == 4)// Legel
				   {
				   $('#incident_cls').append('<option>Select Incident Classification</option>');
				   $('#incident_cls').append('<option value="fines">Fines</option>');
				   $('#incident_cls').append('<option value="penal">Penalties</option>');
				   }
				   
				   if(selected == 5)// Leaks
				   {
				   $('#incident_cls').append('<option>Select Incident Classification</option>');
				   $('#incident_cls').append('<option value="leaks">Leaks</option>');
				   
				   }
				   if(selected == 6)// Other
				   {
				   $('#incident_cls').append('<option>Select Incident Classification</option>');
				   $('#incident_cls').append('<option value="leaks">Others</option>');
				   
				   }
				   $('#incident_cls').selectmenu('refresh', true);
				   });
	
	
}
	
};

app.initialize();


