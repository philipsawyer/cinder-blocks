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

  // large - everything is described in here with comments
  if (viewportwidth >= largethreshhold) {

    $(".l0").css("width", 0);
    for (i = 0; i < 24; i++) {
      var element = ".l" + (i + 1);
      $(element).css("width", percents[i]);
    }

    // sets margins according to variable above
    $(".l0c").css({
      "width": 0,
      "opacity": 0,
      "visibility": "none"
    });
    for (i = 0; i < 24; i++) {
      var element = ".l" + (i + 1) + "c";
      var margin = (viewportwidth - percents[i]) / 2;
      $(element).css({
        "width": percents[i],
        "margin-right": margin,
        "margin-left": margin
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

    $(".m0c").css({
      "width": 0
    });
    for (i = 0; i < 24; i++) {
      var element = ".m" + (i + 1) + "c";
      var margin = (viewportwidth - percents[i]) / 2;
      $(element).css({
        "width": percents[i],
        "margin-right": margin,
        "margin-left": margin
      });
    }
  }

  //small
  if (mediumthreshhold > viewportwidth) {

    $(".s0").css("width", 0);
    for (i = 0; i < 24; i++) {
      var element = ".s" + (i + 1);
      $(element).css("width", percents[i]);
    }
    
    $(".s0c").css({
      "width": 0
    });
    for (i = 0; i < 24; i++) {
      var element = ".s" + (i + 1) + "c";
      var margin = (viewportwidth - percents[i]) / 2;
      $(element).css({
        "width": percents[i],
        "margin-right": margin,
        "margin-left": margin
      });
    }
  }
};
