// Index of jQuery Active Code

// :: 1.0 PRELOADER ACTIVE CODE
// :: 2.0 NAVIGATION MENU ACTIVE CODE
// :: 3.0 SCROLL TO TOP ACTIVE CODE
// :: 4.0 SCROLL LINK ACTIVE CODE
// :: 5.0 SMOOTH SCROLLING ACTIVE CODE
// :: 6.0 AOS ACTIVE CODE
// :: 7.0 AOS ACTIVE CODE
// :: 8.0 PREVENT DEFAULT ACTIVE CODE
// :: 9.0 COUNTERUP ACTIVE CODE
// :: 10.0 FANCYBOX VIDEO POPUP ACTIVE CODE
// :: 11.0 FEATURES SLIDER ACTIVE CODE
// :: 12.0 TESTIMONIALS ACTIVE CODE
// :: 13.0 REVIEWS SLIDER
// :: 14.0 CONTACT FORM ACTIVE CODE

(function ($) {
  var $window = $(window);
  var zero = 0;

  // :: 1.0 PRELOADER ACTIVE CODE
  $(window).on("load", function () {
    $(".preloader-wapper").addClass("loaded");
    if ($(".preloader-wapper").hasClass("loaded")) {
      $(".preloader-main")
        .delay(1200)
        .queue(function () {
          $(this).remove();
        });
    }
  });

  // :: 2.0 NAVIGATION MENU ACTIVE CODE
  // dropdown for mobile
  $(document).ready(function () {
    checkWidth(true);
    $(window).resize(function () {
      checkWidth(false);
    });
  });

  function checkWidth(init) {
    // If browser resized, check width again
    if ($(window).width() <= 991) {
      $(".dropdown-submenu a").on("click", function (e) {
        $(this).next("ul").toggle();
        e.stopPropagation();
        e.preventDefault();
      });
    }
  }
  function navMenu() {
    // MAIN MENU TOGGLER ICON (MOBILE SITE ONLY)
    $('[data-toggle="navbarToggler"]').click(function () {
      $(".navbar").toggleClass("active");
      $("body").toggleClass("canvas-open");
    });
    // MAIN MENU TOGGLER ICON
    $(".navbar-toggler").click(function () {
      $(".navbar-toggler-icon").toggleClass("active");
    });

    // NAVBAR STICKY
    var $stickyNav = $(".navbar-sticky");

    $(window).on("scroll load", function () {
      var scroll = $(window).scrollTop();
      if (scroll >= 120) {
        $stickyNav.addClass("navbar-sticky-moved-up");
      } else {
        $stickyNav.removeClass("navbar-sticky-moved-up");
      }
      // apply transition
      if (scroll >= 250) {
        $stickyNav.addClass("navbar-sticky-transitioned");
      } else {
        $stickyNav.removeClass("navbar-sticky-transitioned");
      }
      // sticky on
      if (scroll >= 500) {
        $stickyNav.addClass("navbar-sticky-on");
      } else {
        $stickyNav.removeClass("navbar-sticky-on");
      }
    });
  }
  navMenu();

  // :: 3.0 SCROLL TO TOP ACTIVE CODE
  var offset = 300;
  var duration = 500;

  $window.on("scroll", function () {
    if ($(this).scrollTop() > offset) {
      $("#scrollUp").fadeIn(duration);
    } else {
      // alert("fix this plz");
      $("#scrollUp").fadeOut(duration);
    }
  });

  $("#scrollUp").on("click", function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      duration,
    );
  });

  // :: 4.0 SCROLL LINK ACTIVE CODE
  var scrollLink = $(".scroll");

  // :: 5.0 SMOOTH SCROLLING ACTIVE CODE
  scrollLink.on("click", function (e) {
    e.preventDefault();

    (function closeMobileMenuIfLogoIsClicked() {
      const menuIsOpen = $(".navbar-inner").css("right") === "0px";

      console.log(menuIsOpen);

      if (menuIsOpen) {
        document.querySelector(".navbar-toggler").click();
      }
    })();

    const offset = e.target.getAttribute("data-scroll-offset")
      ? parseInt(e.target.getAttribute("data-scroll-offset"))
      : 0;

    $("body,html").animate(
      {
        scrollTop: $(this.hash).offset().top + offset,
      },
      1000,
    );
  });

  // :: 6.0 AOS ACTIVE CODE
  AOS.init();

  // :: 7.0 WOW ACTIVE CODE
  new WOW().init();

  // :: 8.0 PREVENT DEFAULT ACTIVE CODE
  $("a[href='#']").on("click", function ($) {
    $.preventDefault();
  });

  // :: 10.0 FANCYBOX VIDEO POPUP ACTIVE CODE
  $(".fancyVideo").fancybox({
    animationEffect: "zoom-in-out",
    transitionEffect: "circular",
    maxWidth: 800,
    maxHeight: 600,
  });

  // :: 14.0 REVIEWS SLIDER
  $("#reviews .app-screenshots").slick({
    lazyLoad: "ondemand",
    dots: false,
    initialSlide: 0,
    arrows: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    pauseOnHover: false,
    pauseOnFocus: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: false,
          dots: false,
        },
      },
    ],
  });
})(jQuery);

/* Custom Code 
  ===================================== */

window.ezfy = window.ezfy || {};

ezfy = (function () {
  const selectors = {
    allTags: [],
  };

  function _moveDOMElement(parent, child) {
    document.querySelector(parent).appendChild(document.querySelector(child));
  }

  function _isProductPage() {
    return /product/.test(window.location.href);
  }

  function _isCartPage() {
    return /cart/.test(window.location.href);
  }

  function _waitUntilElementExists(selector, callback) {
    const el = document.querySelector(selector);

    if (el) {
      return callback(el);
    }

    setTimeout(() => _waitUntilElementExists(selector, callback), 500);
  }

  function _addStyle(styleString) {
    const style = document.createElement("style");
    style.textContent = styleString;
    document.head.append(style);
  }

  function _observeDOM() {
    var MutationObserver =
        window.MutationObserver || window.WebKitMutationObserver,
      eventListenerSupported = window.addEventListener;

    return function (obj, callback) {
      if (MutationObserver) {
        // define a new observer
        var obs = new MutationObserver(function (mutations, observer) {
          if (
            mutations[0].addedNodes.length ||
            mutations[0].removedNodes.length
          )
            callback();
        });

        obs.observe(obj, {
          childList: true,
          subtree: true,
        });
      } else if (eventListenerSupported) {
        obj.addEventListener("DOMNodeInserted", callback, false);
        obj.addEventListener("DOMNodeRemoved", callback, false);
      }
    };
  }

  function lazyLoadImages() {
    /* Add class="lazyload" and data-src="image.png" to image elements */

    var lazyImages = [].slice.call(document.querySelectorAll("img.lazyload"));

    if ("IntersectionObserver" in window) {
      let lazyImageObserver = new IntersectionObserver(function (
        entries,
        observer,
      ) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            let lazyImage = entry.target;
            lazyImage.src = lazyImage.dataset.src;
            lazyImage.classList.remove("lazy");
            lazyImageObserver.unobserve(lazyImage);
          }
        });
      });

      lazyImages.forEach(function (lazyImage) {
        lazyImageObserver.observe(lazyImage);
      });
    }
  }

  function lazyLoadVideos() {
    var lazyVideos = [].slice.call(document.querySelectorAll("video"));

    if ("IntersectionObserver" in window) {
      var lazyVideoObserver = new IntersectionObserver(function (
        entries,
        observer,
      ) {
        entries.forEach(function (video) {
          if (video.isIntersecting) {
            for (var source in video.target.children) {
              var videoSource = video.target.children[source];
              if (
                typeof videoSource.tagName === "string" &&
                videoSource.tagName === "SOURCE"
              ) {
                videoSource.src = videoSource.dataset.src;
              }
            }

            console.log("me");
            // video.target.load();
            video.target.play();
            video.target.classList.remove("lazy");
            lazyVideoObserver.unobserve(video.target);

            console.log(video.target);
          }
        });
      });

      lazyVideos.forEach(function (lazyVideo) {
        lazyVideoObserver.observe(lazyVideo);
      });
    }
  }

  function addTagsToPortfolioItems() {
    const portfolioItems = document.querySelectorAll(
      "[data-portfolio-item-tags]",
    );

    if (!portfolioItems) {
      return;
    }

    for (let each of portfolioItems) {
      const tags = [
        ...each.getAttribute("data-portfolio-item-tags").split(","),
      ];

      selectors.allTags.push(...tags);

      const filteredTags = tags
        .map((e) => `<li>${e.trim().replace(",", "")}</li>`)
        .sort()
        .join("");

      const tag = each.querySelector(".portfolio-tags");

      if (tag) {
        tag.insertAdjacentHTML("afterbegin", filteredTags);
      }
    }
  }

  function addTagsToPortfolioFilter() {
    const tags = [
      ...new Set(
        [...selectors.allTags].map((e) => e.trim().replace(",", "")).sort(),
      ),
    ];

    const filteredTags = tags
      .map(
        (tag) =>
          `<a href="#" data-tag-name="${tag}" class="tags-widget-item d-inline-block mt-2 mr-1 px-2 py-1">${tag}</a>`,
      )
      .join("");

    const widget = document.getElementById("tagsWidget");

    if (widget) {
      widget.insertAdjacentHTML("beforeend", filteredTags);
    }
  }

  function portfolioTagHandleOnClick() {
    const tagsWidget = document.getElementById("tagsWidget");
    if (!tagsWidget) {
      return;
    }

    const allTags = tagsWidget.querySelectorAll("[data-tag-name]");

    const highlightChosenFilter = () => {
      const activeTag = tagsWidget.querySelector(".tags-widget-item--active");
      if (activeTag) {
        activeTag.classList.remove("tags-widget-item--active");
      }
    };

    const showAllPortfolioItems = () => {
      const hiddenItems = document.querySelectorAll(".portfolio-item--hide");

      if (!hiddenItems) {
        return;
      }

      for (let each of hiddenItems) {
        each.classList.remove("portfolio-item--hide");
      }
    };

    const hideNotChosenPortfolioItems = (tag) => {
      const items = document.querySelectorAll("[data-portfolio-item-tags]");

      if (tag === "all") {
        return showAllPortfolioItems();
      }

      for (let each of items) {
        const tags = each
          .getAttribute("data-portfolio-item-tags")
          .split(",")
          .map((e) => e.trim());
        const result = tags.includes(tag);

        if (!result) {
          each.classList.add("portfolio-item--hide");
        }
      }
    };

    const listenForClicks = (() => {
      for (let each of allTags) {
        each.addEventListener("click", function (e) {
          e.preventDefault();
          const el = e.target;

          highlightChosenFilter();

          const tag = el.getAttribute("data-tag-name");
          el.classList.add("tags-widget-item--active");

          showAllPortfolioItems();
          hideNotChosenPortfolioItems(tag);
        });
      }
    })();
  }

  function autoplayVideo() {
    var videos = [].slice.call(document.querySelectorAll("video"));

    if ("IntersectionObserver" in window) {
      let options = {
        root: document.querySelector("#scrollArea"),
        rootMargin: "23%",
        threshold: 1.0,
      };

      let observer = new IntersectionObserver(function (entry) {
        const video = entry[0];
        console.log(video);
        if (video.isIntersecting) {
          console.log("play", video.target);
          video.target.play();
        } else if (!video.isIntersecting) {
          console.log("pause", video.target);
          video.target.pause();
        }
      }, options);

      videos.forEach((each) => {
        observer.observe(each);
      });
    }
  }

  function addToCartListener() {
    const atc = document.querySelectorAll(".services-button");
    const redirectText = `Redirecting to PayPal...`;

    if (!atc) {
      return;
    }

    for (const each of atc) {
      each.addEventListener("click", function (e) {
        e.preventDefault();

        console.log(each.innerHTML);
        e.target.textContent = redirectText;
        const button = each.querySelector(`form`);

        button.submit();
      });
    }
  }

  function redirectToPaymentGateway() {
    const atc = document.querySelectorAll(".services-button");
    const redirectText = `Please wait...`;

    if (!atc) {
      return;
    }

    for (const each of atc) {
      each.addEventListener("click", function (e) {
        // e.preventDefault();

        e.target.textContent = redirectText;
        const button = each.querySelector(`form`);

        button.submit();
      });
    }
  }

  function readMoreForServices() {
    const readmore = document.querySelectorAll(`.services-read-more`);

    for (let each of readmore) {
      each.addEventListener("click", function (e) {
        e.preventDefault();

        each
          .closest(`.services-subtitle`)
          .classList.add(`services-subtitle--visible`);
      });
    }
  }
  return {
    initServices: () => {
      readMoreForServices();
      redirectToPaymentGateway();
      // addToCartListener();
    },
    init: function () {
      document.addEventListener("DOMContentLoaded", function () {
        lazyLoadImages();
        // lazyLoadVideos();
        addTagsToPortfolioItems();
        addTagsToPortfolioFilter();
        portfolioTagHandleOnClick();
        autoplayVideo();
        window.ezfy.initServices();
      });

      window.onresize = function (event) {};

      window.onload = function () {};
    },
  };
})();

window.ezfy.init();
