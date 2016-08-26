$(function(){
	$("#home .main,.backgd:not(.lite,.tlite),.teamblock,.teamblock .team-item").css('height',$(window).height()+'px');
	$(".tbin").css('height',10*$(window).height()+'px');
	$('#navsp').on('click',function(){
		urltend();
		navClick($(this));
	});
	$('#portfolio #navsp,#industry-list #navsp,#item #navsp').on('click',function(){
		navClickSp($(this));
	});
	imgpre();
	var pop = window.location.href.split('#')[1];
	if (pop =="nav=1"){
		urlkeep();		
	}else if(pop =="nav=0"){
		urlkeep();		
	}

	/*home*/
	$('#home').find('.bg').css({'opacity':'0','margin-bottom':'-100px'});
	$('#home').find('.slogan').css({'opacity':'0','margin-right':'-150px'});
	$('#home').find('.subslogan').css({'opacity':'0','margin-bottom':'-150px'});
 	$('#home').find('.insert_font').css({'opacity':'0','margin-bottom':'-150px'});	
	$('#home').find('.identica_logo').css({'opacity':'0','margin-top':'-150px'});
	
	$('#home').find('.subslogan3').css({'opacity':'0','margin-bottom':'-150px'});

	
	$('#home').find('.identica_logo').delay(1500).animate({'opacity':'1','margin-top':'0px'},2000);
	$('#home').find('.subslogan3').delay(1500).animate({'opacity':'1','margin-bottom':'0px'},2000);
	
	$('#home').find('.bg').animate({'opacity':'1','margin-bottom':'0px'},2000);
	$('#home').find('.slogan').delay(1000).animate({'opacity':'1','margin-right':'0px'},2000);
	$('#home').find('.subslogan').delay(1500).animate({'opacity':'1','margin-bottom':'0px'},2000);

	$('#home').find('.insert_font').delay(3000).animate({'opacity':'1','margin-bottom':'0px'},2000);
	
	
	/*portfolio*/
	$('#portfolio').find('.denav').css({'opacity':'0','position':'relative','top':'30px'});
	$('#portfolio').find('.img-block a').css({'opacity':'0','position':'relative','top':'50px'});
	/*industry-list*/
	$('#industry-list').find('.listnav div').css({'opacity':'0','position':'relative','top':'30px'});
	$('#industry-list').find('.img-block a').css({'opacity':'0','position':'relative','top':'50px'});
	/*item*/
	$('#item').find('.c-banner').css({'opacity':'0'});
	$('#item').find('.ct-l p').css({'opacity':'0','position':'relative','top':'50px'});
	$('#item').find('.ct-r div,.ct-r a').css({'opacity':'0','position':'relative','right':'-30px'});
	$('#item').find('.c-slide').css({'opacity':'0','position':'relative','top':'50px'});
	$('#item').find('.c-banner').animate({'opacity':'1'},500);
	for(var i=0;i<$('#item').find('.ct-l p').length;i++){
		$('#item').find('.ct-l p:eq('+(i)+')').delay((i)*100+300).animate({'opacity':'1','top':'0px'},500);
	}
	for(var i=0;i<$('#item').find('.ct-r a').length;i++){
		$('#item').find('.ct-r a:eq('+(i)+')').delay((i)*100+700).animate({'opacity':'1','right':'0px'},500);
	}
	$('#item').find('.c-slide').delay(1000).animate({'opacity':'1','top':'0px'},500);
	/*service*/
	$('#service').find('.sb-img').css({'opacity':'0','left':'-30px'});
	$('#service').find('.sb-tt>div,.sb-d').css({'opacity':'0','position':'relative','top':'30px'});
	$('#service').find('.sb-img').animate({'opacity':'1','left':'0px'},1000);
	for(var i=0;i<$('#service').find('.sb-tt>div,.sb-d').length;i++){
		$($('#service').find('.sb-tt>div,.sb-d')[i]).delay((i)*200+600).animate({'opacity':'1','top':'0px'},600);
	}
	/*team*/
	teamha($($('.teamblock .team-item')[0]));
	$('.rightdotin i').bind('click',function(){
		var p = $(this).prevAll().length;
		teamRolls(p);
	});

	/*contactus*/
	$('#contactus').find('.ctus').css({'opacity':'0','left':'8%'});
	$('#contactus').find('.ctus').animate({'opacity':'1','left':'14%'},1000);
	$('#contactus').find('.teamblock .n3 .n3t,.teamblock .n3 .n3i').css({'opacity':'0','position':'relative','top':'30px'});
	for(var i=0;i<$('#contactus').find('.teamblock .n3 .n3t,.teamblock .n3 .n3i').length;i++){
		$($('#contactus').find('.teamblock .n3 .n3t,.teamblock .n3 .n3i')[i]).delay((i)*500+200).animate({'opacity':'1','top':'0px'},1000);
	}
	/*--c-slide--*/
	var a = $('#c-slide .cs-middle .cs-item:eq('+($('#c-slide .cs-item').length-1)+')').html();
	var b = $('#c-slide .cs-middle .cs-item:eq(0)').html();
	var now=$('#c-slide .cs-middle .cs-item').length+1;
	$('.cs-middle').css('width',1100*now+"px");

	$('#c-slide .cs-middle').html('<div class="cs-item">'+a+'</div>'+$('#c-slide .cs-middle').html()+'<div class="cs-item">'+b+'</div>');
	$('#c-slide .cs-middle').css('margin-left','-1100px');
	$('.cs-point i').bind('click',function(){
		var pos = $(this).prevAll().length;
		$('#c-slide .cs-middle').animate({"margin-left":pos*(-1100)-1100+"px"},200);
		$('.cs-point i').removeClass('on');
		$(this).addClass('on');
	});
	$('#c-slide .cs-right').bind('click',function(){
		var num=$('#c-slide .cs-item').length-1;
		if(Math.round(parseInt($($('#c-slide .cs-middle')[0]).css('margin-left'))/1100)*1100==(num-1)*(-1100)){
			$('#c-slide .cs-middle').css('margin-left','0px');
		}
		$('#c-slide .cs-middle').animate({"margin-left":Math.round(parseInt($($('#c-slide .cs-middle')[0]).css('margin-left'))/1100)*1100-1100+"px"},200);
		var pos = $('.cs-point i.on').prevAll().length;
		$('.cs-point i').removeClass('on');
		$($('.cs-point i')[pos==$('.cs-point i').length-1?0:pos+1]).addClass('on');
	});
	$('#c-slide .cs-left').bind('click',function(){
		var num=$('#c-slide .cs-item').length-1;
		if(Math.round(parseInt($($('#c-slide .cs-middle')[0]).css('margin-left'))/1100)*1100==0){
			$('#c-slide .cs-middle').css('margin-left',(num-1)*(-1100)+'px');
		}
		$('#c-slide .cs-middle').animate({"margin-left":Math.round(parseInt($($('#c-slide .cs-middle')[0]).css('margin-left'))/1100)*1100+1100+"px"},200);
		var pos = $('.cs-point i.on').prevAll().length;
		$('.cs-point i').removeClass('on');
		$($('.cs-point i')[pos==0?$('.cs-point i').length-1:pos-1]).addClass('on');
	});
});
$(window).resize(function(){
	$("#home .main,.backgd:not(.lite,.tlite),.teamblock,.teamblock .team-item").css('height',$(window).height()+'px')
	$(".tbin").css('height',10*$(window).height()+'px');
});
$(document).on('mousewheel',
	function(e){
		if($('body').attr('id')=='team'){
			var a = e.originalEvent.wheelDelta;
			 if(a > 0){
			  	teamRoll(-1);
			 } else {
			    teamRoll(1); 
			 }
		}
	}
);
function teamha(num){
	num.find('img').css({'opacity':'0','left':'20%'});
	num.find('.n1').css({'opacity':'0','left':'8%'});
	num.find('.n2').css({'opacity':'0','left':'9%'});
	num.find('.n3 .n3t,.n3 .n3i').css({'opacity':'0','position':'relative','top':'30px'});
	num.find('img').animate({'opacity':'1','left':'12%'},1000);
	num.find('.n1').delay(200).animate({'opacity':'1','left':'13%'},1000);
	num.find('.n2').delay(300).animate({'opacity':'1','left':'16%'},1000);
	for(var i=0;i<num.find('.n3 .n3t,.n3 .n3i').length;i++){
		$(num.find('.n3 .n3t,.n3 .n3i')[i]).delay((i)*500+800).animate({'opacity':'1','top':'0px'},800);
	}
}
function teamRolls(num){
	var aver = $('.teamblock .tbin .team-item').height();
	$('.teamblock .tbin').animate({'margin-top':num*(-1)*aver+"px"},300);
	$('.rightdotin i').removeClass('on');
	$($('.rightdotin i')[num]).addClass('on');
	teamha($($('.teamblock .team-item')[num]));
}
function teamRoll(num){
	var len = $('.teamblock .tbin .team-item').length;
	var aver = $('.teamblock .tbin .team-item').height();
	var mt = parseInt($('.teamblock .tbin').offset().top/aver);
	var count ;
	if(mt-num>-6&&mt-num<=0){
		count = (mt - num)*aver;
	}else if(mt-num<=-6){
		count = (mt - num + 6)*aver;
	}else if(mt-num>0){
		count = (mt - num - 6)*aver;
	}
	var n= parseInt((-1)*count/aver);
	$('.teamblock .tbin').animate({'margin-top':count+"px"},300);
	$('.rightdotin i').removeClass('on');
	$($('.rightdotin i')[n]).addClass('on');
	teamha($($('.teamblock .team-item')[n]));
}
function　imgpre(){
	var imgArr = new Array();
	var imgLen = $('.img-block img').length;
	var imgCount = 0;
	for(var i=0; i<imgLen; i++){
		imgArr[i] = new Image();
		imgArr[i].className = "appear";
		imgArr[i].onload = function(){
			imgCount += 1; 
			if(imgCount == imgLen){
				for(var j=0; j<imgLen; j++){
					$($('.img-block a')[j]).append(imgArr[j]);
				}
				imgset();
			}
		}
		imgArr[i].src = $($('.img-block img:not(.appear)')[i]).attr('src');
	}
}
function imgset(){
	/*portfolio*/
	$('#portfolio').find('.denav').animate({'opacity':'1','top':'0px'},200);
	for(var i=0;i<$('#portfolio').find('.img-block a').length;i++){
		$('#portfolio').find('.img-block a:eq('+(i)+')').delay((i+1)*100).animate({'opacity':'1','top':'0px'},500);
	}
	/*industry-list*/
	for(var i=0;i<$('#industry-list').find('.listnav div').length;i++){
		$('#industry-list').find('.listnav div:eq('+(i)+')').delay((i+1)*50).animate({'opacity':'1','top':'0px'},100);
	}
	for(var i=0;i<$('#industry-list').find('.img-block a').length;i++){
		$('#industry-list').find('.img-block a:eq('+(i)+')').delay((i)*100+300).animate({'opacity':'1','top':'0px'},500);
	}
}
function navClick(btn){
	if($('#navin').css('width')=='0px'){
			$('#navin').animate({'width':$('#navin .navinin').css('width')},300);
			btn.removeClass('close');
		}else{
			$('#navin').animate({'width':'0px'},300);btn.addClass('close');
		}
}
function navAutoClick(btn){
	if($('body').attr('id') != "portfolio" && $('body').attr('id') != "industry-list" && $('body').attr('id') != "item"){
		if($('#navin').css('width')=='0px'){
			$('#navin').css({'width':$('#navin .navinin').css('width')});
			btn.removeClass('close');
		}else{
			$('#navin').css({'width':'0px'});btn.addClass('close');
		}
	}else{
		if($('#navin').css('width')=='0px'){
			$('#navin').css({'width':$('#navin .navinin').css('width')});btn.removeClass('close');
			$('.backgd.tlite').css({'opacity':'1'});
			$('.nav-t').addClass('white');
			$('#navin').removeClass('dd');
		}else{
			$('#navin').css({'width':'0px'});btn.addClass('close');
			$('.backgd.tlite').css({'opacity':'0'});
			$('.nav-t').removeClass('white');
			$('#navin').addClass('dd');
		}
	}
	
}
function navClickSp(btn){
	if($('#navin').css('width')=='0px'){
			$('.backgd.tlite').animate({'opacity':'1'},300);
			$('.nav-t').addClass('white');
			$('#navin').removeClass('dd');
		}else{
			$('.backgd.tlite').animate({'opacity':'0'},300);
			$('.nav-t').removeClass('white');
			$('#navin').addClass('dd');
		}
}
function urltend(){
	if($('.nav').attr('class').indexOf('pop')>0){
		for(var i=0;i<$('a').length;i++){
			if($($('a')[i]).attr('href')==undefined){$($('a')[i]).attr('href','')};
			$($('a')[i]).attr('href',$($('a')[i]).attr('href').split('#')[0]+'#nav=1');
		}
	}else{
		for(var i=0;i<$('a').length;i++){
			if($($('a')[i]).attr('href')==undefined){$($('a')[i]).attr('href','')};
			$($('a')[i]).attr('href',$($('a')[i]).attr('href').split('#')[0]+'#nav=0');
		}
	}
	$('.nav').toggleClass('pop');	
}
function urlkeep(){
	debugger;
	if(window.location.href.split('#')[1]=="nav=1"){
		for(var i=0;i<$('a').length;i++){
			if($($('a')[i]).attr('href')==undefined){$($('a')[i]).attr('href','')};
			$($('a')[i]).attr('href',$($('a')[i]).attr('href').split('#')[0]+'#nav=1');			
		}

	}else{
		for(var i=0;i<$('a').length;i++){
			if($($('a')[i]).attr('href')==undefined){$($('a')[i]).attr('href','')};
			$($('a')[i]).attr('href',$($('a')[i]).attr('href').split('#')[0]+'#nav=0');
		}
		navAutoClick($('#navsp'));
		$('.nav').addClass('pop');
	}
}


/*-----------------------newJS---------------------------*/
