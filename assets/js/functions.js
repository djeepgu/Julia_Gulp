$( document ).ready(function() {

  // if you click on the thumbnail
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
        $('.photoGrid').scrollTo("div:nth-child("+clickedId+")")
      }
    // if is NOT nav
    } else {
      // addClass(‘isNav’)
      $('.photoGrid').addClass('isNav');
      // addClass(‘activeImg’)
      $(this).addClass('activeImg');
      // show photoPreview
      $('.photoPreview').css('display','block');
      // change image in photoPreview to relative clicked thumb
      $('.photoPreview').children().attr("src", "../assets/img/grid/grid-"+clickedId+".jpg");
      // scrollTo active clicked thumb
      $('.photoGrid').scrollTo("div:nth-child("+clickedId+")")
    }


  });
});
