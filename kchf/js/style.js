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
		imgs.fadeOut(2000);
		btns.removeClass('select');
		//0-->1-->2-->0-->1-->2

		//이미지갯수(1,2,3)==index0,1,2
			if ((imgCount-1)==index) {
			index=0;//인덱스가 2를 초과하면 안되므로 인덱스가 2일때 {인덱스를 0으로 해라 } 안을 실행해라
			} else{//그렇지 않다면( 인덱스가 0,1이면)
					index=index+1
			}
			$(imgs[index]).fadeIn(1000);
			$(btns[index]).addClass('select');
	},5000);
});

// 현재 index==0(첫번째 이미지 )
//index=index+1;-->1=0+1
//$(imgs[1]).fadexIn(1000);두번째 이미지가 밝아져라
//$(btns[1]).addClass('select');두번째 버튼은 배경색 빨강으로 클래슬 추가해라


$(function(){
	$('.sub').hide();
    /*$('.menu li').on('mouseover',function(){
        $('.sub',this).slideDown('slow');//아래로 내려오는 동작,즉 보이게 함
        
    }).on('mouseout',function(){
       $('.sub',this).slideUp('fast');//위로 올라가서 안보이게  
    })*/
    
    $('.menu li').hover(function(){//mouseover
        $('ul',this).slideDown('slow');//내가 지금 오버한 ul 밑에 있는 li
    },function(){//mouseout
        $('ul',this).slideUp('slow')
    });
    
});

$(function () {
	$('.list div').hide();
	$('.list div:first').show();

	$('.list2').on('click',function(){//두번째 탭메뉴를 클릭하면 
			$(this).attr('src','.list2_1');//tab_menu2_over.png이미지로 바껴라 
			$('.list1').attr('src','.list1_1');//첫번째 탭 메뉴는 회색배경이 있는 tab_menu1.png이미지로 바껴라 
			$('.list3').attr('src','.list3_1');//세번째 탭 메뉴는 회색배경이 있는 tab_menu3.png이미지로 바껴라
            $('.list4').attr('src','.list4_1');

			$('.list div').css('display','none');//모든 내용탭들이 숨겨지게 처리 
			$('#list2').css('display','block');//두번째  내용탭만 보여라(바껴라)
        return false;
	});
	
//.hide();  -->.css('display','none')
//.show();  -->.css('display','block');

	$('.list3').on('click',function(){//세번째 탭을 클릭하면 
		$(this).attr('src','.list3_1');//tab_menu3_over.png이미지로 바껴라 
			$('.list1').attr('src','.list1_1');//첫번째 탭 메뉴는 회색배경이 있는 tab_menu1.png이미지로 바껴라 
			$('.list2').attr('src','.list2_1');//두번째 탭 메뉴는 회색배경이 있는 tab_menu3.png이미지로 바껴라 
            $('.list4').attr('src','.list4_1');

			$('.list > div').css('display','none');//모든 내용탭들이 숨겨지게 처리 
			$('#list3').css('display','block');//세번째  내용탭만 보여라(바껴라)
        return false;
	});
	$('.list4').on('click',function(){
		$(this).attr('src','.lst4_1');//tab_menu1_over.png이미지로 바껴라 
			$('.list3').attr('src','.list3_1');//세번째 탭 메뉴는 회색배경이 있는 tab_menu1.png이미지로 바껴라 
			$('.list2').attr('src','.list2_1');//두번째 탭 메뉴는 회색배경이 있는 tab_menu3.png이미지로 바껴라 
            $('.list1').attr('src','.list1_1');

			$('.list >  div').css('display','none');//모든 내용탭들이 숨겨지게 처리 
			$('#list4').css('display','block');//첫번째  내용탭만 보여라(바껴라)
        return false;
	});
    $('.list1').on('click',function(){
		$(this).attr('src','.lst1_1');//tab_menu1_over.png이미지로 바껴라 
			$('.list4').attr('src','.list4_1');//세번째 탭 메뉴는 회색배경이 있는 tab_menu1.png이미지로 바껴라 
			$('.list3').attr('src','.list3_1');//두번째 탭 메뉴는 회색배경이 있는 tab_menu3.png이미지로 바껴라 
            $('.list2').attr('src','.list2_1');

			$('.list > div').css('display','none');//모든 내용탭들이 숨겨지게 처리 
			$('#list1').css('display','block');//첫번째  내용탭만 보여라(바껴라)
        return false;
	});   
    
});
$(function(){
    $('.btn1')
        .on('mouseover',function(){
        $(this).stop(true).animate({
            backgroundColor:'#99ca3b',
            color: '#fff'
        },500)
    }).on('mouseout',function(){
        $(this).stop(true).animate({
            backgroundColor:'#e1e1e1',
            color: '#000'
        },500)
    });
   $('.btn2')
        .on('mouseover',function(){
        $(this).stop(true).animate({
            backgroundColor:'#f27daa',
            color: '#fff'
        },500)
    }).on('mouseout',function(){
        $(this).stop(true).animate({
            backgroundColor:'#e1e1e1',
            color: '#000'
        },500)
    });
    $('.btn3')
        .on('mouseover',function(){
        $(this).stop(true).animate({
            backgroundColor:'#00acea',
            color: '#fff'
        },500)
    }).on('mouseout',function(){
        $(this).stop(true).animate({
            backgroundColor:'#e1e1e1',
            color: '#000'
        },500)
    });
});

