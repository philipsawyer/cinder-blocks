// used to set maximum for medium and minimum for large
// defualt is 1024
var largethreshhold = 1024;

// used to set maximum for small and minimum for medium
// defualt is 640
var mediumthreshhold = 640;

// runs everything ("resizeview") when the window size changes
$(window).resize(function() {
  resizeview();
});

// runs everything ("resizeview") the page loads
$(window).ready(function() {
  resizeview();
});

// main function (does everything-ish)
function resizeview() {

  // resizes elements to fit in columns
  $( "p, h1, h2, h3, h4, h5, h6, ul, li, ol, table, input, a, form" ).css({ "word-wrap": "break-word"});
  $( "img" ).css({ "width": "100%"});
  $( "body" ).css({ "margin": "0"});

  // removes / hides elements with block of "0"
  $( ".l0, .m0, .s0, .l0c, .m0c, .s0c" ).css({ "display": "none" });

  // removes centered margin on everything except centered items - shifts elements to the left so they will reflow to the line above - makes non "0" blocks visible
  $( ".l1, .l2, .l3, .l4, .l5, .l6, .l7, .l8, .l9, .l10, .l11, .l12, .l13, .l14, .l15, .l16, .l17, .l18, .l19, .l20, .l21, .l22, .l23, .l24, .m1, .m2, .m3, .m4, .m5, .m6, .m7, .m8, .m9, .m10, .m11, .m12, .m13, .m14, .m15, .m16, .m17, .m18, .m19, .m20, .m21, .m22, .m23, .m24, .s1, .s2, .s3, .s4, .s5, .s6, .s7, .s8, .s9, .s10, .s11, .s12, .s13, .s14, .s15, .s16, .s17, .s18, .s19, .s20, .s21, .s22, .s23, .s24, .m1, .m2, .m3, .m4, .m5, .m6, .m7, .m8, .m9, .m10, .m11, .m12, .m13, .m14, .m15, .m16, .m17, .m18, .m19, .m20, .m21, .m22, .m23, .m24, .s1, .s2, .s3, .s4, .s5, .s6, .s7, .s8, .s9, .s10, .s11, .s12, .s13, .s14, .s15, .s16, .s17, .s18, .s19, .s20, .s21, .s22, .s23, .s24" ).css({ "margin-left": "0em", "margin-right": "0em", "float": "left",  "display": "initial"});

  // gets the width of the viewport
  var viewportwidth = $(window).width();

  // divides viewportwidth into a 24 collumn grid
  var dividedviewportwidth = viewportwidth / 24;

  var percents = [];

  for(i = 0; i < 24; i++) {
    percents.push(dividedviewportwidth * (i + 1));
  }

  // multiplies 1 column * the number to the right
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

  // large - everything is described in here with comments
  if (viewportwidth >= largethreshhold) {

    $(".l0").css("width", 0);

    for (i = 0; i < 24; i++) {
      var element = ".l" + (i + 1);
      $(element).css("width", percents[i]);
    }


    // for centered elements - takes viewportwidth and subtracts however much the element is, then divides by 2 to get right and left margins

    var margins = [];

    for (i = 0; i < 25; i++) {
      var value = viewportwidth - percents[i] / 2;
      margins.push(value);
    }

    // sets margins according to variable above
    $(".l0c").css({
      "width": 0,
      "opacity": 0,
      "visibility": "none"
    });

    for (i = 0; i < 24; i++) {
      var element = ".l" + (i + 1) + "c";
      $(element).css({
        "width": percents[i],
        "margin-right": margins[i],
        "margin-left": margins[i]
      });
    }
  }

  // medium
  if (largethreshhold > viewportwidth && viewportwidth >= mediumthreshhold) {
    
    $(".m0").css("width", 0);
    for (i = 0; i < 24; i++) {
      var element = ".m" + (i + 1);
      $(element).css("width", percents[i]);
    }

    var margins = [];
    for (i = 0; i < 25; i++) {
      var value = (viewportwidth - percents[i]) / 2;
      margins.push(value);
    }

    $(".m0c").css({
      "width": 0
    });
    for (i = 0; i < 24; i++) {
      var element = ".m" + (i + 1) + "c";
      $(element).css({
        "width": percents[i],
        "margin-right": margins[i],
        "margin-left": margins[i]
      });
    }
  }

  //small
  if (mediumthreshhold > viewportwidth) {

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
