var contentPremium = document.querySelector('.content-premium');

function openDropdown() {
	contentPremium.classList.add('height-premium');
}

function closeDropdown() {
	contentPremium.classList.remove('height-premium');
}
window.addEventListener('scroll', () => {
	if(window.scrollY >= document.getElementById("header").offsetHeight) {
		closeDropdown();
	}
	else {
		openDropdown();
	}
});

var left = document.querySelector('.left');
var right = document.querySelector('.right');
var k = 0;
var c;
if( k == 0 ){
	document.getElementsByClassName("left")[0].style.color = '#999';
}
setInterval( function() {
	k++;
	if( k == 5 )
		k = 0;
	c = k * (-228);
	document.getElementsByClassName("product-list-item")[0].style.transform = `translateX(${c}px)`;
	if( k == 0 ){
		document.getElementsByClassName("left")[0].style.color = '#999';
	}
	else {
		document.getElementsByClassName("left")[0].style.color = '#000';
	}
	if( k == 4 ){
		document.getElementsByClassName("right")[0].style.color = '#999';
	}
	else {
		document.getElementsByClassName("right")[0].style.color = '#000';
	}
	
}, 5000);
left.addEventListener('click', function (){
	if( k > 0 ){
		k--;
		c = k * (-228);
		document.getElementsByClassName("product-list-item")[0].style.transform = `translateX(${c}px)`;
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
	if( k < 4 ){
		k++;
		c = k * (-228);
		document.getElementsByClassName("product-list-item")[0].style.transform = `translateX(${c}px)`;
	}
	if( k == 4 ){
		document.getElementsByClassName("right")[0].style.color = '#999';
		document.getElementsByClassName("left")[0].style.color = '#000';
	}
	else{
		document.getElementsByClassName("right")[0].style.color = '#000';	
		document.getElementsByClassName("left")[0].style.color = '#000';
	}
});


var left_n = document.querySelector('.left-n');
var right_n = document.querySelector('.right-n');
var e = 0;
var c;
if( e == 0 ){
	document.getElementsByClassName("left-n")[0].style.color = '#999';
}
setInterval( function() {
	e++;
	if( e == 5 )
		e = 0;
	c = e * (-228);
	document.getElementsByClassName("product-list-item")[1].style.transform = `translateX(${c}px)`;
	if( e == 0 ){
		document.getElementsByClassName("left-n")[0].style.color = '#999';
	}
	else {
		document.getElementsByClassName("left-n")[0].style.color = '#000';
	}
	if( e == 4 ){
		document.getElementsByClassName("right-n")[0].style.color = '#999';
	}
	else {
		document.getElementsByClassName("right-n")[0].style.color = '#000';
	}
	
}, 5000);
left_n.addEventListener('click', function (){
	if( e > 0 ){
		e--;
		c = e * (-228);
		document.getElementsByClassName("product-list-item")[1].style.transform = `translateX(${c}px)`;
	}
	if( e == 0 ){
		document.getElementsByClassName("left-n")[0].style.color = '#999';
		document.getElementsByClassName("right-n")[0].style.color = '#000';	
	}
	else{
		document.getElementsByClassName("left-n")[0].style.color = '#000';
		document.getElementsByClassName("right-n")[0].style.color = '#000';	
	}
});
right_n.addEventListener('click', function(){
	if( e < 4 ){
		e++;
		c = e * (-228);
		document.getElementsByClassName("product-list-item")[1].style.transform = `translateX(${c}px)`;
	}
	if( e == 4 ){
		document.getElementsByClassName("right-n")[0].style.color = '#999';
		document.getElementsByClassName("left-n")[0].style.color = '#000';
	}
	else{
		document.getElementsByClassName("right-n")[0].style.color = '#000';	
		document.getElementsByClassName("left-n")[0].style.color = '#000';
	}
});