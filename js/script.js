var slider_price=0, slider_complect=0, slider_myth=0;

$(document).ready(function(){ 
	
	_prepare();
	_events();
	
	_resize();
	$(window).resize(function(){ _resize(); })
  
})

function _prepare(){
	$('.header-nav .root-item:first').addClass('mini-logo');
}

function _events(){
	
	$('form input[type="text"], form textarea').blur(function(){
		if( $(this).val()!='' ){ $(this).next().addClass('hidden'); }
		else{ $(this).next().removeClass('hidden'); }
	})
	
	$('.header .lang .current').click(function(){
		if( $('.header .lang').hasClass('opened') ){
			$('.header .lang').removeClass('opened');
			$(this).parent().find('ul').hide();
		}else{
			$('.header .lang').addClass('opened');
			$(this).parent().find('ul').show();
		}		
		return false;
	})
	
	// клик в пустую область
	$(document).click(function(event) { 
		if(!$(event.target).closest('.header .lang').length ) { 
			$('.header .lang').removeClass('opened');
			$('.header .lang ul').hide();
		}
	})
	
}

function _resize(){
	
}
