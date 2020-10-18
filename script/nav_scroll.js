//Nav bar Color-Change when Scrolling

$(function () {
    $(document).scroll(function () {
      var $nav = $(".navbarcolorscroll");
      $nav.toggleClass('scrolled1', $(this).scrollTop() > $nav.height());
    });
  });

$(function () {
    $(document).scroll(function () {
      var $nav = $("#logocolorscroll");
      $nav.toggleClass('scrolled2', $(this).scrollTop() > $nav.height());
    });
  });

