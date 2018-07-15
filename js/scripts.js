window.onload = function () {
	
	$('article').on('click', function () {
		$(this).find('.news-text').toggleClass('show-text');
		
		if($(this).find('.news-text').hasClass('show-text')){
			$(this).find('.close').css('display','block');
				$(this).find('.open').css('display','none');
		}
		else {
		$(this).find('.close').css('display','none');
				$(this).find('.open').css('display','block');
		}
	})

		$('.burger-click').on('click', function () {
			$('.menu-burger').toggleClass('show-burger');
			$('.phone-number').toggleClass('off');
				$('.phone-img').toggleClass('off');
			if ($('.menu-burger').hasClass('show-burger')){
				
				$('.burger-open').css('display', 'none');
				$('.burger-close').css('display', 'block');
				$('.logo').css('margin-top', '20px' );
			}
			else {
				$('.burger-open').css('display', 'block');
				$('.burger-close').css('display', 'none');

			}
		});

			$('.js-category').on('click', function () {
				$(this).find('.open-category').toggleClass('show-category');
				//console.log(1);			
			});

			$('.slick').slick({
				  dots: true,
				  infinite: true,
				  speed: 300,
				  slidesToShow: 1,
				  focusOnSelect: true,
				  customPaging: function(slider) {
                    return $('<div class="radius"></div>');
                }
			});

			
	 };