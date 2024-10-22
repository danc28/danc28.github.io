
function scrollTop() {
  // 500 -> This is the value in px of the distance to be scrolled for the 'scroll-to-top' button to show-up
  if ($(window).scrollTop() > 850 + window.screen.height) {
    $(".backToTopBtn").addClass("active");
  } else {
    $(".backToTopBtn").removeClass("active");
  }
}

$(function () {
  // show and hide btn
  scrollTop();
  $(window).on("scroll", scrollTop);

  // body scroll on btn click
  $(".backToTopBtn").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1);
    return false;
  });
});

$(window).scroll(function() {
    if ($(this).scrollTop() > 100 && $(this).scrollTop() < 800) {  
        $('header').addClass("sticky");
    } else{
        $('header').removeClass("sticky");
    }
})

/*
$('.grid').masonry({
  // options
  itemSelector: '.grid-item',
  columnWidth: '.grid-sizer',
  gutter: 15,
  horizontalOrder: true
});
*/

