$(function ($) {
    let footer_title = $('.section-footer__title');

 


    footer_title.click(function(event) {

        //event.preventDefault();
        //event.stopPropagation();

        

          if ($(this).closest('[data-accordion-title]').hasClass('active')) {
            $(this).closest('[data-accordion-title]').removeClass('active');

             //console.log('active class')

             $(this).closest('[data-accordion-title]').find('.footer_menu_list').css('height', '0');

          }else{
            footer_title.closest('[data-accordion-title]').removeClass('active');
            footer_title.closest('[data-accordion-title]').find('.footer_menu_list').css('height', '0');


            $(this).closest('[data-accordion-title]').addClass('active');
            
            var heights = $(this).closest('[data-accordion-title]').find('ul').outerHeight();
            var heights = heights+'px';

            $(this).closest('[data-accordion-title]').find('.footer_menu_list').css('height', heights);
            
          }   


     });


    
  });
