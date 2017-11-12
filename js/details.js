var navtwo = document.querySelector('.navtwo');
var zd = document.querySelector('#zd');
window.onscroll=function(){
	console.log(1)
	var t=document.documentElement.scrollTop||document.body.scrollTop;
	if(t>=500){
		navtwo.style.bottom="130px";
		zd.style.opacity='1';
		zd.style.filter='alpha(opacity=100)';
	}else{
		navtwo.style.bottom="60px";
		zd.style.opacity='0';
		zd.style.filter='alpha(opacity=0)';
	}
} 
