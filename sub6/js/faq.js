// JavaScript Document
	var article = $('.faq li');  //모든 질문 답변 리스트
	//article.find('.a').slideUp(100); // 모든 답변 닫아라
    article.find('span').html('<i class="fas fa-chevron-down"></i>'); //모든 li의 질문에 아래방향의 아이콘 삽입
    //$('.faq .article:first').find('.a').slideDown(100); //첫번째 li의 답변만 열어라
    //$('.faq .article:first').find('span').html('<i class="fas fa-chevron-up"></i>'); //첫번째 li의 질문에 위방향의 아이콘 변경
	
$('.faq .article .trigger').click(function(e){  // 각각의 질문을 클릭하면
	   e.preventDefault();  //<a href="#"> 태그 링크 처리
        var myArticle = $(this).parents('.article'); //클릭한 해당 list 
	
        if(myArticle.hasClass('hide')){   //클릭한 해당 리스트의 상태가 hide냐?? 답변이 닫혀있냐??
            article.find('.a').slideUp(100); //모든 답변을 닫아라
            article.removeClass('show').addClass('hide'); // 모든 리스트를 hide교체
            article.find('span').html('<i class="fas fa-chevron-down"></i>');

            myArticle.removeClass('hide').addClass('show');  // show로 바꾼다 
            myArticle.find('.a').slideDown(100);  //해당 리스트의 답변을 열어라  
            myArticle.find('span').html('<i class="fas fa-chevron-up"></i>');
        } else {  // 'show' 답변이 열려있냐??
            myArticle.removeClass('show').addClass('hide');  // hide로 바꾼다 
            myArticle.find('.a').slideUp(100);  //해당 리스트의 답변을 닫아라  
            myArticle.find('span').html('<i class="fas fa-chevron-down"></i>');
        }  
});
  
//모두 여닫기 처리
$('.all').toggle(function(e){ //홀수번째 클릭 시 - 모두 열기
        e.preventDefault(); 
        article.find('.a').slideDown(100); //모든 답변을 열어라 
        article.removeClass('hide').addClass('show'); //show 클래스 변경
        article.find('span').html('<i class="fas fa-chevron-up"></i>'); //위쪽 방향 아이콘 변경
        $(this).text('모두닫기 ▲');
        },function(e){ //짝수번째 클릭 시 - 모두 닫기 
        e.preventDefault(); 
        article.find('.a').slideUp(100); //모든 답변을 닫아라 
        article.removeClass('show').addClass('hide'); //hide 클래스 변경
        article.find('span').html('<i class="fas fa-chevron-down"></i>'); //아래쪽 방향 아이콘 변경
        $(this).text('모두열기 ▼');
});


//카테고리 검색

$('.faq_category li a').click(function(e){
      e.preventDefault(); 
      var ind = $(this).index('.faq_category li a');  // 0 1 2 3

      $('.faq_content li').hide();
      $('.faq_content li').removeClass('show').addClass('hide');
      $('.faq_content li .a').slideUp(100);
      $('.faq_category li a').removeClass('active');
      $(this).addClass('active');

      if(ind==0){  //전체보기를 클릭하면
           $('.faq_content li').show();
      }else if(ind==1){  //의약품을 클릭하면
           $('.faq_content .pro1').show();
      }else if(ind==2){  //비타민을 클릭하면
           $('.faq_content .pro2').show();
      }else if(ind==3){  //기타를 클릭하면
           $('.faq_content .pro3').show();
      }

});