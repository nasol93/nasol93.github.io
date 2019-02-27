$(function(){
	//변수선언
	var index=0;//0이라는 값을 index에 저장
		var imgs=$('#main img');
		var btns=$('#btn a');
		var imgCount=$(imgs).size();

	imgs.hide();//이미지들을 모두 숨김
		$(imgs[index]).show();
		//$('#main img:first').show()
		//$(#main img[0]).show(), 변수명을 선택자로 쓸때는 ''를 붙이지 않음
		$(btns[index]).addClass('select');

		btns.on('click',function(){
				index=$(this).attr('id');//내가 클릭한 a태그의 아이디를 가져와서 index에 저장해라
				imgs.fadeOut(1000);
				btns.removeClass('select');
				$(imgs[index]).fadeIn(1000);//이때의 인덱스는 내가 클릭한 a태그의 id값
				$(btns[index]).addClass('select');
				return false;

		});//버튼 클릭 함수

		//자동실행 함수
		//setInterval(function(){실행문},실행시간)
		setInterval(function(){
		imgs.fadeOut(1000);            
		btns.removeClass('select');
		//0-->1-->2-->0-->1-->2

		//이미지갯수(1,2,3)==index0,1,2
			if ((imgCount-1)==index) {
			index=0;//인덱스가 2를 초과하면 안되므로 인덱스가 2일때 {인덱스를 0으로 해라 } 안을 실행해라
			} else{//그렇지 않다면( 인덱스가 0,1이면)
					index=index+1
			}
			$(imgs[index]).fadeIn(3000);
			$(btns[index]).addClass('select');
	},5000);
});

$(function(){//1
   $('#s_menu').hide();
   $('.main_menu').hover(function(){//2
   		$(this).parent().find('#s_menu').slideDown(); 
   		$(this).parent().hover(function(){//서브가 슬라이드 다운된 상태를 유지하고 있게 함.{}안에 아무것도 안써줘도 slideDown상태    

   		},function(){//마우스가 아웃되면 
		$(this).parent().find('#s_menu').slideUp();
   		}) 		
   });//2
});//1

