(function($) {
  "use strict"; // Start of use strict

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

  // 스크롤 일정 이상 내려갔을 때만 맨 위로 버튼 표시
  $(window).scroll(function() {
    if ($(this).scrollTop() > 400) {
      $('#scrollTopBtn').addClass('visible');
    } else {
      $('#scrollTopBtn').removeClass('visible');
    }
  });

})(jQuery); // End of use strict
