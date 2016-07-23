$(function(){
	$box=$('a','.wheel');
	$w=$box.width();
	$box.css('display','none').eq(0).css('display','block');
	$btns=$('li','.btn');
	var num=0;
	var t=setInterval(move,3000);
	function move(){
		num++;
		if(num>=$box.length){
			num=0;
		}
		$box.fadeOut().eq(num).fadeIn();
		$btns.removeClass().eq(num).addClass('cur');
	}
	var $whl=$('.bn_l','.banner');
	$whl.mouseover(function(){
		clearInterval(t);
	}).mouseout(function(){
		t=setInterval(move,3000);
	});
	var $left=$('.left','.bn_l');
	$left.click(function(){
		num--;
		if(num<0){
			num=$box.length-1;
		}
		$box.fadeOut().eq(num).fadeIn();
		$btns.removeClass().eq(num).addClass('cur');
	})
	var $right=$('.right','.bn_l');
	$right.click(function(){
		move();
	})



	// var $imgs=$('img',$('.goods')[0]);
	// console.log($imgs)
	// $imgs.mouseover(function(){
	// 	// $(this).animate({'marginLeft':'-20'})
	// 	$(this).stop(true)
	// 	$(this).animate({'right':'20'},500)
	// }).mouseout(function(){
	// 	$(this).stop(true)
	// 	// $(this).animate({'marginLeft':'0'})
	// 	$(this).animate({'right':'-20'},500)
	// })
})