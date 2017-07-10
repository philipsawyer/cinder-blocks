// used to set maximum for medium and minimum for large
var largethreshhold = 1024;

// used to set maximum for small and minimum for medium
var mediumthreshhold = 640;

$(window).resize(function() {
  resizeview();
  // removecfromname();
});

$(window).ready(function() {
  resizeview();
  // removecfromname();
});

// function removecfromname() {
//
// }

function resizeview() {

  $( ".l1, .l2, .l3, .l4, .l5, .l6, .l7, .l8, .l9, .l10, .l11, .l12, .l13, .l14, .l15, .l16, .l17, .l18, .l19, .l20, .l21, .l22, .l23, .l24, .m1, .m2, .m3, .m4, .m5, .m6, .m7, .m8, .m9, .m10, .m11, .m12, .m13, .m14, .m15, .m16, .m17, .m18, .m19, .m20, .m21, .m22, .m23, .m24, .s1, .s2, .s3, .s4, .s5, .s6, .s7, .s8, .s9, .s10, .s11, .s12, .s13, .s14, .s15, .s16, .s17, .s18, .s19, .s20, .s21, .s22, .s23, .s24" ).css({ "margin-left": "0em", "margin-right": "0em" });

  var viewportwidth = $(window).width();

  var dividedviewportwidth = viewportwidth / 24;

  var percent1 = dividedviewportwidth * 1
  var percent2 = dividedviewportwidth * 2
  var percent3 = dividedviewportwidth * 3
  var percent4 = dividedviewportwidth * 4
  var percent5 = dividedviewportwidth * 5
  var percent6 = dividedviewportwidth * 6
  var percent7 = dividedviewportwidth * 7
  var percent8 = dividedviewportwidth * 8
  var percent9 = dividedviewportwidth * 9
  var percent10 = dividedviewportwidth * 10
  var percent11 = dividedviewportwidth * 11
  var percent12 = dividedviewportwidth * 12
  var percent13 = dividedviewportwidth * 13
  var percent14 = dividedviewportwidth * 14
  var percent15 = dividedviewportwidth * 15
  var percent16 = dividedviewportwidth * 16
  var percent17 = dividedviewportwidth * 17
  var percent18 = dividedviewportwidth * 18
  var percent19 = dividedviewportwidth * 19
  var percent20 = dividedviewportwidth * 20
  var percent21 = dividedviewportwidth * 21
  var percent22 = dividedviewportwidth * 22
  var percent23 = dividedviewportwidth * 23
  var percent24 = dividedviewportwidth * 24

  // large
  if (viewportwidth >= largethreshhold) {
    console.log("large");

    $(".l0").css("width", 0);
    $(".l1").css("width", percent1);
    $(".l2").css("width", percent2);
    $(".l3").css("width", percent3);
    $(".l4").css("width", percent4);
    $(".l5").css("width", percent5);
    $(".l6").css("width", percent6);
    $(".l7").css("width", percent7);
    $(".l8").css("width", percent8);
    $(".l9").css("width", percent9);
    $(".l10").css("width", percent10);
    $(".l11").css("width", percent11);
    $(".l12").css("width", percent12);
    $(".l13").css("width", percent13);
    $(".l14").css("width", percent14);
    $(".l15").css("width", percent15);
    $(".l16").css("width", percent16);
    $(".l17").css("width", percent17);
    $(".l18").css("width", percent18);
    $(".l19").css("width", percent19);
    $(".l20").css("width", percent20);
    $(".l21").css("width", percent21);
    $(".l22").css("width", percent22);
    $(".l23").css("width", percent23);
    $(".l24").css("width", percent24);



    var l1cmargin = (viewportwidth - percent1) / 2;
    var l2cmargin = (viewportwidth - percent2) / 2;
    var l3cmargin = (viewportwidth - percent3) / 2;
    var l4cmargin = (viewportwidth - percent4) / 2;
    var l5cmargin = (viewportwidth - percent5) / 2;
    var l6cmargin = (viewportwidth - percent6) / 2;
    var l7cmargin = (viewportwidth - percent7) / 2;
    var l8cmargin = (viewportwidth - percent8) / 2;
    var l9cmargin = (viewportwidth - percent9) / 2;
    var l10cmargin = (viewportwidth - percent10) / 2;
    var l11cmargin = (viewportwidth - percent11) / 2;
    var l12cmargin = (viewportwidth - percent12) / 2;
    var l13cmargin = (viewportwidth - percent13) / 2;
    var l14cmargin = (viewportwidth - percent14) / 2;
    var l15cmargin = (viewportwidth - percent15) / 2;
    var l16cmargin = (viewportwidth - percent16) / 2;
    var l17cmargin = (viewportwidth - percent17) / 2;
    var l18cmargin = (viewportwidth - percent18) / 2;
    var l19cmargin = (viewportwidth - percent19) / 2;
    var l20cmargin = (viewportwidth - percent20) / 2;
    var l21cmargin = (viewportwidth - percent21) / 2;
    var l22cmargin = (viewportwidth - percent22) / 2;
    var l23cmargin = (viewportwidth - percent23) / 2;
    var l24cmargin = (viewportwidth - percent24) / 2;

    $(".l0c").css({
      "width": 0,
      "opacity": 0,
      "visibility": "none"
    });
    $(".l1c").css({
      "width": percent1,
      "margin-right": l1cmargin,
      "margin-left": l1cmargin
    });
    $(".l2c").css({
      "width": percent2,
      "margin-right": l2cmargin,
      "margin-left": l2cmargin
    });
    $(".l3c").css({
      "width": percent3,
      "margin-right": l3cmargin,
      "margin-left": l3cmargin
    });
    $(".l4c").css({
      "width": percent4,
      "margin-right": l4cmargin,
      "margin-left": l4cmargin
    });
    $(".l5c").css({
      "width": percent5,
      "margin-right": l5cmargin,
      "margin-left": l5cmargin
    });
    $(".l6c").css({
      "width": percent6,
      "margin-right": l6cmargin,
      "margin-left": l6cmargin
    });
    $(".l7c").css({
      "width": percent7,
      "margin-right": l7cmargin,
      "margin-left": l7cmargin
    });
    $(".l8c").css({
      "width": percent8,
      "margin-right": l8cmargin,
      "margin-left": l8cmargin
    });
    $(".l9c").css({
      "width": percent9,
      "margin-right": l9cmargin,
      "margin-left": l9cmargin
    });
    $(".l10c").css({
      "width": percent10,
      "margin-right": l10cmargin,
      "margin-left": l10cmargin
    });
    $(".l11c").css({
      "width": percent11,
      "margin-right": l11cmargin,
      "margin-left": l11cmargin
    });
    $(".l12c").css({
      "width": percent12,
      "margin-right": l12cmargin,
      "margin-left": l12cmargin
    });
    $(".l13c").css({
      "width": percent13,
      "margin-right": l13cmargin,
      "margin-left": l13cmargin
    });
    $(".l14c").css({
      "width": percent14,
      "margin-right": l14cmargin,
      "margin-left": l14cmargin
    });
    $(".l15c").css({
      "width": percent15,
      "margin-right": l15cmargin,
      "margin-left": l15cmargin
    });
    $(".l16c").css({
      "width": percent16,
      "margin-right": l16cmargin,
      "margin-left": l16cmargin
    });
    $(".l17c").css({
      "width": percent17,
      "margin-right": l17cmargin,
      "margin-left": l17cmargin
    });
    $(".l18c").css({
      "width": percent18,
      "margin-right": l18cmargin,
      "margin-left": l18cmargin
    });
    $(".l19c").css({
      "width": percent19,
      "margin-right": l19cmargin,
      "margin-left": l19cmargin
    });
    $(".l20c").css({
      "width": percent20,
      "margin-right": l20cmargin,
      "margin-left": l20cmargin
    });
    $(".l21c").css({
      "width": percent21,
      "margin-right": l21cmargin,
      "margin-left": l21cmargin
    });
    $(".l22c").css({
      "width": percent22,
      "margin-right": l22cmargin,
      "margin-left": l22cmargin
    });
    $(".l23c").css({
      "width": percent23,
      "margin-right": l23cmargin,
      "margin-left": l23cmargin
    });
    $(".l24c").css({
      "width": percent24,
      "margin-right": l24cmargin,
      "margin-left": l24cmargin
    });
  }

  // medium
  if (largethreshhold > viewportwidth && viewportwidth >= mediumthreshhold) {
    console.log("medium");

    $(".m0").css("width", 0);
    $(".m1").css("width", percent1);
    $(".m2").css("width", percent2);
    $(".m3").css("width", percent3);
    $(".m4").css("width", percent4);
    $(".m5").css("width", percent5);
    $(".m6").css("width", percent6);
    $(".m7").css("width", percent7);
    $(".m8").css("width", percent8);
    $(".m9").css("width", percent9);
    $(".m10").css("width", percent10);
    $(".m11").css("width", percent11);
    $(".m12").css("width", percent12);
    $(".m13").css("width", percent13);
    $(".m14").css("width", percent14);
    $(".m15").css("width", percent15);
    $(".m16").css("width", percent16);
    $(".m17").css("width", percent17);
    $(".m18").css("width", percent18);
    $(".m19").css("width", percent19);
    $(".m20").css("width", percent20);
    $(".m21").css("width", percent21);
    $(".m22").css("width", percent22);
    $(".m23").css("width", percent23);
    $(".m24").css("width", percent24);

    var m1cmargin = (viewportwidth - percent1) / 2;
    var m2cmargin = (viewportwidth - percent2) / 2;
    var m3cmargin = (viewportwidth - percent3) / 2;
    var m4cmargin = (viewportwidth - percent4) / 2;
    var m5cmargin = (viewportwidth - percent5) / 2;
    var m6cmargin = (viewportwidth - percent6) / 2;
    var m7cmargin = (viewportwidth - percent7) / 2;
    var m8cmargin = (viewportwidth - percent8) / 2;
    var m9cmargin = (viewportwidth - percent9) / 2;
    var m10cmargin = (viewportwidth - percent10) / 2;
    var m11cmargin = (viewportwidth - percent11) / 2;
    var m12cmargin = (viewportwidth - percent12) / 2;
    var m13cmargin = (viewportwidth - percent13) / 2;
    var m14cmargin = (viewportwidth - percent14) / 2;
    var m15cmargin = (viewportwidth - percent15) / 2;
    var m16cmargin = (viewportwidth - percent16) / 2;
    var m17cmargin = (viewportwidth - percent17) / 2;
    var m18cmargin = (viewportwidth - percent18) / 2;
    var m19cmargin = (viewportwidth - percent19) / 2;
    var m20cmargin = (viewportwidth - percent20) / 2;
    var m21cmargin = (viewportwidth - percent21) / 2;
    var m22cmargin = (viewportwidth - percent22) / 2;
    var m23cmargin = (viewportwidth - percent23) / 2;
    var m24cmargin = (viewportwidth - percent24) / 2;

    $(".m0c").css({
      "width": 0
    });
    $(".m1c").css({
      "width": percent1,
      "margin-right": m1cmargin,
      "margin-left": m1cmargin
    });
    $(".m2c").css({
      "width": percent2,
      "margin-right": m2cmargin,
      "margin-left": m2cmargin
    });
    $(".m3c").css({
      "width": percent3,
      "margin-right": m3cmargin,
      "margin-left": m3cmargin
    });
    $(".m4c").css({
      "width": percent4,
      "margin-right": m4cmargin,
      "margin-left": m4cmargin
    });
    $(".m5c").css({
      "width": percent5,
      "margin-right": m5cmargin,
      "margin-left": m5cmargin
    });
    $(".m6c").css({
      "width": percent6,
      "margin-right": m6cmargin,
      "margin-left": m6cmargin
    });
    $(".m7c").css({
      "width": percent7,
      "margin-right": m7cmargin,
      "margin-left": m7cmargin
    });
    $(".m8c").css({
      "width": percent8,
      "margin-right": m8cmargin,
      "margin-left": m8cmargin
    });
    $(".m9c").css({
      "width": percent9,
      "margin-right": m9cmargin,
      "margin-left": m9cmargin
    });
    $(".m10c").css({
      "width": percent10,
      "margin-right": m10cmargin,
      "margin-left": m10cmargin
    });
    $(".m11c").css({
      "width": percent11,
      "margin-right": m11cmargin,
      "margin-left": m11cmargin
    });
    $(".m12c").css({
      "width": percent12,
      "margin-right": m12cmargin,
      "margin-left": m12cmargin
    });
    $(".m13c").css({
      "width": percent13,
      "margin-right": m13cmargin,
      "margin-left": m13cmargin
    });
    $(".m14c").css({
      "width": percent14,
      "margin-right": m14cmargin,
      "margin-left": m14cmargin
    });
    $(".m15c").css({
      "width": percent15,
      "margin-right": m15cmargin,
      "margin-left": m15cmargin
    });
    $(".m16c").css({
      "width": percent16,
      "margin-right": m16cmargin,
      "margin-left": m16cmargin
    });
    $(".m17c").css({
      "width": percent17,
      "margin-right": m17cmargin,
      "margin-left": m17cmargin
    });
    $(".m18c").css({
      "width": percent18,
      "margin-right": m18cmargin,
      "margin-left": m18cmargin
    });
    $(".m19c").css({
      "width": percent19,
      "margin-right": m19cmargin,
      "margin-left": m19cmargin
    });
    $(".m20c").css({
      "width": percent20,
      "margin-right": m20cmargin,
      "margin-left": m20cmargin
    });
    $(".m21c").css({
      "width": percent21,
      "margin-right": m21cmargin,
      "margin-left": m21cmargin
    });
    $(".m22c").css({
      "width": percent22,
      "margin-right": m22cmargin,
      "margin-left": m22cmargin
    });
    $(".m23c").css({
      "width": percent23,
      "margin-right": m23cmargin,
      "margin-left": m23cmargin
    });
    $(".m24c").css({
      "width": percent24,
      "margin-right": m24cmargin,
      "margin-left": m24cmargin
    });
  }

  //small
  if (mediumthreshhold > viewportwidth) {
    console.log("small");

    $(".s0").css("width", 0);
    $(".s1").css("width", percent1);
    $(".s2").css("width", percent2);
    $(".s3").css("width", percent3);
    $(".s4").css("width", percent4);
    $(".s5").css("width", percent5);
    $(".s6").css("width", percent6);
    $(".s7").css("width", percent7);
    $(".s8").css("width", percent8);
    $(".s9").css("width", percent9);
    $(".s10").css("width", percent10);
    $(".s11").css("width", percent11);
    $(".s12").css("width", percent12);
    $(".s13").css("width", percent13);
    $(".s14").css("width", percent14);
    $(".s15").css("width", percent15);
    $(".s16").css("width", percent16);
    $(".s17").css("width", percent17);
    $(".s18").css("width", percent18);
    $(".s19").css("width", percent19);
    $(".s20").css("width", percent20);
    $(".s21").css("width", percent21);
    $(".s22").css("width", percent22);
    $(".s23").css("width", percent23);
    $(".s24").css("width", percent24);

    var s1cmargin = (viewportwidth - percent1) / 2;
    var s2cmargin = (viewportwidth - percent2) / 2;
    var s3cmargin = (viewportwidth - percent3) / 2;
    var s4cmargin = (viewportwidth - percent4) / 2;
    var s5cmargin = (viewportwidth - percent5) / 2;
    var s6cmargin = (viewportwidth - percent6) / 2;
    var s7cmargin = (viewportwidth - percent7) / 2;
    var s8cmargin = (viewportwidth - percent8) / 2;
    var s9cmargin = (viewportwidth - percent9) / 2;
    var s10cmargin = (viewportwidth - percent10) / 2;
    var s11cmargin = (viewportwidth - percent11) / 2;
    var s12cmargin = (viewportwidth - percent12) / 2;
    var s13cmargin = (viewportwidth - percent13) / 2;
    var s14cmargin = (viewportwidth - percent14) / 2;
    var s15cmargin = (viewportwidth - percent15) / 2;
    var s16cmargin = (viewportwidth - percent16) / 2;
    var s17cmargin = (viewportwidth - percent17) / 2;
    var s18cmargin = (viewportwidth - percent18) / 2;
    var s19cmargin = (viewportwidth - percent19) / 2;
    var s20cmargin = (viewportwidth - percent20) / 2;
    var s21cmargin = (viewportwidth - percent21) / 2;
    var s22cmargin = (viewportwidth - percent22) / 2;
    var s23cmargin = (viewportwidth - percent23) / 2;
    var s24cmargin = (viewportwidth - percent24) / 2;

    $(".s0c").css({
      "width": 0
    });
    $(".s1c").css({
      "width": percent1,
      "margin-right": s1cmargin,
      "margin-left": s1cmargin
    });
    $(".s2c").css({
      "width": percent2,
      "margin-right": s2cmargin,
      "margin-left": s2cmargin
    });
    $(".s3c").css({
      "width": percent3,
      "margin-right": s3cmargin,
      "margin-left": s3cmargin
    });
    $(".s4c").css({
      "width": percent4,
      "margin-right": s4cmargin,
      "margin-left": s4cmargin
    });
    $(".s5c").css({
      "width": percent5,
      "margin-right": s5cmargin,
      "margin-left": s5cmargin
    });
    $(".s6c").css({
      "width": percent6,
      "margin-right": s6cmargin,
      "margin-left": s6cmargin
    });
    $(".s7c").css({
      "width": percent7,
      "margin-right": s7cmargin,
      "margin-left": s7cmargin
    });
    $(".s8c").css({
      "width": percent8,
      "margin-right": s8cmargin,
      "margin-left": s8cmargin
    });
    $(".s9c").css({
      "width": percent9,
      "margin-right": s9cmargin,
      "margin-left": s9cmargin
    });
    $(".s10c").css({
      "width": percent10,
      "margin-right": s10cmargin,
      "margin-left": s10cmargin
    });
    $(".s11c").css({
      "width": percent11,
      "margin-right": s11cmargin,
      "margin-left": s11cmargin
    });
    $(".s12c").css({
      "width": percent12,
      "margin-right": s12cmargin,
      "margin-left": s12cmargin
    });
    $(".s13c").css({
      "width": percent13,
      "margin-right": s13cmargin,
      "margin-left": s13cmargin
    });
    $(".s14c").css({
      "width": percent14,
      "margin-right": s14cmargin,
      "margin-left": s14cmargin
    });
    $(".s15c").css({
      "width": percent15,
      "margin-right": s15cmargin,
      "margin-left": s15cmargin
    });
    $(".s16c").css({
      "width": percent16,
      "margin-right": s16cmargin,
      "margin-left": s16cmargin
    });
    $(".s17c").css({
      "width": percent17,
      "margin-right": s17cmargin,
      "margin-left": s17cmargin
    });
    $(".s18c").css({
      "width": percent18,
      "margin-right": s18cmargin,
      "margin-left": s18cmargin
    });
    $(".s19c").css({
      "width": percent19,
      "margin-right": s19cmargin,
      "margin-left": s19cmargin
    });
    $(".s20c").css({
      "width": percent20,
      "margin-right": s20cmargin,
      "margin-left": s20cmargin
    });
    $(".s21c").css({
      "width": percent21,
      "margin-right": s21cmargin,
      "margin-left": s21cmargin
    });
    $(".s22c").css({
      "width": percent22,
      "margin-right": s22cmargin,
      "margin-left": s22cmargin
    });
    $(".s23c").css({
      "width": percent23,
      "margin-right": s23cmargin,
      "margin-left": s23cmargin
    });
    $(".s24c").css({
      "width": percent24,
      "margin-right": s24cmargin,
      "margin-left": s24cmargin
    });
  }
};
