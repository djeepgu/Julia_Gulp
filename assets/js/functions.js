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
        $('.photoPreview').children().attr("src", "/assets/img/grid/grid-"+clickedId+".jpg");
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
      $('.photoPreview').children().attr("src", "/assets/img/grid/grid-"+clickedId+".jpg");
      // show photoPreview
      $('.photoPreview').css('display','block');
      // scrollTo active clicked thumb
      $('.photoGrid').scrollTo("div:nth-child("+clickedId+")",500)
    }
  });
  // photoPreview is clicked
  $('.photoPreview').on('click', function(){
    // remove class isNav
    $('.photoGrid').removeClass('isNav');
    // remove class activeImg
    $('.photoGrid').find('.activeImg').removeClass('activeImg');
    // hide photoPreview
    $('.photoPreview').css('display', 'none');
  });


// COLLAGE SCROLL UP CLICK ARROW

  $('.upArrow').on('click', function(){

    var indexCollage = $('.collageContainer').find('.activeCollage').index() + 1;
    var upNext = indexCollage - 1;

    if (indexCollage === 1) {
      $(window).scrollTo("max", 1000);
      $(".collageContainer > img:nth-child("+indexCollage+")").removeClass('activeCollage');
      $(".collageContainer > img:nth-last-child(1)").addClass('activeCollage');
    } else {
      $(window).scrollTo("#coll-"+upNext+"", 400);
      $(".collageContainer > img:nth-child("+indexCollage+")").removeClass('activeCollage');
      $(".collageContainer > img:nth-child("+upNext+")").addClass('activeCollage');
    }
  });

// COLLAGE SCROLL DOWN CLICK ARROW

  $('.downArrow').on('click', function(){

    var indexCollage = $('.collageContainer').find('.activeCollage').index() + 1;
    var downNext = indexCollage + 1;

    if ($('.collageContainer > img:nth-last-child(1)').hasClass('activeCollage')) {
      $(window).scrollTo("#coll-1", 1000);
      $("#coll-1").addClass('activeCollage');
      $(".collageContainer > img:nth-last-child(1)").removeClass('activeCollage');
    } else {
      $(window).scrollTo("#coll-"+downNext+"", 400);
      $(".collageContainer > img:nth-child("+indexCollage+")").removeClass('activeCollage');
      $(".collageContainer > img:nth-child("+downNext+")").addClass('activeCollage');
    }
  });

// COLLAGE CLICK ON PICTURE SCROLL

  $('.collagePic').on('click', function(){
    var getIndex = $(this).index() + 1;
    var nextIndex = getIndex + 1;

    if ($(this).is(':last-child')) {
      $(window).scrollTo("#coll-1", 1000);
      $("#coll-1").addClass('activeCollage');
      $('#coll-1').siblings().removeClass('activeCollage');
    } else {
      $(window).scrollTo("#coll-"+nextIndex+"", 400);
      $("#coll-"+getIndex+"").removeClass('activeCollage');
      $("#coll-"+nextIndex+"").addClass('activeCollage');
    }
  });

});
