var left = document.querySelector('.left');
var right = document.querySelector('.right');
var k = 0;
var c;
if( k == 0 ){
	document.getElementsByClassName("left")[0].style.color = '#999';
}
if( k == 3 ){
		document.getElementsByClassName("right")[0].style.color = '#999';
	}
left.addEventListener('click', function (){
	if( k > 0 ){
		k--;
		c = k * (-107);
		document.getElementsByClassName("owl-stage")[0].style.transform = `translateX(${c}px)`;
	}
	if( k == 0 ){
		document.getElementsByClassName("left")[0].style.color = '#999';
		document.getElementsByClassName("right")[0].style.color = '#000';	
	}
	else{
		document.getElementsByClassName("left")[0].style.color = '#000';
		document.getElementsByClassName("right")[0].style.color = '#000';	
	}
});
right.addEventListener('click', function(){
	if( k < 3 ){
		k++;
		c = k * (-107);
		document.getElementsByClassName("owl-stage")[0].style.transform = `translateX(${c}px)`;
	}
	if( k == 3 ){
		document.getElementsByClassName("right")[0].style.color = '#999';
		document.getElementsByClassName("left")[0].style.color = '#000';
	}
	else{
		document.getElementsByClassName("right")[0].style.color = '#000';	
		document.getElementsByClassName("left")[0].style.color = '#000';
	}
});

// value up down
var down = document.getElementById("qytDown");
var up = document.getElementById("qytUp");
var x = parseInt(document.getElementsByClassName("quantity-selector")[0].value);

down.addEventListener('click', () => {
	if( x >= 1){
		x--;
		document.getElementsByClassName("quantity-selector")[0].value = x;
	}
});
up.addEventListener('click', () => {
	if( x <= 100){
		x++;
		document.getElementsByClassName("quantity-selector")[0].value = x;
	}
});