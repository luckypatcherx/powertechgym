/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $("#back-to-top").fadeIn();
    } else {
      $("#back-to-top").fadeOut();
    }
  });
  $(function () {
    var offset = 250;
    var duration = 300;
    $(window).scroll(function () {
      if ($(this).scrollTop() > offset) {
        $(".back-to-top").fadeIn(duration);
      } else {
        $(".back-to-top").fadeOut(duration);
      }
    });
    $(document).ready(function () {
      $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
          $("#back-to-top2").fadeIn();
        } else {
          $("#back-to-top2").fadeOut();
        }
      });
      $(function () {
        var offset = 230;
        var duration = 330;
        $(window).scroll(function () {
          if ($(this).scrollTop() > offset) {
            $(".back-to-top2").fadeIn(duration);
          } else {
            $(".back-to-top2").fadeOut(duration);
          }
        });

        $(".navbar a, footer a[href='#myPage']").on("click", function (event) {
          if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            var hash = this.hash;
            $("html, body").animate(
              {
                scrollTop: $(hash).offset().top,
              },
              900,
              function () {}
            );
          }
        });

        $("nav")
          .find("li")
          .on("click", "a", function () {
            $(".navbar-collapse.in").collapse("hide");
          });

        var $imagePopup = $("[data-insta-image-popup]");
        /*Image*/
        $imagePopup.magnificPopup({
          type: "image",
          gallery: {
            enabled: true,
          },
        });
      });
    });
  });
});
