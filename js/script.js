/** @format */

function copyRightYear() {
  var d = new Date();
  var n = d.getFullYear();
  $(".get-year").text(n);
}
$(window).on("load", function () {
  $(".preloader").fadeOut(1000);
  new WOW({ mobile: false }).init();
});

$(document).ready(function () {
  $("#contact form").submit(function (event) { 
    swal({
      title: "Sending...!",
      text: ".",
      icon: "info",
      button: false,
    });
    event.preventDefault();
    let $this = $(this);
    var url =
      "https://mail-sender.vingb.com/send/fde8a2d0-08c0-49de-9474-ce94b6959f7d";

    var method = $this.attr("method");
    var data = $($this).serialize();
    $.ajax({
      type: "POST",
      url: url,
      dataType: "json",
      data: data,
      success: function (data) {
        console.log(data["status"]);

        console.log("success");
        if (data["status"]) {
          swal({
            title: "Thank you!",
            text:
              "Your message has been successfully sent.\n We will contact you very soon!",
            icon: "success",
            button: false,
          });

          setTimeout(function () {
            swal.close();
          }, 1000);
        } else {
          swal({
            title: "Try Again !",
            text: "something went wrong",
            icon: "warning",
            button: "OK",
          });
        }
      },
      error: function (data) {
        swal({
          title: "Try Again !",
          text: "something went wrong",
          icon: "warning",
          button: "OK",
        });
      },
    });
  });

  copyRightYear();
  $(".equal-height").each(function () {
    let $this = $(this);
    let h = 0;
    $this.children().each(function () {
      let child = $(this);
      if (h < child.outerHeight()) {
        h = child.outerHeight();
      }
    });
    $this.children().height(h);
  });

  (function () {
    let mainServicesContentHeight = 0;
    $("#main-services .tab-content .content").each(function () {
      let $this = $(this);
      let height = $this.outerHeight();
      if (mainServicesContentHeight < height) {
        mainServicesContentHeight = height;
      }
    });
    $("#main-services .tab-content .content").height(mainServicesContentHeight);
    setTimeout(function () {
      $("#main-services #main-services-tab3").attr("checked", false);
      $("#main-services #main-services-tab1").attr("checked", true);
    }, 3000);
    setTimeout(function () {
      $("#main-services #main-services-tab1").attr("checked", false);
      $("#main-services #main-services-tab2").attr("checked", true);
    }, 6000);
    setTimeout(function () {
      $("#main-services #main-services-tab2").attr("checked", false);
      $("#main-services #main-services-tab3").attr("checked", true);
    }, 9000);
    setInterval(function () {
      setTimeout(function () {
        $("#main-services #main-services-tab3").attr("checked", false);
        $("#main-services #main-services-tab1").attr("checked", true);
      }, 3000);
      setTimeout(function () {
        $("#main-services #main-services-tab1").attr("checked", false);
        $("#main-services #main-services-tab2").attr("checked", true);
      }, 6000);
      setTimeout(function () {
        $("#main-services #main-services-tab2").attr("checked", false);
        $("#main-services #main-services-tab3").attr("checked", true);
      }, 9000);
    }, 9000);
  })();

  $(".equal-square").each(function () {
    let $this = $(this);
    let width = $this.width();
    $this.height(width * 0.8);
  });

  $("#face-chart .part").on("mouseover", function () {
    $(".content").stop(true, true);
    if ($(window).width() < 650) {
      setTimeout(function () {
        $("#face-chart .mobile-popup").show(1000);
      }, 300);
    }
    let $this = $(this);
    let className = $this.attr("data-content");
    $("#face-chart .content").hide(500);
    $("#face-chart ." + className).show(500);
  });
  $("#face-chart .container").on("mouseleave", function () {
    $(".content").stop(true, true);

    $("#face-chart .content").hide(500);
    $("#face-chart .content-0").show(500);
  });

  $("#face-chart  .mobile-popup .close-icon").click(function () {
    $("#face-chart .mobile-popup").hide(500);
  });

  if ($(window).width() < 650) {
    let content = $("#face-chart .container .content");
    $("#face-chart .mobile-popup").append(content);
    $("#face-chart .mobile-popup h4").append("<small></small>");

    $("#face-chart .mobile-popup li").click(function () {
      let $this = $(this);
      $(".content p").stop(true, true);
      $("#face-chart .mobile-popup li p").hide(500);
      if ($this.hasClass("active")) {
        $this.find("p").hide(500);
        $this.removeClass("active");
      } else {
        $("#face-chart .mobile-popup li").removeClass("active");
        $this.find("p").show(500);
        $this.addClass("active");
      }
    });
  }
  $("#service-faq .content").click(function () {
    let $this = $(this);
    $(".content p").stop(true, true);
    $("#service-faq .content p").hide(500);
    if ($this.hasClass("active")) {
      $this.find("p").hide(500);
      $this.removeClass("active");
    } else {
      $("#service-faq .content").removeClass("active");
      $this.find("p").show(500);
      $this.addClass("active");
    }
  });
  $(window).on("scroll", function () {
    let windowHeight = $("#spotlight").outerHeight();
    let scrollTop = $(window).scrollTop();
    if (windowHeight < scrollTop) {
      // $("#navbar").stop(true, true);
      $("#navbar.not-fixed").slideDown(800);
    } else {
      $("#navbar.not-fixed").slideUp(800);
      setTimeout(function () {
        $("#navbar.not-fixed").stop(true, true);
      }, 800);
    }
  });
});

