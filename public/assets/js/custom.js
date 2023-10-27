// JavaScript Document
$(document).ready(function () {

  new WOW().init();

  var $ = jQuery

    /*1. typewriter*/
  var app = document.getElementById('app');
  var typewriter = new Typewriter(app, {
    loop: true,
    delay: 100,
  });

  typewriter.typeString('Strategies for growing your business.')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Enjoy the business world with us.')
    .pauseFor(2500)
    .deleteAll()
    //    .deleteChars(7)
    //    .typeString('<strong>altered!</strong>')
    //    .pauseFor(2500)
    .start();

  /**/
	
/*2. particles*/
// $(window).on('load', function () {
//   $('#particles-js1').delay(0).fadeOut('slow');
//   $('#particles-js1').addClass('rocket_launch');

// });

/*3. back_to_top*/
$('body').on("click", ".back_to_top ", function (e) {
  e.preventDefault();
  $('html,body').animate({
    scrollTop: 0
  }, 800);
  //    $(this).removeClass('show');
  $(this).addClass("rocket-run");
  setTimeout(function () {
    $(this).removeClass("rocket-run");
  }, 1000);
  return false;
});

// jQuery('.back_to_top ').hide();
// $(window).on("scroll", function () {
//   if ($(window).scrollTop() > 300) {
//     $(".back_to_top ").show();
//     $(".back_to_top ").addClass('rocket_down');
//   } else {
//     $(".back_to_top ").hide();
//     $(".back_to_top ").removeClass('rocket_down');
//     $(".back_to_top ").removeClass("rocket-run");
//     setTimeout(function () {
//       $('.back_to_top').removeClass('rocket_down');
//     }, 300);
//   }
// });

  
  /*4. responsivev menu*/
  // $("[data-trigger]").on("click", function () {
  //   var trigger_id = $(this).attr('data-trigger');
  //   $(trigger_id).toggleClass("show");
  //   $('body').toggleClass("offcanvas-active");
  // });

  // close button 
  // $(".btn-close").click(function (e) {
  //   $(".navbar-collapse").removeClass("show");
  //   $("body").removeClass("offcanvas-active");
  // });

  // $("nav.navbar .nav-link").click(function (e) {
  //   $(".navbar-collapse").removeClass("show");
  //   $("body").removeClass("offcanvas-active");
  // });


  /*5. scroll to add class*/
  $(function () {
    $(window).scroll(function () {
      var scroll = $(window).scrollTop();

      if (scroll >= 150) {
        $('.navbar').addClass('sticky-header');
      } else {
        $('.navbar').removeClass('sticky-header');
      }
    });
  });

  /**/


  /*6. slick slider*/

  // $('.monthly_plans').slick({
  //   infinite: false,
  //   autoplay: true,
  //   arrows: true,
  //   dots: false,
  //   focusOnSelect: true,
  //   autoplaySpeed: 2000,
  //   speed: 1000,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   responsive: [{
  //       breakpoint: 1199,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2,
  //         dots: true,
  //       }
  //     },
  //     {
  //       breakpoint: 767,
  //       settings: {
  //         slidesToShow: 1,
  //         dots: true,

  //       }
  //     }
  //   ]
  // });


  // $('.yearly_plans').slick({
  //   infinite: false,
  //   autoplay: true,
  //   arrows: true,
  //   dots: false,
  //   focusOnSelect: true,
  //   autoplaySpeed: 2000,
  //   speed: 1000,
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  //   responsive: [{
  //       breakpoint: 1199,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2,
  //         dots: true,
  //       }
  //     },
  //     {
  //       breakpoint: 767,
  //       settings: {
  //         slidesToShow: 1,
  //         dots: true,

  //       }
  //     }
  //   ]
  // });


  $('a[data-bs-toggle="tab"]').on('shown.bs.tab', function (e) {
    $('.slick-slider').resize('setPosition ', 0);
  });


  /* blog-slick*/
  // $('.blog-slick').slick({
  //   infinite: true,
  //   autoplay: true,
  //   arrows: true,
  //   dots: false,
  //   focusOnSelect: true,
  //   autoplaySpeed: 2000,
  //   speed: 1000,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   responsive: [{
  //       breakpoint: 1199,
  //       settings: {
  //         slidesToShow: 2
  //       }
  //     },
  //     {
  //       breakpoint: 575,
  //       settings: {
  //         slidesToShow: 1,
  //         arrows: false

  //       }
  //     }
  //   ]
  // });


  // $('.testi_slick').slick({
  //   infinite: true,
  //   autoplay: true,
  //   arrows: true,
  //   dots: false,
  //   focusOnSelect: true,
  //   autoplaySpeed: 2000,
  //   speed: 1000,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  // });


  // $('.vission_slick').slick({
  //   infinite: true,
  //   autoplay: true,
  //   arrows: false,
  //   dots: true,
  //   focusOnSelect: true,
  //   autoplaySpeed: 2000,
  //   speed: 1000,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,

  // });


  // $('.team_slick').slick({
  //   infinite: false,
  //   autoplay: true,
  //   arrows: true,
  //   dots: true,
  //   focusOnSelect: true,
  //   autoplaySpeed: 2000,
  //   speed: 1000,
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  //   responsive: [{
  //       breakpoint: 1199,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 1,
  //       }
  //     },
  //     {
  //       breakpoint: 991,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2,

  //       }
  //     },
  //     {
  //       breakpoint: 575,
  //       settings: {
  //         slidesToShow: 1,

  //       }
  //     }
  //   ]
  // });

  // $('.social_slick').slick({
  //   infinite: true,
  //   autoplay: true,
  //   arrows: true,
  //   dots: false,
  //   autoplaySpeed: 2000,
  //   speed: 1000,
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  //   responsive: [{
  //       breakpoint: 1199,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 1,
  //         dots: true,
  //       }
  //     },
  //     {
  //       breakpoint: 991,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2,
  //         dots: true,

  //       }
  //     },
  //     {
  //       breakpoint: 575,
  //       settings: {
  //         slidesToShow: 1,
  //         dots: true,

  //       }
  //     }
  //   ]
  // });


  // $('.client_slick').slick({
  //   infinite: true,
  //   autoplay: true,
  //   arrows: false,
  //   dots: true,
  //   autoplaySpeed: 2000,
  //   speed: 1000,
  //   slidesToShow: 5,
  //   slidesToScroll: 1,
  //   responsive: [{
  //       breakpoint: 1199,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 1
  //       }
  //     },
  //     {
  //       breakpoint: 767,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2

  //       }
  //     }
  //   ]
  // });


  jQuery(window).scroll(startCounter);

  function startCounter() {
    if (jQuery('.experience_section #counter_row').length > 0) {
      var hT = jQuery('.experience_section #counter_row').offset().top,
        hH = jQuery('.experience_section #counter_row').outerHeight(),
        wH = jQuery(window).height();
      if (jQuery(window).scrollTop() > hT + hH - wH) {
        jQuery(window).off("scroll", startCounter);
        jQuery('.counter').each(function () {
          var $this = jQuery(this);
          jQuery({
            Counter: 0
          }).animate({
            Counter: $this.text()
          }, {
            duration: 3000,
            easing: 'swing',
            step: function () {
              $this.text(Math.ceil(this.Counter) + '+');
            }
          });
        });
      }
    }
  }

  /**/


  $("ul.table_nav").on("click", "li", function (e) {
    e.preventDefault();
    var pos = $(this).index() + 2;
    $(".plan_table tr").find(' td:not(:eq(0))').hide();
    $('.plan_table td:nth-child(' + pos + ')').css('display', 'table-cell');
    $(".plan_table tr").find(' th:not(:eq(0))').hide();
    $('ul.table_nav li').removeClass('active');
    $(this).addClass('active');
  });

  // Initialize the media query
  var mediaQuery = window.matchMedia('(min-width: 640px)');

  // Add a listen event
  mediaQuery.addListener(doSomething);

  // Function to do something with the media query
  function doSomething(mediaQuery) {
    if (mediaQuery.matches) {
      $('.sep').attr('colspan', 5);
    } else {
      $('.sep').attr('colspan', 2);
    }
  }

  // On load
  doSomething(mediaQuery);

	/*img lazy load*/
	  if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
      img.src = img.dataset.src;
    });
  } else {
    // Dynamically import the LazySizes library
    const script = document.createElement('script');
    script.src =
      'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.1.2/lazysizes.min.js';
    document.body.appendChild(script);
  }
	
}); /* end ready function*/


/*loader*/



/* counter*/
$('.counter').each(function () {
  $(this).prop('Counter', 0).animate({
    Counter: $(this).text()
  }, {
    duration: 4000,
    easing: 'swing',
    step: function (now) {
      $(this).text(Math.ceil(now));
    }
  });
});
/**/



/*plan switch btn*/

function change_table(table) {
  var smm = document.getElementById("Tsmm");
  var seo = document.getElementById("Tseo");
  var eseo = document.getElementById("Teseo");
  var selector = document.getElementById("selector");

  if (table === "smm") {
    selector.style.left = "7px";
    selector.style.width = smm.clientWidth + "px";
    //    selector.innerHTML = "SMM";
  } else if (table === "seo") {
    var custleft = parseInt(seo.clientWidth) + parseInt(5);
    console.log(seo.clientWidth);
    selector.style.left = custleft + "px";
    selector.style.width = seo.clientWidth + "px";
    //    selector.innerHTML = "SEO";
  } else {
    var custleft = parseInt(eseo.clientWidth) + parseInt(5);
    selector.style.left = seo.clientWidth + custleft + 1 + "px";
    selector.style.width = seo.clientWidth + "px";
    //    selector.innerHTML = "E.SEO";
  }
}

