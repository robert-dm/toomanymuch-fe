

$(document).ready(function(e) {
	
  $(".owl-carousel").owlCarousel({
	  margin:80,
	  items:4,
	  loop:true,
	  dots:true,
	  nav:false,
	    responsive:{
        0:{
            items:1,
            nav:true
        },
        768:{
            items:2,
            nav:false
        },
        1000:{
            items:4,
            nav:true
        }
		
		}
	  });	


 $.fn.clickToggle = function(func1, func2) {
        var funcs = [func1, func2];
        this.data('toggleclicked', 0);
        this.click(function() {
            var data = $(this).data();
            var tc = data.toggleclicked;
            $.proxy(funcs[tc], this)();
            data.toggleclicked = (tc + 1) % 2;
        });
        return this;
    };


$(".mobile_header").clickToggle(function(e) {
    
$(".mobile_navigation").animate({"right":"0"});	
$(".mobile_header").addClass("close");
	
},function(){

$(".mobile_navigation").animate({"right":"-100%"});	
$(".mobile_header").removeClass("close");	
	
});






/*
	
var controller = new ScrollMagic.Controller(); 

var tween = TweenMax.to("#target", 1, {rotation: 360, ease: Linear.easeNone});

var scene1 = new ScrollMagic.Scene({
    duration: 1000, // the scene should last for a scroll distance of 100px
    offset: 0 // start this scene after scrolling for 50px
}).setTween(tween).setPin('.target'); 

controller.addScene(scene1);
	
*/


	
$.scrollify({
		section:".element_section",
        scrollbars:true,
        before:function(i,panels) {

      var ref = panels[i].attr("data-section-name");
	  
	  console.log(ref);
	  
	  if(ref != "Home"){
		  $(".logo_container").addClass("active_logo");
	 }else{
		 $(".logo_container").removeClass("active_logo");
	 }
	 
//animate_top

       $(".animated").removeClass("animated");	
	   
	   setTimeout(function () {
     panels[i].find(".animate_trigger").addClass("animated");
}, 300);
	    
	

      $(".pagination .active").removeClass("active");

      $(".pagination").find("a[href=\"#" + ref + "\"]").addClass("active");
	  
	
    },
    afterRender:function() {
		
		 $(".animate_top").removeClass("animated");	 
		
      var pagination = "<ul class='pagination'>";
      var activeClass = "";
      $(".element_section").each(function(i) {
        activeClass = "";
        if(i===$.scrollify.currentIndex()) {
          activeClass = "active";
        }
        pagination += "<li><a class=\'" + activeClass + "' href=\"#" + $(this).attr("data-section-name") + "\"><span class=\"hover-text\">" + $(this).attr("data-section-name").charAt(0).toUpperCase() + $(this).attr("data-section-name").slice(1) + "</span></a></li>";
      
	  
});

//console.log(pagination);

      pagination += "</ul>";

      $(".home").append(pagination);
      /*

      Tip: The two click events below are the same:

      $(".pagination a").on("click",function() {
        $.scrollify.move($(this).attr("href"));
      });

      */
      $(".pagination a").on("click",$.scrollify.move);
	  
	  $(".mobile_pagination a").on("click",function(e){
		  var target = $(this).attr("href");
		  $(".active_mobile").removeClass("active_mobile");
		  $(this).addClass("active_mobile");
		 $.scrollify.move(target);
		 $(".mobile_navigation").animate({"right":"-100%"});	
         $(".mobile_header").removeClass("close");
		  
		 });
	  
    }
  });		  
    
 
 
var requestFullscreen = function (element) {
	if (element.requestFullscreen) {
		element.requestFullscreen();
	} else if (element.webkitRequestFullscreen) {
		element.webkitRequestFullscreen();
	} else if (element.mozRequestFullScreen) {
		element.mozRequestFullScreen();
	} else if (element.msRequestFullscreen) {
		element.msRequestFullscreen();
	} else {
		console.log('Fullscreen API is not supported.');
	}
}; 
 
		  
jQuery("#video-button").click(function(e) {

var videoElement = document.getElementById('video_full');    
videoElement.webkitRequestFullScreen();  
$('#video_full').show(); 
$('#video_full').trigger('play'); 
	
});
	
if (document.addEventListener)
{
 document.addEventListener('fullscreenchange', exitHandler, false);
 document.addEventListener('mozfullscreenchange', exitHandler, false);
 document.addEventListener('MSFullscreenChange', exitHandler, false);
 document.addEventListener('webkitfullscreenchange', exitHandler, false);
}

function exitHandler()
{
 if (!document.webkitIsFullScreen && !document.mozFullScreen && !document.msFullscreenElement)
 {
$('#video_full').trigger('pause'); 
$('#video_full').hide(); 
 }
}




	
	
});