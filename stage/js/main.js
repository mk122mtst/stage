$(function() {
    //スクロール
    $('a[href^=#]').click(function() {
   	  // スクロールの速度
   	  var speed = 400; // ミリ秒
      //メニューのサイズ取得
      var topHeight = 60;
      if (matchMedia('only screen and (max-width: 700px)').matches) {
        topHeight = 0;
      }

   	  // アンカーの値取得
   	  var href= jQuery(this).attr("href");
   	  // 移動先を取得
   	  var target = jQuery(href == "#" || href == "" ? 'html' : href);
   	  // 移動先を数値で取得
   	  var position = target.offset().top - topHeight;

  	  // スムーススクロール
  	  jQuery('body,html').animate({scrollTop:position}, speed, 'swing');
  	  return false;
   });


   　//メニューボタンの動き
    $('#toggle').click(function() {
        $('.menu').toggleClass('active');
        $('.toggle').toggleClass('act');

        if ($('.menu').hasClass('active')) {
            $('.menu').addClass('active');
            $('.toggle').removeClass('act');
        } else {
            $('.menu').removeClass('active');
            $('.toggle').addClass('act');
        }
        $('#menu_box a[href]').on('click', function(event) {
            $('.menu').addClass('active');
            $('.toggle').removeClass('act');
        });
    });

    $(".accordion").click(function(){
      $(this).next("ul").slideToggle();
      $(this).toggleClass("close");
    });

});
