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

$(document).ready(function(){
  
  var item = $('.portfolio .portfolio--item'),
      pane = $('.portfolio .open'), 
      close = pane.find('#close'),
      // categories
      cDesign = $('#call_design'),
      cGraphic = $('#call_graphic'),
      cPrint = $('#call_print'), 
      
      itDes = item.data('type','design'),
      itGra = item.data('type','graphic'),
      itPri = item.data('type','print');
  
  item.on('click', function(){
    var imgUrl = $(this).find('img').attr('src'),
        url = $(this).attr('data-url');
    pane.find('img').attr('src',imgUrl)
    pane.find('.link').attr('href',url);
    pane.fadeIn('fast');   
  });
  
  close.on('click',function(){
    pane.fadeOut('fast'); 
  });
  
  cDesign.on('click',function() { 
    $(this).parent().toggleClass('active');
    $(".portfolio--item[data-type='design']").toggle(); 
  });
  cGraphic.on('click',function() { 
    $(this).parent().toggleClass('active');
    $(".portfolio--item[data-type='graphic']").toggle(); 
  });
  cPrint.on('click',function() { 
    $(this).parent().toggleClass('active');
    $(".portfolio--item[data-type='print']").toggle(); 
  });
  
  
  
});
