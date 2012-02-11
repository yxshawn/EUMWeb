/*
	Designed by Shawn at EUM
	http://ezse.com
	http://ezse.com/eum/
	AUG 2011
*/
//var disqus_developer = 1;
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
		if ( this.value == "输入您的电子邮件(xxx@me.com)") {
			this.value = "";
		}
	}).blur( function( e ) {
		if ( this.value == "" ) {
			this.value = "输入您的电子邮件(xxx@me.com)";
		}
	});
	
	$( window ).scroll(function(){
		if (  window.scrollY > 546 ){
			$( ".float-box" ).fadeIn(300);
		}else{
			$( ".float-box" ).fadeOut(300);
		}
	});
	
	$("li.shareitem").unbind("mouseenter").unbind("mouseleave");
	$("li.shareitem").bind("mouseenter",function(){
		$(this).fadeTo(300, 1.0);
	});
	$("li.shareitem").bind("mouseleave",function(){
		$(this).fadeTo(300, 0.5);
	});
	$("li.shareitem").fadeTo(0, 0.5);
	
	$( ".float-box" ).fadeOut(0);
	
	$( ".anwser.flexslider" ).flexslider({
		animation: "fade",
		slideshow: false,
		keyboardNav: false,
		directionNav:false
	});
	
}); 