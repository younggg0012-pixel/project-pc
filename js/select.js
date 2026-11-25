
$(document).ready(function() {
   	
	// $('.select .arrow').click(function(){
	// 	$('.select .aList').fadeIn('slow');			  
	// });

	// $('.select .aList').mouseleave(function(){
	// 	$(this).fadeOut('fast');			  
	// });
  
	$('.select .arrow').toggle(function(){ //홀수번째 클릭 시
		$('.select .aList').fadeIn('slow');	
		$(this).children('span').html('<i class="fa-solid fa-chevron-down"></i>');	
	},function(){ //짝수번째 클릭시
        $('.select .aList').fadeOut('fast');	
		$(this).children('span').html('<i class="fa-solid fa-chevron-up"></i>');	
	});

	//tab키 처리
	  $('.select .arrow').on('focus', function () { //arrpw <a>태그가 포커스를 받으면
              $('.select .aList').fadeIn('slow');  //리스트를 열어라
			  $(this).children('span').html('<i class="fa-solid fa-chevron-down"></i>');	
       });
       $('.select .aList li:last a').on('blur', function () {   //가장 마지막에 있는 리스트 메뉴<a>가 포커스를 잃으면
              $('.select .aList').fadeOut('fast'); //메뉴를 닫아라.
			  $('.select .arrow span').html('<i class="fa-solid fa-chevron-up"></i>'); 
       });

});

