$(document).ready(function(){
        
    //    회원가입 개인정보 동의 ------------------------------------
    
    $('.check_agree').on('click',check_agree); //회원가입 동의하기 버튼을 클릭하면
    
    function check_agree(e){ 
        e.preventDefault();
                                                    //  .length => 자바스크립트 / .size(); => 제이쿼리
        var checkboxLength=$('input[type="checkbox"]').length;  // 체크박스의 총개수
			            // 체크박스의 총개수
        var checkedLength=$('input[type="checkbox"]:checked').length;   //체크가 되어있는 체그박스 개
         //console.log(checkboxLength,$('input[type="checkbox"]:checked').length)
        
        if(checkboxLength != checkedLength){ //모든 체크박스가 체크되지 않았으면,
            alert("수집하는 개인정보 항목에 모두 동의해야 가입하실 수 있습니다.");
        }else{  //모드 체크 되었다면
            location.href="./join.html";   //회원가입 폼 입력 페이지로 이동
        }
    }

       //모두 체크/해제
    $('.allcheck').toggle(function(e){ //홀수번째 클릭 시 - 모두체크
        e.preventDefault();
        $('input[type="checkbox"]').attr('checked',true);   //체크
    },function(e){ //짝수번째 클릭 시 - 모두체크해제
        e.preventDefault();
        $('input[type="checkbox"]').attr('checked',false);   //해제
    });    

   });



















