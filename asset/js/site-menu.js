const iconMenu = document.querySelector('.icon-menu');
const siteMenu = document.querySelector('.site-menu');
const siteClose = document.querySelector('.site-close');
const siteContainer = document.querySelector('.site-m-container');

function showMenuSite(){
	siteMenu.classList.add('open');
}
function hideMenuSite(){
	siteMenu.classList.remove('open');
}
iconMenu.addEventListener('click', showMenuSite);
siteClose.addEventListener('click', hideMenuSite);
siteMenu.addEventListener('click', hideMenuSite);
siteContainer.addEventListener('click', function(event) {
	event.stopPropagation();
})
