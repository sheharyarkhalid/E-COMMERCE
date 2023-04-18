
    $(document).ready(function() {  

        $('.mobile_res_toggle_btn').click(function () {
            $('.mobile_res_toggle_content').toggleClass('responsive_bar');
        });
        

        $(document).ready(function() {      
            $('.Banner_slider').slick({
                slidesToShow: 1,
              slidesToScroll: 1,
              autoplay: false,
              autoplaySpeed: 2000,
              dots: false,
            arrows: false,
              });
              }); 
            

              $(".product_category_slider").slick({
                slidesToShow:4,
                slidesToScroll: 1,
                autoplay: false,
                autoplaySpeed: 2000,
                dots: false,
               arrows: true,
       appendArrows: $('.category_slider_arrow_box'),
       nextArrow: '<a class="category_pre_arrow"><i class="fa fa-angle-right" aria-hidden="true"></i></a>',
       prevArrow: '<a class="category_pre_arrow"><i class="fa fa-angle-left" aria-hidden="true"></i></a>',
                responsive: [
                  {
                    breakpoint: 1024,
                    settings: {
                      slidesToShow:3,
                      slidesToScroll: 1,
                      autoplay: false,
                      autoplaySpeed: 1500,
                      dots: false,
                      arrows: true,
                    },
                  },
                  {
                    breakpoint: 767,
                    settings: {
                      slidesToShow: 2,
                      slidesToScroll: 1,
                      autoplay: false,
                      autoplaySpeed: 1500,
                           dots: false,
                        arrows: true,
                    },
                  },
                  {
                    breakpoint: 540,
                    settings: {
                      slidesToShow: 2,
                      slidesToScroll: 1,
                      autoplay: false,
                      autoplaySpeed: 1500,
                          dots: false,
                      arrows: true,
                    },
                  },
                  {
                    breakpoint: 400,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      autoplay: false,
                    autoplaySpeed: 1500,
                           dots: false,
                       arrows: true,
                    },
                  },
                ],
              });




              $(".testimonial_slider").slick({
                slidesToShow:3,
                slidesToScroll: 1,
                autoplay: false,
                autoplaySpeed: 2000,
                dots: false,
               arrows: true,
      appendArrows: $('.testimonial_slider_arrow_box'),
      nextArrow: '<a class="testimonial_pre_arrow"><i class="fa fa-angle-right" aria-hidden="true"></i></a>',
      prevArrow: '<a class="testimonial_pre_arrow"><i class="fa fa-angle-left" aria-hidden="true"></i></a>',
                responsive: [
                  {
                    breakpoint: 1024,
                    settings: {
                      slidesToShow:3,
                      slidesToScroll: 1,
                      autoplay: false,
                      autoplaySpeed: 1500,
                      dots: false,
                      arrows: true,
                    },
                  },
                  {
                    breakpoint: 767,
                    settings: {
                      slidesToShow: 2,
                      slidesToScroll: 1,
                      autoplay: false,
                      autoplaySpeed: 1500,
                           dots: false,
                        arrows: true,
                    },
                  },
                  {
                    breakpoint: 540,
                    settings: {
                      slidesToShow: 2,
                      slidesToScroll: 1,
                      autoplay: false,
                      autoplaySpeed: 1500,
                          dots: false,
                      arrows: true,
                    },
                  },
                  {
                    breakpoint: 480,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      autoplay: false,
                    autoplaySpeed: 1500,
                           dots: false,
                       arrows: true,
                    },
                  },
                ],
              });


              var acc = document.getElementsByClassName("accordion");
              var i;
              
              for (i = 0; i < acc.length; i++) {
                acc[i].addEventListener("click", function() {
                  this.classList.toggle("active");
                  var panel = this.nextElementSibling;
                  if (panel.style.display === "block") {
                    panel.style.display = "none";
                  } else {
                    panel.style.display = "block";
                  }
                });
              }

        }); 
      
