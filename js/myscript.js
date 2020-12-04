$(function(){
			// 네비게이션 페이지넘어가는거 제이쿼리
			var menu=$("#wrapper #sec1 .gnb ul li");
			var ht=$(window).height();
			$(window).resize(function(){
				ht = $(window).height();
			})
			menu.click(function(){
				var tg=$(this);
				var i=tg.index();
				var nowTop=ht*i;
				menu.removeClass("active");
				tg.addClass("active");
				$("html, body").animate({scrollTop:nowTop});
			})
			$(window).scroll(function(){
				var myscrollTop = $(window).scrollTop();
				if(myscrollTop>=0 && myscrollTop<ht){
					menu.removeClass("active");
					menu.eq(0).addClass("active");
				}
				else if(myscrollTop>=ht && myscrollTop<ht*2){
					menu.removeClass("active");
					menu.eq(1).addClass("active");
				}
				else if(myscrollTop>=ht*2 && myscrollTop<ht*3){
					menu.removeClass("active");
					menu.eq(2).addClass("active");
				}
				else if(myscrollTop>=ht*3 && myscrollTop<ht*4){
					menu.removeClass("active");
					menu.eq(3).addClass("active");
				}
				else{
					menu.removeClass("active");
					menu.eq(4).addClass("active");
				}
			})
			//계속쓸것들
			var nullpage = $(".nullpage");
			nullpage.hide();

			//첫번째 섹션 스크립트
			var p1_newdrink_frame = $("#sec1 .p1_newdrink_frame");
			var p1_bake_frame = $("#sec1 .p1_bake_frame");
			var ade = $("#sec1 .ade");
			var crow = $("#sec1 .crow");
			var p1_cancel = $(".p1_cancel");
			// p1_mo_scro = 0;

			p1_newdrink_frame.hide();
			p1_bake_frame.hide();

			ade.click(function(){
				p1_bake_frame.fadeOut();
				p1_newdrink_frame.fadeIn();
				// p1_mo_scro = 1;
			})
			// if(p1_mo_scro == 1){
			// 		$(window).mousemove(function(event){
			// 			var pageX=event.pageX;
			// 			var pageY=event.pageY;
			// 			if(215<pageX && pageX<590 && 160<pageY && pageY<730){
			// 				$("body").css("overflow","hidden");
			// 			}
			// 			else{
			// 				$("body").css("overflow","auto");
			// 			}
			// 		})
			// 	}
			// else{
			// 	// $(window).mousemove(function(event){
			// 	// 	var pageX=event.pageX;
			// 	// 	var pageY=event.pageY;
			// 	// 	if(215<pageX && pageX<590 && 160<pageY && pageY<730){
			// 	// 		$("body").css("overflow","auto");
			// 	// 	}
			// 	// 	else{
			// 	// 		$("body").css("overflow","auto");
			// 	// 	}
			// 	// })
			// }
			crow.click(function(){
				p1_newdrink_frame.fadeOut();
				p1_bake_frame.fadeIn();
			})

			p1_cancel.eq(0).click(function(){
				p1_newdrink_frame.fadeOut();
				// p1_mo_scro = 0;
			})
			p1_cancel.eq(1).click(function(){
				p1_bake_frame.fadeOut();
				// p1_mo_scro = 0;
			})

			//두번째 섹션 스크립트
			var p2carouframe = $(".p2carouframe"); //케로셀 모달창 배경
			var p2_qizebott = $(".pannel button"); //버튼 누르면 모달창 나옴
			var p2_qs = $(".p2_qs")
			var p2_a_select = $(".p2_qs li");
			var __rost__ = $(".__rost__")
			var rost_img=$(".__rost__ ul li"); //케로셀 버튼(작은 이미지)
			var rost_carousel = ["img/p2_souce/p2_rost_1.png","img/p2_souce/p2_rost_2.png","img/p2_souce/p2_rost_3.png","img/p2_souce/p2_rost_4.png"]					//케로셀 각 경로
			var i=0;
			var p2carouframe = $(".p2carouframe");
			var p2_order_cancel = $(".p2_order_cancel");
			var rost_sel = $(".rost_sel");

			p2carouframe.hide();	//모달창 일단 숨겨둠
			p2_qs.hide();
			__rost__.hide();

			p2_order_cancel.eq(0).click(function(){
				p2carouframe.fadeOut();
				nullpage.eq(0).hide();
			})

			p2_qizebott.click(function(){  //버튼 클릭했을때
				p2_qs.fadeOut();
				__rost__.fadeOut();
				i=0;
				nullpage.eq(0).show();
				p2carouframe.fadeIn();	//모달창이 fadeIn으로 보여지게 만듬
				p2_qs.eq(0).fadeIn();
			})
			p2_a_select.click(function(){
				i+=1;
				p2_qs.fadeOut();
				p2_qs.eq(i).fadeIn();
				if(i==3){
					__rost__.fadeIn();
				}
			})
			
			rost_img.click(function(){  //모달창 안에 케로셀 이미지(작은이미지) 누르면
				var j = $(this).index();  //작은이미지 몇번째 작은 이미지인지 가져옴 ex)세번째껄 클릭하면 j에 2가 들어가겠징?
				__rost__.css("background","url("+rost_carousel[j]+")"); //이부분은 길어서 말로 설명해줄게 여튼 이부분이 클릭한 거에 해당되는 이미지를 가져오는 부분
				nullpage.eq(0).show();
			})
			rost_sel.click(function(){
				var j = $(this).index();
				p2_qs.fadeOut();
				p2carouframe.fadeIn();
				__rost__.fadeIn();
				__rost__.css("background","url("+rost_carousel[j]+")");
				nullpage.eq(0).show();
			})

			//p2_오더 캐로셀 스크립트
			var gitaman = $(".gitaman");
			var p2carouframe_order = $(".p2carouframe_order");
			// var order_carousel_img = ["img/p2_souce/p2_rost_1.png","img/p2_souce/p2_rost_2.png","img/p2_souce/p2_rost_3.png","img/p2_souce/p2_rost_4.png"]

			var order_menu = $(".order_menu ul li");
			var order_carousel = $(".order_carousel");
			var p2_menu_scroll = $(".p2_menu_scroll");


			// 기타맨 클릭시 메뉴판나옴
			p2carouframe_order.hide();
			gitaman.click(function(){
				nullpage.eq(0).show();
				p2carouframe_order.fadeIn();
			})
			// 메뉴판 위쪽 네비
			order_menu.click(function(){
				order_menu.removeClass("active");
				var tg=$(this).index();
				
				order_menu.eq(tg).addClass("active");
				if(tg==0){
					order_carousel.css("background-position-y",0);
					p2_menu_scroll.animate({scrollTop:0},600,"linear");
				}
				else if(tg==1){
					order_carousel.css("background-position-y",-1680);
					p2_menu_scroll.animate({scrollTop:0},600,"linear");
				}
				else if(tg==2){
					order_carousel.css("background-position-y",-3360);
					p2_menu_scroll.animate({scrollTop:0},600,"linear");
				}
				else{
					order_carousel.css("background-position-y",-5040);
					p2_menu_scroll.animate({scrollTop:0},600,"linear");
				}
			})
			// 메뉴판 아래쪽 음료사진클릭하여 음료 페이지로 넘어가기
			var order_menu_btn = $(".order_menu_btn ul li");

			// 각칸 음료 클릭하면 위에 메뉴가 바뀌는 케로셀 만들기
			order_menu_btn.click(function(){
				var j= $(this).index();
				var select_btn_p2 = j*-420;

				order_carousel.css("background-position-y", select_btn_p2);
				p2_menu_scroll.animate({scrollTop:0},600,"linear");
				if(j<4){
					order_menu.removeClass("active");
					order_menu.eq(0).addClass("active");
				}
				else if(j<8){
					order_menu.removeClass("active");
					order_menu.eq(1).addClass("active");
				}
				else if(j<12){
					order_menu.removeClass("active");
					order_menu.eq(2).addClass("active");
				}
				else{
					order_menu.removeClass("active");
					order_menu.eq(3).addClass("active");
				}
			})

			// 메뉴창 클로즈
			p2_order_cancel.eq(1).click(function(){
				p2carouframe_order.fadeOut();
				nullpage.eq(0).hide();
			})

			nullpage.eq(0).click(function(){
				p2carouframe_order.fadeOut();
				p2carouframe.fadeOut();
				nullpage.eq(0).hide();
			})





			//세번째 섹션 스크립트
			var p3_mo_close = $("#sec3 .p3_modal_bg .p3_mo_close");
			var p3_modal_bg = $("#sec3 .p3_modal_bg");
			var yogawomen = $(".yogawomen");
			var p3_ade = $(".p3_ade");
			var p3_latte = $(".p3_latte");
			var p3_tea = $(".p3_tea");

			var p3_modal_frame =$(".p3_modal_frame");
			var p3_modal_frame_li = $(".p3_modal_frame nav ul li");
			var p3_wt_frame =$(".p3_wt_frame");
			var p3_menu_frame =$(".p3_menu_frame");
			var p3_btn_img =$(".p3_btn_frame ul");
			var p3_btn_li =$(".p3_btn_frame ul li");
			var p3_menu_cancel = $(".p3_menu_cancel");
			var p3_carous_prev = $(".p3_carous_prev");
			var p3_carous_next = $(".p3_carous_next");

			// 메뉴모달창 만들기
			p3_modal_frame.hide();
			// 화면 큰 음료 누르면 모달창 뜨고 네비 각자 진하기달라짐 각각 맞는 메뉴
			p3_ade.click(function(){
				nullpage.eq(1).fadeIn();
				p3_modal_frame.fadeIn();
				p3_modal_frame_li.removeClass("active");
				p3_modal_frame_li.eq(0).addClass("active");
				p3_wt_frame.css("background-position",0);
				p3_menu_frame.css("background-position",0);
			})
			p3_latte.click(function(){
				nullpage.eq(1).fadeIn();
				p3_modal_frame.fadeIn();
				p3_modal_frame_li.removeClass("active");
				p3_modal_frame_li.eq(1).addClass("active");
				p3_wt_frame.css("background-position",-650);
				p3_menu_frame.css("background-position",-4680);
			})
			p3_tea.click(function(){
				nullpage.eq(1).fadeIn();
				p3_modal_frame.fadeIn();
				p3_modal_frame_li.removeClass("active");
				p3_modal_frame_li.eq(2).addClass("active");
				p3_wt_frame.css("background-position",-1200);
				p3_menu_frame.css("background-position",-7488);
			})
			p3_modal_frame_li.click(function(){
				p3_modal_frame_li.removeClass("active");
				var tg=$(this).index();
				
				p3_modal_frame_li.eq(tg).addClass("active");

				if(tg==0){
					p3_menu_frame.hide();
					p3_wt_frame.hide();
					p3_menu_frame.css("background-position",0);
					p3_wt_frame.css("background-position",0);
					p3_wt_frame.fadeIn();
					p3_menu_frame.fadeIn();
				}
				else if(tg==1){
					p3_menu_frame.hide();
					p3_wt_frame.hide();
					p3_menu_frame.css("background-position",-4680);
					p3_wt_frame.css("background-position",-650);
					p3_wt_frame.fadeIn();
					p3_menu_frame.fadeIn();
				}
				else{
					p3_menu_frame.hide();
					p3_wt_frame.hide();
					p3_menu_frame.css("background-position",-7488);
					p3_wt_frame.css("background-position",-1200);
					p3_wt_frame.fadeIn();
					p3_menu_frame.fadeIn();
				}
			})

			// 메뉴 모달창 아래 메뉴 옆으로 넘기기
			var p3_j = 0;
			p3_carous_next.click(function(){
				if( p3_j < -600 ){
				}else{
					p3_j += -260;
					p3_btn_img.css("left", p3_j);
				}
				
			})

			p3_carous_prev.click(function(){
				if( p3_j>=0 ){
					
				}else{
					p3_j += 260;
					p3_btn_img.css("left", p3_j);
				}
				
			})

			// 모달창 아래 메뉴 누르면 그에맞는 메뉴 나오기
			p3_btn_li.click(function(){
				var j= $(this).index();
				var select_btn_p3 = j*-936;

				p3_menu_frame.hide();
				p3_menu_frame.css("background-position", select_btn_p3);
				p3_menu_frame.fadeIn();

				if(j>=0 && j<5){
					p3_wt_frame.css("background-position",0);
					p3_modal_frame_li.removeClass("active");
					p3_modal_frame_li.eq(0).addClass("active");
					p3_wt_frame.fadeIn();
				}
				else if(j>4 && j<8){
					p3_wt_frame.css("background-position",-650);
					p3_modal_frame_li.removeClass("active");
					p3_modal_frame_li.eq(1).addClass("active");
					p3_wt_frame.fadeIn();
				}
				else{
					p3_wt_frame.css("background-position",-1200);
					p3_modal_frame_li.removeClass("active");
					p3_modal_frame_li.eq(2).addClass("active");
					p3_wt_frame.fadeIn();
				}
			})


			// 메뉴 모달창 닫기
			p3_menu_cancel.click(function(){
				nullpage.eq(1).hide();
				p3_modal_frame.fadeOut();
				p3_btn_img.css("left", 0);
			})

			//요가하는 여자 클릭시 설명 모달창 나옴
			p3_modal_bg.hide();
			
			yogawomen.click(function(){
				nullpage.eq(1).fadeIn();
				p3_modal_bg.fadeIn();
			})
			// 설명 모달창 닫기
			p3_mo_close.click(function(){
				nullpage.eq(1).hide();
				p3_modal_bg.fadeOut();
			})
			nullpage.eq(1).click(function(){
				p3_modal_frame.fadeOut();
				p3_modal_bg.fadeOut();
				nullpage.eq(1).hide();
			})


			//네번째 섹션 스크립트
			var spon3 = $(".spon3");
			var spon1 = $(".spon1");
			var p4_modal = $(".p4_modal");
			var p4_modal_1 = $(".p4_modal_1")
			var p4_modal_2 = $(".p4_modal_2")
			var p4_btn1 = $(".p4_btn1");
			var p4_btn2 = $(".p4_btn2");
			var p4_btn3 = $(".p4_btn3");
			var p4_mo_cancel = $(".p4_mo_cancel");
			var p4_modal_bus = $(".p4_modal_bus");

			p4_modal.hide();
			p4_modal_2.hide();
			p4_modal_bus.hide();

			p4_mo_cancel.eq(0).click(function(){
				p4_modal.fadeOut();
			})
			p4_mo_cancel.eq(1).css("right",25);
			p4_mo_cancel.eq(1).click(function(){
				p4_modal_bus.fadeOut();
			})
			spon1.click(function(){
				p4_modal_bus.fadeIn();
			})
			spon3.click(function(){
				p4_modal.fadeIn();
			})

			p4_btn1.click(function(){
				p4_modal_2.fadeOut();
				p4_modal_1.fadeIn();
			})
			p4_btn2.click(function(){
				p4_modal_1.fadeOut();
				p4_modal_2.fadeIn();
			})

			//다섯번째 섹션 스크립트
			var p5_1code = $("#sec5 .p5_caroframe .p5_1code");
			var p5_2step = $("#sec5 .p5_caroframe .p5_2step");
			var p5_3video = $("#sec5 .p5_caroframe .p5_3video");
			var p5_stamp = $(".p5_1code .paperbg ul li");

			var p5_nav = $("#sec5 .twinkle nav ul li");
			var p5_char = $(".p5_char");

			p5_2step.hide();
			p5_3video.hide();

			//케로셀 나오는거 123
			p5_nav.eq(0).click(function(){
				p5_2step.fadeOut();
				p5_3video.fadeOut();
				p5_1code.fadeIn();
			})
			p5_nav.eq(1).click(function(){
				p5_1code.fadeOut();
				p5_3video.fadeOut();
				p5_2step.fadeIn();
			})
			p5_nav.eq(2).click(function(){
				p5_1code.fadeOut();
				p5_2step.fadeOut();
				p5_3video.fadeIn();
			})

			var stampsum = 0;
			p5_stamp.eq(10).hide();
			// 캐릭터 클릭시 함수
			p5_char.click(function(){
				var tg=$(this).index();
				if(tg == 0){
					if(stampsum == 10){
						stampsum = 0;
						alert("응모완료!");
						p5_stamp.css("background-position",-110);
					}else{
						stampsum +=1;
						if(stampsum > 10){
							stampsum = 10;
						}
					}
					p5_stamp.eq(stampsum).prevUntil().css("background-position",0);
				}else if(tg == 1){
					if(stampsum == 10){
						stampsum = 0;
						alert("응모완료!");
						p5_stamp.css("background-position",-110);
					}else{
						stampsum +=2;
						if(stampsum > 10){
							stampsum = 10;
						}
					}
					p5_stamp.eq(stampsum).prevUntil().css("background-position",0);
				}
				else if(tg == 2){
					if(stampsum == 10){
						stampsum = 0;
						alert("응모완료!");
						p5_stamp.css("background-position",-110);
					}else{
						stampsum +=2;
						if(stampsum > 10){
							stampsum = 10;
						}
					}
					p5_stamp.eq(stampsum).prevUntil().css("background-position",0);
				}
				else if(tg == 3){
					if(stampsum == 10){
						stampsum = 0;
						alert("응모완료!");
						p5_stamp.css("background-position",-110);
					}else{
						stampsum +=3;
						if(stampsum > 10){
							stampsum = 10;
						}
					}
					p5_stamp.eq(stampsum).prevUntil().css("background-position",0);
				}

			})

})