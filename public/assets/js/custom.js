/******************************************
    File Name: custom.js
    Template Name: Flat.Seo - Responsive HTML5 Template
    Created By: WordPressShowcase
    Envato Profile: https://themeforest.net/user/WordPressShowcase
    Website: https://showwp.com
    Version: 1.0
/*******************************************/

"use strict";

/**== wow animation ==**/

new WOW().init();

/**== loader js ==*/

$(window).load(function() {
    $(".bg_load").fadeOut("slow");
})

/**== Menu js ==**/

$("#navbar_menu").menumaker({
	title: "Menu",
	format: "multitoggle"
});

/** counter js **/

    $('.counter-count').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 5000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

/** progress_bar js **/
	
	 $(document).ready(function() {
      $('.progress .progress-bar').css("width",
                function() {
                    return $(this).attr("aria-valuenow") + "%";
                }
        )
    });
	
/** Casestudies Tab_bar js **/	
	
	$(document).ready(function(){

    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else
        {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }
    });
    
    if ($(".filter-button").removeClass("active")) {
$(this).removeClass("active");
}
$(this).addClass("active");

});

/** google_map js **/

function myMap() {
var mapProp= {
    center:new google.maps.LatLng(40.712775,-74.005973),
    zoom:18,
};
var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
}


	