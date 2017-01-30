$( document ).ready(function() {

// PHOTO GRID ON HOME PAGE

  $('.thumbContainer').on('click', function () {
    var clickedId = $(this).index() + 1;

    // if isNav
    if ( $('.photoGrid').hasClass('isNav')) {
      // if clicked pic is activeImg
      if ( $(this).hasClass('activeImg')) {
        // remove both isNav and activeImg
        $(this).removeClass('activeImg');
        $('.photoGrid').removeClass('isNav');
        // hide photoPreview
        $('.photoPreview').css('display', 'none');
      // if clicked pic is NOT activeImg
      } else {
        // addClass(‘activeImg’) to clicked img
        $(this).addClass('activeImg');
        // removeClass(‘activeImg’) from siblings
        $(this).siblings().removeClass('activeImg');
        // change image in photoPreview to relative clicked thumb
        $('.photoPreview').children().attr("src", "../assets/img/grid/grid-"+clickedId+".jpg");
        // scrollTo active clicked thumb
        $('.photoGrid').scrollTo("div:nth-child("+clickedId+")",500)
      }
    // if is NOT nav
    } else {
      // addClass(‘isNav’)
      $('.photoGrid').addClass('isNav');
      // addClass(‘activeImg’)
      $(this).addClass('activeImg');
      // change image in photoPreview to relative clicked thumb
      $('.photoPreview').children().attr("src", "../assets/img/grid/grid-"+clickedId+".jpg");
      // show photoPreview
      $('.photoPreview').css('display','block');
      // scrollTo active clicked thumb
      $('.photoGrid').scrollTo("div:nth-child("+clickedId+")",500)
    }
  });


// COLLAGE SCROLL UP CLICK ARROW

  $('.upArrow').on('click', function(){

    var indexCollage = $('.collageContainer').find('.activeCollage').index() + 1;
    var upNext = indexCollage - 1;
    console.log(indexCollage);
    console.log(upNext);


    if ($(indexCollage == 1)) {
      $(window).scrollTo("max", 1000);
      $(".collageContainer > img:nth-child("+indexCollage+")").removeClass('activeCollage');
      $(".collageContainer > img:nth-last-child(1)").addClass('activeCollage');
    } else {
      $(".collageContainer > img").scrollTo(".collageContainer > img:nth-child("+upNext+")", 300);
      $(".collageContainer > img:nth-child("+indexCollage+")").removeClass('activeCollage');
      $(".collageContainer > img:nth-child("+upNext+")").addClass('activeCollage');

    }



  });




});
