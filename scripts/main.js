var totalWidth = 0;
$('.slider-item').each(function(index) {
    totalWidth += parseInt($(this).outerWidth(true), 10);
});
$('.slider-win').width(totalWidth);
$('#sl-next').on('click', function(){
  var $this = $(this),
      $slider = $this.closest('.slider'),
      $sliderWin = $slider.find('.slider-win'),
      item = $sliderWin.find('.slider-item'),
      pos = item.outerWidth(true);
  if($sliderWin.css('margin-left') <= '-1000px'){
    $sliderWin.animate(
      {'margin-left': '40px'},
      1000
    );
  } else {
    $sliderWin.animate(
      {'margin-left': '-='+pos},
      1000
    );
  }
});
$('#sl-prev').on('click', function(){
  var $this = $(this),
      $slider = $this.closest('.slider'),
      $sliderWin = $slider.find('.slider-win'),
      item = $sliderWin.find('.slider-item'),
      pos = item.outerWidth(true),
      posX = $sliderWin.offset().left;
    if(posX <= 0){
      $sliderWin.animate(
        {'margin-left': '+='+pos},
        1000
      );
    } else {
      $sliderWin.animate(
        {'margin-left': '40px'},
        1000
      );
    }
});
