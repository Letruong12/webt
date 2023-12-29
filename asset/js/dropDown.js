var contentPremium = document.querySelector('.content-premium');
var cateTitle = document.querySelector('.cate-title');
var dropdownTimeout;

function openDropdown() {
	contentPremium.classList.add('height-premium');
}

function closeDropdown() {
	contentPremium.classList.remove('height-premium');
}

function main() {
	cateTitle.addEventListener('mouseenter', function() {
		clearTimeout(dropdownTimeout);
		openDropdown();
	});

	cateTitle.addEventListener('mouseleave', function() {
		dropdownTimeout = setTimeout(closeDropdown, 200);
	});

	contentPremium.addEventListener('mouseenter', function() {
		clearTimeout(dropdownTimeout);
	});

	contentPremium.addEventListener('mouseleave', function() {
		dropdownTimeout = setTimeout(closeDropdown, 200);
	});
}
main();

window.addEventListener('scroll', () => {
	if(window.scrollY >= document.getElementById("header").offsetHeight) {
		closeDropdown();
	}
	else {
		main();
	}
});
