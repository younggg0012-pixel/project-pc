

   var smh=$('.visual').height();  //비주얼 이미지의 높이를 리턴한다   900px
   var on_off=false;  //false(안오버)  true(오버)
   
       $('#headerArea').mouseenter(function(){
          // var scroll = $(window).scrollTop();
           $(this).css('background','#fff');
           //$('.dropdownmenu li .depth1').css('color','#333'); 
            //헤더영역의 텍스트 색상과 로고이미지 경로 등을 교체
           on_off=true;
       });
   
      $('#headerArea').mouseleave(function(){
           var scroll = $(window).scrollTop();  //스크롤의 거리
           
           if(scroll<smh-102 ){ //헤더가 비주얼 위에 있을 때(비주얼높이-원래헤더)
               $(this).css('background','rgba(255,255,255,.8)').css('border-bottom','none'); 
               //$('.dropdownmenu li .depth1').css('color','#fff');
           }else{ //헤더가 비주얼 아래에 있을 때
               $(this).css('background','#fff'); 
               $('.dropdownmenu li .depth1').css('color','#333');
           }
          on_off=false;    
      });

      var visual_height = $('.visual').height();
   
      $(window).on('scroll',function(){//스크롤의 거리가 발생하면
           var scroll = $(window).scrollTop();  
           //스크롤의 거리를 리턴하는 함수
           //console.log(scroll);

           if(scroll>smh-102){//스크롤이 비주얼의 높이-header높이 까지 내리면
               $('#headerArea').css('background','#fff').css('border-bottom','1px solid #ccc');
               //$('.dropdownmenu li .depth1').css('color','#333');
           }else{//스크롤 내리기 전 디폴트(마우스올리지않음)
              if(on_off==false){
                   $('#headerArea').css('background','rgba(255,255,255,.8)').css('border-bottom','none');
                   //$('.dropdownmenu li .depth1').css('color','#fff');
              }
           }; 

           //상단이동 버튼 처리 
            if(scroll>visual_height){ //700이상의 거리가 발생되면
                      $('.top_move').fadeIn('slow');  //top보여라~~~~
                  }else{
                      $('.top_move').fadeOut('fast');//top안보여라~~~~
                  }
           
        });



  
    //2depth 열기/닫기
    $('ul.dropdownmenu').hover(
       function() { 
          $('.dropdownmenu .menu ul').fadeIn('normal',function(){$(this).stop();}); //모든 서브를 다 열어라
          $('#headerArea').animate({height:292},'fast').clearQueue();
       },function() {
          $('.dropdownmenu .menu ul').hide(); //모든 서브를 다 닫아라
          $('#headerArea').animate({height:101},'fast').clearQueue();
     });
    
     //1depth 효과
     $('.dropdownmenu .menu').hover(
       function() { 
           $('.depth1',this).css('color','red');
           $('.depth1',this).addClass('active');
       },function() {
          $('.depth1',this).css('color','#333');
          $('.depth1',this).removeClass('active');
     });
     

     //tab 처리
     $('.dropdownmenu .menu .depth1').on('focus', function () {        
        $('.dropdownmenu .menu ul').slideDown('normal');
        $('#headerArea').animate({height:292},'fast').clearQueue();
     });

    $('.dropdownmenu .m6 li:last').find('a').on('blur', function () {        
        $('.dropdownmenu .menu ul').slideUp('fast');
        $('#headerArea').animate({height:101},'normal').clearQueue();
    });

    //TOP버튼 클릭 시 상단으로 부드럽게 이동
    $('.top_move').click(function(e){
                 e.preventDefault();
                  //상단으로 스르륵 이동합니다.
                 $("html,body").stop().animate({"scrollTop":0},1000); //스크롤을 부드럽게 목표지점까지 이동시키는 코드
    });

    



  

