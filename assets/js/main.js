/*
	Fractal by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

/* reproductor de audio */
document.addEventListener('DOMContentLoaded', function() {
	const audioPlayer = document.getElementById('audioPlayer');
	const links = document.querySelectorAll('.ol-temas a');

	links.forEach((link, index) => {
		link.addEventListener('click', function(event) {
			event.preventDefault();
			const audioSrc = this.getAttribute('data-audio');
			audioPlayer.src = audioSrc;
			audioPlayer.style.display = 'block';
			audioPlayer.play();
			audioPlayer.setAttribute('data-index', index);
		});
	});

	audioPlayer.addEventListener('ended', function() {
		let currentIndex = parseInt(audioPlayer.getAttribute('data-index'));
		let nextIndex = currentIndex + 1;
		if (nextIndex < links.length) {
			const nextAudioSrc = links[nextIndex].getAttribute('data-audio');
			audioPlayer.src = nextAudioSrc;
			audioPlayer.setAttribute('data-index', nextIndex);
			audioPlayer.play();
		}
	});
});

(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ '361px',   '480px'  ],
			xxsmall:  [ null,      '360px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Mobile?
		if (browser.mobile)
			$body.addClass('is-mobile');
		else {

			breakpoints.on('>medium', function() {
				$body.removeClass('is-mobile');
			});

			breakpoints.on('<=medium', function() {
				$body.addClass('is-mobile');
			});

		}

	// Scrolly.
		$('.scrolly')
			.scrolly({
				speed: 1500
			});

})(jQuery);