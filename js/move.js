// JavaScript Document



    var timeonoff;   //타이머 처리  홍길동 정보
    var imageCount=$('.gallery ul li').size();   //이미지 총개수 5
    var cnt=1;   //이미지 순서 1 2 3 4 5 1 2 3 4 5....(주인공!!=>현재 이미지 순서)
    var onoff=true; // true=>타이머 동작중 , false=>동작하지 않을때
    
    $('.btn1').css('background','#f00'); //첫번째 불켜
    $('.btn1').css('width','30px'); // 버튼의 너비 증가
    
    $('.gallery .link1').fadeIn('slow'); //첫번째 이미지 보인다..
    $('.gallery .link1 p').delay(1500).animate({top:200, opacity:1},'slow'); //텍스트 애니메이션 동작
 
    function moveg(){ //5초마다 호출되는 함수
      if(cnt==imageCount+1)cnt=1;
      if(cnt==imageCount)cnt=0;  //카운트 초기화 0 - 1 2 3 4 5 6 7 

      cnt++;  //카운트 1씩 증가.. 5가되면 다시 초기화 0  1 2 3 4 5 1 2 3 4 5..
     
    //  for(var i=1;i<=imageCount;i++){
    //         $('.gallery .link'+i).hide(); //모든 이미지를 보이지 않게.
    //  }
    
    $('.gallery li').fadeOut('slow'); //모든 이미지 안보인다.
    $('.gallery .link'+cnt).fadeIn('slow'); //자신만 이미지가 보인다..
	 	//$('.gallery li:eq('+(cnt-1)+')').fadeIn('slow');
    
    //  for(var i=1;i<=imageCount;i++){
    //       $('.btn'+i).css('background','#00f'); //버튼불다꺼!!
    //      $('.btn'+i).css('width','16'); // 버튼 원래의 너비
    //   }
      
      $('.mbutton').css('background','#fff'); //버튼불다꺼!!
      $('.mbutton').css('width','16px'); // 버튼 원래의 너비
      $('.btn'+cnt).css('background','#f00');//자신만 불켜
      $('.btn'+cnt).css('width','30px');    

      $('.gallery li p').css('top',350).css('opacity',0); //갤ㄹ러리의 텍스트 위치 초기화
      $('.gallery .link'+cnt).find('p').delay(1500).animate({top:200, opacity:1},'slow'); //해당 이미지의 텍스트 동작

       if(cnt==imageCount)cnt=0;  //카운트의 초기화 0
     }
     
    timeonoff= setInterval( moveg , 5000);// 타이머를 동작 1~5이미지를 순서대로 자동 처리
      //var 변수 = setInterval( function(){처리코드} , 4000);  //홍길동의 정보를 담아놓는다
      //clearInterval(변수); -> 살인마/사이코패스/살인청부업자


   $('.mbutton').click(function(){  //각각의 버튼 클릭시
       clearInterval(timeonoff); //타이머 중지     
	 
	    //  for(var i=1;i<=imageCount;i++){
	    //      $('.gallery .link'+i).hide(); //모든 이미지 안보인다.
      //    } 
	    $('.gallery li').fadeOut('slow'); //모든 이미지 안보인다.

		  if($(this).is('.btn1')){  //첫번째 버튼 클릭??
				 cnt=1;  //클릭한 해당 카운트를 담아놓는다
		  }else if($(this).is('.btn2')){  //두번째 버튼 클릭??
				 cnt=2; 
		  }else if($(this).is('.btn3')){ 
				 cnt=3; 
		  }else if($(this).is('.btn4')){
				 cnt=4; 
		  }else if($(this).is('.btn5')){
				 cnt=5; 
		  } 

		  $('.gallery .link'+cnt).fadeIn('slow');  //자기 자신만 이미지가 보인다
		  
		  // for(var i=1;i<=imageCount;i++){
			//   $('.btn'+i).css('background','#00f'); //버튼 모두불꺼
      // $('.btn'+i).css('width','16');
		  // }
      $('.mbutton').css('background','#fff'); //버튼 모두불꺼
      $('.mbutton').css('width','16px');
      $('.btn'+cnt).css('background','#f00');//자신 버튼만 불켜 
      $('.btn'+cnt).css('width','30px');
      
      $('.gallery li p').css('top',350).css('opacity',0); //모든 텍스트를 원위치
      $('.gallery .link'+cnt).find('p').delay(1500).animate({top:200, opacity:1},'slow'); //현재 카운드에 맞는 이미지의 텍스트만 동작

      if(cnt==imageCount)cnt=0;  //카운트 초기화
     
      timeonoff= setInterval( moveg , 5000); //타이머의 부활!!!
     
      if(onoff==false){ //중지상태냐??
            onoff=true; //동작~~
            $('.ps').html('<span class="hidden">stop</span><i class="fa-regular fa-circle-stop"></i>');
      }
      
    });

	 //stop/play 버튼 클릭시 타이머 동작/중지
  $('.ps').click(function(){ 
     if(onoff==true){ // 타이머가 동작 중이냐??
	       clearInterval(timeonoff);   //살인마 고용 stop버튼 클릭시
		     $(this).html('<span class="hidden">play</span><i class="fa-regular fa-circle-play"></i>'); //js파일에서는 경로의 기준이 html파일이 기준!!
         onoff=false;   //멈춤상태
	   }else{  // false 타이머가 중지 상태냐??
		   timeonoff= setInterval( moveg , 5000); //play버튼 클릭시  부활
		   $(this).html('<span class="hidden">stop</span><i class="fa-regular fa-circle-stop"></i>');
		   onoff=true; //동작상태
	   }
  });	

    //왼쪽/오른쪽 버튼 처리
    $('.visual .btn').click(function(){ 

      clearInterval(timeonoff); //살인마

      if($(this).is('.btnRight')){ // 오른쪽 버튼 클릭
          if(cnt==imageCount)cnt=0;  //카운트가 마지막 번호(5)라면 초기화 0
          //if(cnt==imageCount+1)cnt=1;  
          cnt++; //카운트 1씩증가
      }else if($(this).is('.btnLeft')){  //왼쪽 버튼 클릭
          if(cnt==1)cnt=imageCount+1;   // 1->6  최초..
          if(cnt==0)cnt=imageCount;
          cnt--; //카운트 감소
      }

    // for(var i=1;i<=imageCount;i++){
    //     $('.gallery .link'+i).hide(); //모든 이미지를 보이지 않게.
    // }
    $('.gallery li').hide(); //모든 이미지를 보이지 않게.
    $('.gallery .link'+cnt).fadeIn('slow'); //자신만 이미지가 보인다..
                        
    $('.mbutton').css('background','#fff'); //버튼 모두불꺼
    $('.mbutton').css('width','16');
    $('.btn'+cnt).css('background','#f00');//자신 버튼만 불켜 
    $('.btn'+cnt).css('width','30px');

    $('.gallery li p').css('top',350).css('opacity',0); //모든 텍스트 초기화
    $('.gallery .link'+cnt).find('p').delay(1500).animate({top:200, opacity:1},'slow'); //현재 이미지의 텍스트만 동작

    // if($(this).is('.btnRight')){
    //   if(cnt==imageCount)cnt=0;
    // }else if($(this).is('.btnLeft')){
    //   if(cnt==1)cnt=imageCount+1;
    // }

    timeonoff= setInterval( moveg , 4000); //부활

    if(onoff==false){
      onoff=true;
      $('.ps').html('<span class="hidden">stop</span><i class="fa-regular fa-circle-stop"></i>');
    }
  });

//브랜드스토리 스와이퍼 기능 


var swiper = new Swiper('.swiper-container', {
        //autoHeight: true, //높이 유동
        loop: true, //무한 스와이퍼
        slidesPerView: 'auto', //단수
        spaceBetween: 20,  //단사이 여백
        //freeMode: true,  //터치 만큼 자유롭게 이동
        centeredSlides: true, //센터 슬라이드 위치(만약 단수가 2개이면 양쪽은 반반씩 보임)
        initialSlide: 2, //최초 보여지는 슬라이드 번호(0~)
        //slidePerGroup: 2, //한번에 슬라이딩될 개수,
        //effect: 'fade', //페이드효과 (단수가 1단이 된다)
        //effect: 'flip',  //3D 회전효과(단수가 1단이 된다)

        // navigation: {    //이전/다음 버튼
        // nextEl: '.swiper-button-next',
        // prevEl: '.swiper-button-prev',
        // },
        pagination: {   //페이지 네이션
        el: '.swiper-pagination',
        dynamicBullets: false,
        clickable: true,
        },
        //type: 'fraction'   //  현재/총개수 (페이지네이션블릿은 사라진다)
    //   }, scrollbar: {  //하단 스크롤바
    //     el: '.swiper-scrollbar',
    //     hide: true
    // //   },  autoplay: {  //자동
    // //     delay: 3000,
    // //     disableOnInteraction: false
    // //   }
     });


//company 회사소개 클릭 시 이미지 교체

$('.company ul li a').click(function(e){
  e.preventDefault();

  var ind = $(this).index('.company ul li a');  // 0 1 2 3 4
  $('.company .mainphoto img').attr('src','./images/companysmall_0'+(ind+1)+'.jpg')
  $('.company .mainphoto').hide().fadeIn('fast');
});
