$(document).ready(function() {

  // QUESTION 6

  //Implement the showing and hiding of the sidebar when the user clicks on #sidebar-button here:
    $('#sidebar-button').click(function() {
        if ($('#sidebar-button').hasClass('button-active')) {
            $('body').removeClass('no-scroll');
            $('.sidebar-container').removeClass('sidebar-active');
            $('#sidebar-button').removeClass('button-active');
            $('.page-wrapper').removeClass('wrapper-active');
        }
        else {
            $('.sidebar-container').addClass('sidebar-active');
            $('#sidebar-button').addClass('button-active');
            $('.page-wrapper').addClass('wrapper-active');
            setTimeout(function() {
                $('body').addClass('no-scroll');
            }, 300);
        }
    })
  // QUESTION 7

  //Implement the hiding of the sidebar when the user clicks on the page wrapper here:
    $('.page-wrapper').click(function() {
      if ($('#sidebar-button').hasClass('button-active')) {
          $('body').removeClass('no-scroll');
          $('.sidebar-container').removeClass('sidebar-active');
          $('#sidebar-button').removeClass('button-active');
          $('.page-wrapper').removeClass('wrapper-active');
      }
    })
  // QUESTION 8

  //Implement the "slide to left" when the user clicks on #carousel-next here
    $('#carousel-next').click(function() {
        var val = parseInt($('#carousel').css('margin-left').replace("px", ""));
        if (val == -2880) {
            $('#carousel-next').css('opacity', 0.2);   
        }
        if (val == -3840) {
            return false;  
        }
        else {
            $('#carousel').css('margin-left', val - 960); 
            $('#carousel-prev').css('opacity', 1); 
        }
    })

  //Implement the "slide to right" when the user clicks on #carousel-prev here
    $('#carousel-prev').click(function() {
        var val = parseInt($('#carousel').css('margin-left').replace("px", ""));
        if (val == -960) {
            $('#carousel-prev').css('opacity', 0.2);   
        }
        if (val == 0) {
            return false;  
        }
        else {
            $('#carousel').css('margin-left', val + 960);  
            $('#carousel-next').css('opacity', 1); 
        }
    })


  //THIS IS NOT A REQUIRED QUESTION 
  // EXTRA FOR EXPERTS 

  // Implement a "smooth scroll" when the user clicks on the sidebar links here



    // It didnt work :/



    // $('.sidebar-item').click(function() {
    //   $('body').removeClass('no-scroll');
    //   $('html, body').animate({
    //       scrollTop: $( $.attr(this, 'href')).offset().top
    //   }, 300);
    //   setTimeout(function() {
    //       $('.sidebar-container').removeClass('sidebar-active');
    //       $('#sidebar-button').removeClass('button-active');
    //       $('.page-wrapper').removeClass('wrapper-active');
    //   }, 300);
    //   return false;
    // })

});



