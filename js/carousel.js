// Initialize Slick Carousel for testimonials with enhanced settings
$(document).ready(function () {
  if ($(".center").length) {
    $(".center").slick({
      centerMode: true,
      centerPadding: "60px",
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      dots: true,
      arrows: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            centerMode: false,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            centerMode: true,
            centerPadding: "40px",
          },
        },
      ],
    });
  }
});
