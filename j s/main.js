 
                            // Navbar changing on scrooling

let nav = $('.navbar');
let aboutOffsetTop = $('#About').offset().top;
let navHeight = $('.navbar').innerHeight();
$(window).scroll( function(){
if($(window).scrollTop()>aboutOffsetTop - navHeight){
    $('.navbar').css('backgroundColor' , '#040404ce')}
else{$('.navbar').css('backgroundColor' , 'transparent')}
});





