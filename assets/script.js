/*
	Designed by Shawn at EUM
	http://ezse.com
	http://ezse.com/eum/
	AUG 2011
*/
$(document).ready(function() {
	$(".app-item").unbind("mouseenter").unbind("mouseleave");
	$(".app-item").bind("mouseenter",function(){
		var arr = $(".app-item");
		var index = arr.index($(this));
		index+=1;
		$("#apps-container").removeClass().addClass("apps").addClass("select-app-"+index.toString());
	});
	$(".app-item").bind("mouseleave",function(){
		$("#apps-container").removeClass().addClass("apps");
	});
	
	$( "#mce-EMAIL" ).focus( function( e ) {
		if ( this.value == "Your email here") {
			this.value = "";
		}
	}).blur( function( e ) {
		if ( this.value == "" ) {
			this.value = "Your email here";
		}
	}); 
	$( "#mce-EMAIL-cn" ).focus( function( e ) {
		if ( this.value == "输入您的电子邮件(xxx@xxx.com)") {
			this.value = "";
		}
	}).blur( function( e ) {
		if ( this.value == "" ) {
			this.value = "输入您的电子邮件(xxx@xxx.com)";
		}
	}); 
}); 