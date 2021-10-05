$(document).ready(function(){
	var $mainnav = $('.global-nav');
	//$mainnav.addClass('collapsed');
	$mainnav.on( 'click', function(e){
		var $this = $(this);

		if ( $this.hasClass('uncollapsed') ) { $this.removeClass('uncollapsed'); }
		else { $this.addClass('uncollapsed'); }
	});
	$mainnav.find('.menu').on( 'click', function(e) {
		e.stopPropagation();
	});

	// Help box
	var $help = $('#help-box');
	var $helpDetails = $help.find('.details');
	$help.append("<div class='toggle'><i class='fa' aria-hidden='true'></i></div>");
	var $helpToggle = $help.find('.toggle');

	if ( $helpDetails.hasClass('hidden') ) {
		$helpToggle.addClass('closed');
	}

	$helpToggle.on('click', function() {
		var $this = $(this);
		var $details = $this.parent().find('.details');
		if ( $details.hasClass('hidden') ) {
			$this.removeClass('closed');
			$details.removeClass('hidden');
			eraseCookie('help-closed');
		} else {
			$this.addClass('closed');
			$details.addClass('hidden');
			createCookie('help-closed',1,1);
		}
	});

	$('.phone input').on( 'blur focus keyup', function(){
		$(this).val(function(i, text) {
			let clean_text = text.replace(/[\D().-\s[\]]*/, '');
	    return clean_text.replace(/[\D().-\s[\]]*(\d{3})[\D().-\s[\]]*(\d{3})[\D().-\s[\]]*(\d{4})[\D().-\s[\]]*/, '\($1\) $2-$3');
	    //return text.replace(/(\d{3})(\d{3})(\d{4})/, '\($1\) $2 $3');
		});
	} );

	$('body').removeClass('no-js').addClass('js');

	function createCookie(name, value, days) {
	    var expires;

	    if (days) {
	        var date = new Date();
	        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
	        expires = "; expires=" + date.toGMTString();
	    } else {
	        expires = "";
	    }
	    document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value) + expires + "; path=/";
	}

	function readCookie(name) {
	    var nameEQ = encodeURIComponent(name) + "=";
	    var ca = document.cookie.split(';');
	    for (var i = 0; i < ca.length; i++) {
	        var c = ca[i];
	        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
	        if (c.indexOf(nameEQ) === 0) return decodeURIComponent(c.substring(nameEQ.length, c.length));
	    }
	    return null;
	}

	function eraseCookie(name) {
	    createCookie(name, "", -1);
	}
});
