(function($) {
  "use strict"; // Start of use strict
  // 깃허브 아이콘 설정
  $("#githubIcon").mouseover(function(){
    $(this).css("bottom","5.3%");
  });
  $("#githubIcon").mouseout(function(){
    $(this).css("position","fixed");
    $(this).css("bottom","5%");
    $(this).css("right","3%");
  });


  //이니스트에서 일한기간 설정
  var tody = new Date();
  var year = tody.getFullYear();   // 연도
  var month = tody.getMonth()+1;   // 월    
  var day = tody.getDate();        // 일
  var now = new Date(year, month, day);
  var dayTxt = "개월";

  var doe = new Date("2023-01-25");

  var calcul = now.getTime() - doe.getTime() ;
  var period = calcul / (1000*60*60*24*30);

  if(period>=12){
    period = calcul / (1000*60*60*24*30*12);
    dayTxt = "년";
  }
  $("#myPeriod").text(Math.ceil(period)+dayTxt);


  //로고 gif 설정
  $(document).ready(function() {
    var gifImage = $('#myLogo');
    var delay = 5000; // 5초의 지연 시간 설정
    var originalSrc = gifImage.attr('src');
    var modifiedSrc = 'img/myLogo_gif.gif'; // 수정된 GIF 파일 경로

    function playModifiedGif() {
      gifImage.attr('src', modifiedSrc); // 수정된 GIF 파일로 변경

      setTimeout(function() {
        gifImage.attr('src', originalSrc); // 원래 GIF 파일로 변경
      }, delay);
    }
    setInterval(playModifiedGif, delay * 2); // 재생과 지연을 2배로 반복
  });

})(jQuery); // End of use strict
