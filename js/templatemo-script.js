// function adjustMainBgHeight() {
//   var imgWidth = 1200;
//   var imgHeight = 620;
//   var img = $(".tm-main-bg");
//   var currentWidth = img.width();
//   var currentHeight = (currentWidth * imgHeight) / imgWidth;

//   img.css("height", currentHeight);
// }

// $(document).ready(function () {
//   adjustMainBgHeight();

//   $(window).resize(function () {
//     adjustMainBgHeight();
//   });

//   // Mobile menu
//   $(".tm-mobile-menu").click(function () {
//     $(".tm-nav").toggleClass("show");
//   });

//   if ($(".tm-carousel").length) {
//     // Carousel
//     $(".tm-carousel").owlCarousel({
//       items: 3,
//       loop: true,
//       margin: 1,
//       autoplay: true,
//       slideTransition: "linear",
//       autoplayTimeout: 0,
//       autoplaySpeed: 3000,
//       autoplayHoverPause: false,
//       infinite: true,
//       responsive: [
//         {
//           breakpoint: 992,
//           settings: {
//             slidesToShow: 3,
//             slidesToScroll: 1,
//           },
//         },
//         {
//           breakpoint: 550,
//           settings: {
//             slidesToShow: 2,
//             slidesToScroll: 1,
//           },
//         },
//         {
//           breakpoint: 420,
//           settings: {
//             slidesToShow: 1,
//             slidesToScroll: 1,
//           },
//         },
//       ],
//     });
//   }
// });
