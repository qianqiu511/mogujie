var banner = document.getElementById('banner');
var bannerImg = document.getElementById('bannerImg');
var imgIndex = document.querySelectorAll('.imgIndex');
var i=0;
setInterval(function(){
	if(i>=imgIndex.length){
		i=0;
	}
	for(var j=0;j<imgIndex.length;j++){
		if(i == j){
			imgIndex[j].style.background = '#d43e2e';
		}else{
			imgIndex[j].style.background = '#fff';
		}
	}
	i++;
	bannerImg.src = 'img/banner' + i + '.jpg';	
},1000)

//距离16点倒计时
var h = document.getElementById('hour');
var m = document.getElementById('minute');
var s = document.getElementById('second');
setInterval(function(){
	var myDate = new Date();
		var year = myDate.getFullYear();
		var month = myDate.getMonth()+1;
		var date = myDate.getDate();
		var hour = myDate.getHours();
		if(hour<=16){
			h.innerHTML = countdown(year,month,date,16,00,00,'x');
			m.innerHTML = countdown(year,month,date,16,00,00,'y');
			s.innerHTML = countdown(year,month,date,16,00,00,'z');
		} else if(hour>16){
			h.innerHTML = countdown(year,month,date+1,16,00,00,'x');
			m.innerHTML = countdown(year,month,date+1,16,00,00,'y');
			s.innerHTML = countdown(year,month,date+1,16,00,00,'z');
		}	
	},1000) 

//距离某个时间倒计时	
function countdown(a1,a2,a3,a4,a5,a6,a7){
	var nowDate = new Date();
	var futDate = new Date(a1,a2,a3,a4,a5,a6);
	var nowTime = nowDate.getTime();
	var futTime = futDate.getTime();
	var value = futTime-nowTime;
	//1分钟、1小时、1天等于多少毫秒
	var ms = 1000*60;
	var hs = ms*60;
	var ds = hs*24;
	var ms = 1000 * 60;
	var hs = ms * 60;
	var ds = hs * 24;
	var d = parseInt(value/ds);
	var h = parseInt(value%ds/hs);
	var m = parseInt(value%ds%hs/ms);
	var s = parseInt(value%ds%hs%ms/1000);
	if(a7=='x'){
		return add0(h);
	} else if(a7=='y'){
		return add0(m);
	} else if(a7=='z'){
		return add0(s);
	}
}
function add0(num){
	if(num>9){
		return num
	} else{
		return '0'+num
	}
}


