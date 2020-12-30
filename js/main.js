function openNav(){
    document.getElementById('myNav').style.width = '100%';

}
function closeNav(){ 
    document.getElementById("myNav").style.width= '0%';
}
jQuery
$(window).on('load', function(){
    $('.loading-content-1').delay(500).fadeOut('slow',function(){
        $(this).remove();
    });
   
    // $('.loading-content-3').delay(2500).fadeOut();
    $('.loading').delay(1000).fadeOut();

});
// jQuery(document).ready(function($) {  
//     $(window).load(function(){
//             $('.loading-content-1').fadeOut('slow',function(){
//                 $(this).remove();
//             });
//     });
//     $(window).load(function(){
//         $('#loading').fadeOut('slow',function(){
//             $(this).remove();
//         });
// });

// });