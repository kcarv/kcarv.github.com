/*!
 * Start Bootstrap - Freelancer Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
/*$(function() {
    $('body').on('click', '.page-scroll a', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});*/


// function activaTab(tab){
//     $('.nav-tabs a[href="#home"]').tab('show');
// };



// activaTab('home');

// $(window).load(function () {
//         $('.nav-tabs a:first').tab('show');
//     });
// $(',nav-tabs a:[href="#home"]').tab('show');


// Floating label headings for the contact form
$(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !! $(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
    });


// Javascript to enable link to tab
var hash = document.location.hash;
var prefix = "tab_";
if (hash) {
    $('.nav-pills a[href='+hash.replace(prefix,"")+']').tab('show');
} 

// Change hash for page-reload
$('.nav-pills a').on('shown.bs.tab', function (e) {
    window.location.hash = e.target.hash.replace("#", "#" + prefix);
});

});

// Highlight the top nav as scrolling occurs
/*$('body').scrollspy({
    target: '.navbar-fixed-top'
})*/

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

//Scrolls to the top when a Tab is Clicked
$('.nav-pills li').click( function(){
$('html, body').stop().animate({
            scrollTop: (0,0)
        }, 1500, 'easeInOutExpo');
});



// $('a[href="#contact"]').on('click',function(){
//    $(window).trigger('resize');


// });

 $(document).ready(function() {
    $('a[href="#contact"]').click(function(e) {
        setTimeout(initialise, 500);
    });
    

    function initialise() {
        google.maps.event.trigger(window, 'resize', initialize);   
           };
    function calcRoute() {
  var start = document.getElementById('start').value;
  var end = document.getElementById('end').value;
  var request = {
      origin:start,
      destination:end,
      travelMode: google.maps.TravelMode.DRIVING
  };
  directionsService.route(request, function(response, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(response);
    }
  });
}

google.maps.event.addDomListener(window, 'load', initialize);

});
    

// TO LOAD DEPT-WISE PHONE LIST ONLY ON BIG SCREENS
$(window).bind('resize load', function() {
    if ($(this).width() < 767) {
        $('#collapseOne').removeClass('in');
        $('#collapseOne').addClass('out');
    } else {
        $('#collapseOne').removeClass('out');
        $('#collapseOne').addClass('in');
    }
});
$(document).ready(function(){
  if ($(window).width() <= 767){  
    $('#collapseOne').removeClass('in');
  }
});
    
// $(document).ready(function() {
// $("button").click(function () {
//     $("button").removeClass("active");
//     // $(".tab").addClass("active"); // instead of this do the below 
//     $(this).addClass("active");   
// });
// });


// REMOVE BELOW AS NOT WORKING
// $('button.phlist').click( function(){
//   if ($('#collapseOne').hasClass("active")) 
//         {$('#collapseOne').removeClass("active");}
//       else
//         {$('#collapseOne').addClass("active");}
// });

 // $(function () {
 //        $('a[href="#contact"]').on('shown.bs.tab', function(e) {
 //            lastCenter=mapTH.getCenter();
 //            google.maps.event.trigger(mapTH, 'resize');
 //            mapTH.setCenter(lastCenter);

 //        });
 //    });
