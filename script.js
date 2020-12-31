function timeLeft(endtime){
    
    var t = Date.parse(endtime) - Date.parse(new Date());//date.parse指的是日期時間字串轉成一個數字，這數字表示從 1970-01-01 00:00:00 UTC (格林威治標準時間) 開始累計到現在的毫秒數 (milliseconds)
    var seconds = Math.floor( (t/1000) % 60 );
    var minutes = Math.floor( (t/1000/60) % 60 );
    var hours = Math.floor( (t/(1000*60*60)) % 24 );
    var days = Math.floor( t/(1000*60*60*24) );
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  };
  
  $(document).ready(function() {
    var today = new Date();
    var deadline = 'January 1 ' + (today.getFullYear() + 1) + " 00:00:00";//設定終點時間 1/1 ２０２１ 00：00

    if (today.getMonth() == 0 && today.getDate() == 1) {
      deadline = 'January 1 ' + (today.getFullYear()) + " 00:00:00";
    };
    
    $("#header").hover(function() {
      $(this).toggleClass('blueshadow');
    });
    
    $(".clock").hover(function() {
      $(this).toggleClass('blueshadow');
    });
    
    var setClock = function(newyear){
        
      var timeinterval = setInterval(function(){
        var t = timeLeft(newyear);
        $('#days').text(t.days);
        $('#hours').text(t.hours);
        $('#mins').text(('0' + t.minutes).slice(-2)); //因為上面是取floor 所以有小數，用slice 取得整數位
        $('#secs').text(('0' + t.seconds).slice(-2));
        if(t.total<=0){
          clearInterval(timeinterval);
          var now = new Date();
          var yearStr = now.getFullYear().toString();
          $('#header').text("Happy New Year!!!");
          $('#days').text(yearStr[0]);
          $('#days-text').text("Happy");
          $('#hours').text(yearStr[1]);
          $('#hours-text').text("New");
          $('#mins').text(yearStr[2]);
          $('#mins-text').text("Year");
          $('#secs').text(yearStr[3]);
          $('#secs-text').text("!!!");
          $('#info').text("Countdown starts again Next Year!");
        }
      },1000);
    };
    
    setClock(deadline);
    
  });