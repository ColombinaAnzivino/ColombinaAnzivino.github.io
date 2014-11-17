var $bulb = $('.bulb');
var $bulbSection = $('.bulb-section');
var navTop = document.querySelector('.nav-top');

document.querySelector('.nav-btn').addEventListener('click', function(e){
e.preventDefault();
	   
if (navTop.getAttribute('data-state') == 'expanded'){
		
navTop.setAttribute('data-state', 'collapsed');
this.setAttribute('data-state', 'inactive');		
}else{
		
navTop.setAttribute('data-state', 'expanded');
this.setAttribute('data-state', 'active');
}

});

$bulbSection.waypoint(function () {
    $bulb.addClass('js-bulb-fade');
}, { offset: '50%' });

$bulbSection.waypoint(function () {
    $bulb.addClass('js-bulb-fade');
}, { offset: '70%' });