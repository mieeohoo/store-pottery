'use strict';

$(function(){
  // ハンバーガーメニューの動き
  // クリックイベント
  $('.toggle_btn').on('click', function(){
    if($('#header').hasClass('open')){
      $('#header').removeClass('open');
    } else {
      $('#header').addClass('open');
    }
  });

  $('#mask').on('click', function(){
    $('#header').removeClass('open');
  });

});


