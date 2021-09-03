$(".icon").click(function(){
    
       $('ul').slideToggle('fast',function(){
           if($(this).is(':visible'))
              $(this).css('display','block');
       });
});





$(window).on('scroll',function(){
       if($(window).scrollTop()){
              $('nav').addClass('white');
               $('a').addClass('white');
       }
       else{
              $('nav').removeClass('white');
               $('a').removeClass('white');
       }
})


$('.owl-carousel').owlCarousel({
       loop:true,
       items:1,
       dots:true,
       nav:false,
       smartSpeed:900,
      
     
   });