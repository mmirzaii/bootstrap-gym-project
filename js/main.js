// navbar button
$(document).ready(function () {
  $(".nav-button").click(function () {
    $(".nav-button").toggleClass("change");
  });
});
// end navbar button
// navbar scroll
$(window).scroll(function () {
  let position = $(this).scrollTop();
  if (position >= 200) {
    $(".nav-menu").addClass("scroll-navbar");
  } else {
    $(".nav-menu").removeClass("scroll-navbar");
  }
});
// end navbar scroll
// award text and img
$(window).scroll(function () {
  let position = $(this).scrollTop();
  if (position >= 700) {
    $(".award-text").addClass("fromright");
    $(".award-img").addClass("fromleft");
  } else {
    $(".award-text").removeClass("fromright");
    $(".award-img").removeClass("fromleft");
  }
});
// end award text and img
// gallery
$(".gallery-list-item").click(function () {
  let value = $(this).attr("data-filter");
  $(this).addClass("active-item").siblings().removeClass("active-item");
  if (value === "all") {
    $(".filter").show(300);
  } else {
    $(".filter")
      .not("." + value)
      .hide(300);
    $(".filter")
      .filter("." + value)
      .show(300);
  }
});
// end gallery
// membership
$(window).scroll(function () {
  let position = $(this).scrollTop();
  console.log(position);
  if (position >= 4400) {
    $(".card-1").addClass("move-from-right");
    $(".card-2").addClass("move-from-bottom");
    $(".card-3").addClass("move-from-left");
  } else {
    $(".card-1").removeClass("move-from-right");
    $(".card-2").removeClass("move-from-bottom");
    $(".card-3").removeClass("move-from-left");
  }
});
// end membership
