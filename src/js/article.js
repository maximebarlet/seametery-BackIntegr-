// SOUND MUTE
var soundMute = document.querySelector('.sound__page');
var soundMutePath = document.querySelectorAll('.sound__page path');
var soundPartOne = document.querySelector('.sound__partOne');
var soundPartTwo = document.querySelector('.sound__partTwo');
var soundPartThree = document.querySelector('.sound__partThree');
var soundPartFour = document.querySelector('.sound__partFour');

var Mute = function () {
	if(soundMute.classList.contains('stop__sound')) {
		soundPartOne.muted = true;
		soundPartTwo.muted = true;
		soundPartThree.muted = true;
		soundPartFour.muted = true;
	} else {
		soundPartOne.muted = false;
		soundPartTwo.muted = false;
		soundPartThree.muted = false;
		soundPartFour.muted = false;
	}
};

soundMute.addEventListener('click', function() {
	soundMute.classList.toggle('stop__sound');
	for (let i = 0; i < soundMutePath.length; i++) {
		const path = soundMutePath[i];

		if(path.classList.contains('mute')) {
			path.classList.toggle('is-muted');
		};

		if(path.classList.contains('whitoutSound')) {
			path.classList.toggle('sound__off');
		};
	}
	Mute()
})

// GESTION DES CHAPITRES
var chapters = document.querySelectorAll('.chapters li.chapter');
var chaptersSvg = document.querySelectorAll('.chapter__svg');

chapters.forEach(function (chapter, index) {
    var paths = chaptersSvg[index].querySelectorAll('.svg__path');
    var allPath = document.querySelectorAll('.svg__path');
    var removeRead = function () {
        for (let i = 0; i < allPath.length; i++) {
            let onePath = allPath[i];
            
            onePath.classList.remove('is-reading');
        };
        for (let i = 0; i < chapters.length; i++) {
            let oneChapter = chapters[i];

            oneChapter.classList.remove('is-scaling');  
        }
    };

    chapter.addEventListener('click', function() {

        removeRead();
        
        for (let i = 0; i < paths.length; i++) {
            let path = paths[i];
            path.classList.add('is-reading');
				}
				if(!chapter.classList.contains('is-scaling')) {
					chapter.classList.add('is-scaling');
				}
    })
});

// INFORMATIONS HOVER CHAPTER DEFINITION
var chapterOne = document.querySelector('li.chapterOne');
var chapterTitleOne = document.querySelector('.chapter__titleOne');
var chapterSubtitleOne =document.querySelector('.chapter__subtitleOne')
var chapterTwo = document.querySelector('li.chapterTwo');
var chapterTitleTwo = document.querySelector('.chapter__titleTwo');
var chapterSubtitleTwo =document.querySelector('.chapter__subtitleTwo')
var chapterThree = document.querySelector('li.chapterThree');
var chapterTitleThree = document.querySelector('.chapter__titleThree');
var chapterSubtitleThree =document.querySelector('.chapter__subtitleThree')

chapterOne.addEventListener('mouseenter', function() {
	if(chapterOne.classList.contains('is-scaling')) {
		chapterSubtitleOne.style.color = '#E8C300';
	}
	chapterTitleOne.classList.add('is-asking');
	chapterSubtitleOne.classList.add('is-subAsking');
});

chapterOne.addEventListener('mouseleave', function() {
	if(!chapterOne.classList.contains('is-scaling')) {
		chapterSubtitleOne.style.color = 'white';
	}
	chapterTitleOne.classList.remove('is-asking');
	chapterSubtitleOne.classList.remove('is-subAsking');
});

chapterTwo.addEventListener('mouseenter', function() {
	if(chapterTwo.classList.contains('is-scaling')) {
		chapterSubtitleTwo.style.color = '#E8C300';
	}
	chapterTitleTwo.classList.add('is-asking');
	chapterSubtitleTwo.classList.add('is-subAsking');
});

chapterTwo.addEventListener('mouseleave', function() {
	if(!chapterTwo.classList.contains('is-scaling')) {
		chapterSubtitleTwo.style.color = 'white';
	}
	chapterTitleTwo.classList.remove('is-asking');
	chapterSubtitleTwo.classList.remove('is-subAsking');
});

chapterThree.addEventListener('mouseenter', function() {
	if(chapterThree.classList.contains('is-scaling')) {
		chapterSubtitleThree.style.color = '#E8C300';
	}
	chapterTitleThree.classList.add('is-asking');
	chapterSubtitleThree.classList.add('is-subAsking');
});

chapterThree.addEventListener('mouseleave', function() {
	if(!chapterThree.classList.contains('is-scaling')) {
		chapterSubtitleThree.style.color = 'white';
	}
	chapterTitleThree.classList.remove('is-asking');
	chapterSubtitleThree.classList.remove('is-subAsking');
});



// SMOOTH SCROLL EFFECT

(function() {
	scrollTo();
})();

function scrollTo() {
	var links = document.getElementsByTagName('a');
	for (var i = 0; i < links.length; i++) {
		var link = links[i];
		if ((link.href && link.href.indexOf('#') != -1) && ((link.pathname == location.pathname) || ('/' + link.pathname == location.pathname)) && (link.search == location.search)) {
			link.onclick = scrollAnchors;
		}
	}
}

function scrollAnchors(e, respond = null) {
	const distanceToTop = el => Math.floor(el.getBoundingClientRect().top);
	e.preventDefault();
	var targetID = (respond) ? respond.getAttribute('href') : this.getAttribute('href');
	const targetAnchor = document.querySelector(targetID);
	if (!targetAnchor) return;
	const originalTop = distanceToTop(targetAnchor);
	window.scrollBy({ top: originalTop, left: 0, behavior: 'smooth' });
	const checkIfDone = setInterval(function() {
		const atBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;
		if (distanceToTop(targetAnchor) === 0 || atBottom) {
			targetAnchor.tabIndex = '-1';
			targetAnchor.focus();
			window.history.pushState('', '', targetID);
			clearInterval(checkIfDone);
		}
	}, 100);
}

// OUVERTURE INFORMATIONS SUPPLEMENTAIRES DURANT LES VIDEOS
var buttonsOpening = document.querySelectorAll('.video__more');
var informationsBox = document.querySelector('.video__other');
var informationsBoxSecond = document.querySelector('.video__other--second');
var informationsBoxThirst = document.querySelector('.video__other--thirst');
var informationsBoxFour = document.querySelector('.video__other--four');
var discoverings = document.querySelectorAll('.video__discover');

for (let i = 0; i < discoverings.length; i++) {
	let discover = discoverings[i];
	
	discover.addEventListener('click', function() {

		videoOtherFour.classList.remove('is-bouncingRight');
		videoOtherThree.classList.remove('is-bouncingRight');
		videoOtherTwo.classList.remove('is-bouncingRight');
		videoOtherOne.classList.remove('is-bouncingRight');
		informationsBox.classList.toggle('is-checked');
		informationsBoxSecond.classList.toggle('is-checked');
		informationsBoxThirst.classList.toggle('is-checked');
		informationsBoxFour.classList.toggle('is-checked');

		for (let i = 0; i < buttonsOpening.length; i++) {
			let openerBtn = buttonsOpening[i];

			if(openerBtn.classList.contains('is-display')) {
				openerBtn.classList.remove('is-display');
			} else if(!openerBtn.classList.contains('is-display')) {
				openerBtn.classList.add('is-display');
			};
		}
	});
}


for (let i = 0; i < buttonsOpening.length; i++) {
	let opener = buttonsOpening[i];

	opener.addEventListener('click', function() {

		videoOtherFour.classList.remove('is-bouncingRight');
		videoOtherThree.classList.remove('is-bouncingRight');
		videoOtherTwo.classList.remove('is-bouncingRight');
		videoOtherOne.classList.remove('is-bouncingRight');
		informationsBox.classList.toggle('is-checked');
		informationsBoxSecond.classList.toggle('is-checked');
		informationsBoxThirst.classList.toggle('is-checked');
		informationsBoxFour.classList.toggle('is-checked');

		for (let i = 0; i < buttonsOpening.length; i++) {
			let openerBtn = buttonsOpening[i];

			if(openerBtn.classList.contains('is-display')) {
				openerBtn.classList.remove('is-display');
			} else if(!openerBtn.classList.contains('is-display')) {
				openerBtn.classList.add('is-display');
			};
		}
	});
}

// ANIMATIONS VIDEO PARTIE 1
var part = document.querySelector('.title__part');
var line = document.querySelector('.line');
var nextVideo = document.querySelector('.next__video');
var firstVideo = document.querySelector('.videos--firstPart');
var secondVideo = document.querySelector('.videos--secondPart');
var texteOne = document.querySelector('.informations__texte--one');
var videoOtherTwo = document.querySelector('.video__other--second');

part.addEventListener('click', function() {
	part.classList.toggle('is-up');
	line.classList.toggle('is-up');
	nextVideo.classList.toggle('is-up');
	texteOne.classList.toggle('is-fading');
	setTimeout(() => {
		nextVideo.classList.add('is-animated');
}, 400)
});

nextVideo.addEventListener('click', function() {
	firstVideo.classList.add('is-display');
	secondVideo.classList.remove('is-display'); 
	videoOtherTwo.classList.add('is-bouncingRight');
})

// ANIMATIONS VIDEO PARTIE 2
var partSecond = document.querySelector('.title__part--second');
var lineSecond = document.querySelector('.line--second');
var nextVideoSecond = document.querySelector('.next__video--second');
var texteTwo = document.querySelector('.informations__texte--two');

partSecond.addEventListener('click', function() {
	partSecond.classList.toggle('is-up');
	lineSecond.classList.toggle('is-up');
	nextVideoSecond.classList.toggle('is-up');
	texteTwo.classList.toggle('is-fading');
	setTimeout(() => {
		nextVideoSecond.classList.add('is-animated');
}, 400)
});

nextVideoSecond.addEventListener('click', function() {
	firstVideo.classList.remove('is-display');
	secondVideo.classList.add('is-display');
	videoOtherOne.classList.add('is-bouncingRight');
})

// ANIMATIONS VIDEO PARTIE 3
var partThirst = document.querySelector('.title__part--thirst');
var lineThirst = document.querySelector('.line--thirst');
var nextVideoThirst = document.querySelector('.next__video--thirst');
var texteThirst = document.querySelector('.informations__texte--thirst');

partThirst.addEventListener('click', function() {
	partThirst.classList.toggle('is-up');
	lineThirst.classList.toggle('is-up');
	nextVideoThirst.classList.toggle('is-up');
	texteThirst.classList.toggle('is-fading');
	setTimeout(() => {
		nextVideoThirst.classList.add('is-animated');
}, 400)
});

// ANIMATIONS VIDEO PARTIE 4
var partFour = document.querySelector('.title__part--four');
var lineFour = document.querySelector('.line--four');
var nextVideoFour = document.querySelector('.next__video--four');
var texteFour = document.querySelector('.informations__texte--four');

partFour.addEventListener('click', function() {
	partFour.classList.toggle('is-up--four');
	lineFour.classList.toggle('is-up--four');
	nextVideoFour.classList.toggle('is-up--four');
	texteFour.classList.toggle('is-fading');
	setTimeout(() => {
		nextVideoFour.classList.add('is-animated');
}, 400)
});

// OUVERTURE DOSSIER CONFIDENTIEL PARTIE 1
var doc = document.querySelector('.confidential__partOne');
var docSlide = document.querySelector('.confidential__partTwo');

doc.addEventListener('click', function() {
	docSlide.classList.toggle('is-slide');
})

doc.addEventListener('mouseenter', function() {
	docSlide.classList.add('is-demiSlide');
})

doc.addEventListener('mouseleave', function() {
	docSlide.classList.remove('is-demiSlide');
})

// OUVERTURE DOSSIER CONFIDENTIEL PARTIE 2
var docTwo = document.querySelector('.slider__partOne');
var docSlideTwo = document.querySelector('.slider__partTwo');

docTwo.addEventListener('click', function() {
	docSlideTwo.classList.toggle('is-slide');
})

docTwo.addEventListener('mouseenter', function() {
	docSlideTwo.classList.add('is-demiSlideTwo');
})

docTwo.addEventListener('mouseleave', function() {
	docSlideTwo.classList.remove('is-demiSlideTwo');
})

// SCROLL WAYPOINTS NAVIGATIONS
var embarquement = document.querySelector('.embarquementLogo__path');
var contextes = document.querySelectorAll('.contexteLogo__path');
var interviewPaths = document.querySelectorAll('.interviewLogo__path');
var videoOtherOne = document.querySelector('.video__other--one');
var videoOtherThree = document.querySelector('.video__other--thirst');
var videoOtherFour = document.querySelector('.video__other--four');

var waypoint = new Waypoint({
	element: document.getElementById('embarquement'),
	handler: function(direction) {
		for (let i = 0; i < contextes.length; i++) {
			let contexte = contextes[i];
			contexte.classList.remove('is-reading');
		}
		for (let i = 0; i < interviewPaths.length; i++) {
			let interviewPath = interviewPaths[i];
			interviewPath.classList.remove('is-reading');
		}
		embarquement.classList.add('is-reading');
		chapterOne.classList.add('is-scaling');
		chapterTwo.classList.remove('is-scaling');
		chapterThree.classList.remove('is-scaling');
		soundPartOne.muted = false;
	},
	offset:'-1%'
});

var waypoint = new Waypoint({
    element: document.getElementById('contexte'),
    handler: function(direction) {
			for (let i = 0; i < contextes.length; i++) {
				let contexte = contextes[i];
				contexte.classList.add('is-reading');
			}
			for (let i = 0; i < interviewPaths.length; i++) {
				let interviewPath = interviewPaths[i];
				interviewPath.classList.remove('is-reading');
			}
		embarquement.classList.remove('is-reading');
		chapterOne.classList.remove('is-scaling');
		chapterTwo.classList.add('is-scaling');
		chapterThree.classList.remove('is-scaling');
		soundPartTwo.muted = true;
		soundPartThree.muted = false;
		soundPartThree.autoplay = true;
		soundPartThree.load();
  }
});


var waypoint = new Waypoint({
	element: document.getElementById('interviews'),
	handler: function(direction) {
		for (let i = 0; i < contextes.length; i++) {
			let contexte = contextes[i];
			contexte.classList.remove('is-reading');
		}
		for (let i = 0; i < interviewPaths.length; i++) {
			let interviewPath = interviewPaths[i];
			interviewPath.classList.add('is-reading');
		}
		embarquement.classList.remove('is-reading');
		chapterTwo.classList.remove('is-scaling');
		chapterThree.classList.add('is-scaling');
		soundPartFour.muted = true;
	}
	});

	var waypoint = new Waypoint({
    element: document.getElementById('videos--firstPart'),
    handler: function(direction) {
			videoOtherOne.classList.add('is-bouncingRight');
			soundPartOne.muted = true;
			soundPartTwo.muted = true;
  }
});

var waypoint = new Waypoint({
	element: document.getElementById('videos--thirstPart'),
	handler: function(direction) {
		videoOtherThree.classList.add('is-bouncingRight');
		soundPartThree.muted = true;
		soundPartFour.muted = true;
	}
});

var waypoint = new Waypoint({
	element: document.getElementById('robot'),
	handler: function(direction) {
		soundPartTwo.muted = false;
		soundPartTwo.autoplay = true;
		soundPartTwo.load();
		soundPartThree.muted = true;
	}
});

var waypoint = new Waypoint({
	element: document.getElementById('operation'),
	handler: function(direction) {
		soundPartFour.muted = false;
		soundPartFour.autoplay = true;
		soundPartFour.load();
	}
});

var waypoint = new Waypoint({
	element: document.getElementById('videos--fourPart'),
	handler: function(direction) {
		videoOtherFour.classList.add('is-bouncingRight');
}
});
  
// TRANSITION MARKO INTERVIEW
var pageOne = document.querySelector('.interviews');
var marko = document.querySelector('.marko');
var interview = document.querySelector('.interview__marko');
var arrow = document.querySelector('.left__arrow img')
// MARKO BLOC ELEMENTS
var leftImgMarko = document.querySelector('.interview__left');
var rightTitleMarko = document.querySelector('.container__title');
var dateMarko = document.querySelector('.container__subtitle');
var citationMarko = document.querySelector('.right__citation');
var audioMarko = document.querySelector('.right__sound--marko');

	marko.addEventListener('click', function() {
		interview.classList.add('is-flex');
		pageOne.classList.add('is-reducing');
		setTimeout(() => {
			interview.classList.add('is-mounted');
		}, 200)
		setTimeout(() => {
			pageOne.classList.add('is-none');
		}, 400)
		setTimeout(() => {
			leftImgMarko.classList.add('is-coming');
		}, 1500)
		setTimeout(() => {
			rightTitleMarko.classList.add('is-coming');
		}, 1800)
		setTimeout(() => {
			dateMarko.classList.add('is-coming');
		}, 2100)
		setTimeout(() => {
			citationMarko.classList.add('is-coming');
		}, 2400)
		setTimeout(() => {
			audioMarko.classList.add('is-spotted');
		}, 2400)
	});

	arrow.addEventListener('click', function() {
		interview.classList.remove('is-flex');
		pageOne.classList.remove('is-none');
		pageOne.classList.remove('is-reducing');
	});

// TRANSITION HARLEY INTERVIEW
var harley = document.querySelector('.harley');
var interviewHarley = document.querySelector('.interview__harley');
var arrowHarley = document.querySelector('.left__arrow--harley img')
// HARLEY BLOC ELEMENTS
var leftImgHarley = document.querySelector('.interview__left--harley');
var rightTitleHarley = document.querySelector('.container__title--harley');
var dateHarley = document.querySelector('.container__subtitle--harley');
var citationHarley = document.querySelector('.right__citation--harley');
var audioHarley = document.querySelector('.right__sound--harley');

harley.addEventListener('click', function() {
		interviewHarley.classList.add('is-flex');
		pageOne.classList.add('is-reducing');
		setTimeout(() => {
			interviewHarley.classList.add('is-mounted');
		}, 200)
		setTimeout(() => {
			pageOne.classList.add('is-none');
		}, 400)
		setTimeout(() => {
			leftImgHarley.classList.add('is-coming');
		}, 1500)
		setTimeout(() => {
			rightTitleHarley.classList.add('is-coming');
		}, 1800)
		setTimeout(() => {
			dateHarley.classList.add('is-coming');
		}, 2100)
		setTimeout(() => {
			citationHarley.classList.add('is-coming');
		}, 2400)
		setTimeout(() => {
			audioHarley.classList.add('is-spotted');
		}, 2400)
	});

	arrowHarley.addEventListener('click', function() {
		interviewHarley.classList.remove('is-flex');
		pageOne.classList.remove('is-none');
		pageOne.classList.remove('is-reducing');
	});

// TRANSITION PATRICK INTERVIEW
var patrick = document.querySelector('.patrick');
var interviewPatrick = document.querySelector('.interview__patrick');
var arrowPatrick = document.querySelector('.left__arrow--patrick img')
// PATRICK BLOC ELEMENTS
var leftImgPatrick = document.querySelector('.interview__left--patrick');
var rightTitlePatrick = document.querySelector('.container__title--patrick');
var datePatrick = document.querySelector('.container__subtitle--patrick');
var citationPatrick = document.querySelector('.right__citation--patrick');
var audioPatrick = document.querySelector('.right__sound--patrick');

patrick.addEventListener('click', function() {
		interviewPatrick.classList.add('is-flex');
		pageOne.classList.add('is-reducing');
		setTimeout(() => {
			interviewPatrick.classList.add('is-mounted');
		}, 200)
		setTimeout(() => {
			pageOne.classList.add('is-none');
		}, 400)
		setTimeout(() => {
			leftImgPatrick.classList.add('is-coming');
		}, 1500)
		setTimeout(() => {
			rightTitlePatrick.classList.add('is-coming');
		}, 1800)
		setTimeout(() => {
			datePatrick.classList.add('is-coming');
		}, 2100)
		setTimeout(() => {
			citationPatrick.classList.add('is-coming');
		}, 2400)
		setTimeout(() => {
			audioPatrick.classList.add('is-spotted');
		}, 2400)
	});

	arrowPatrick.addEventListener('click', function() {
		interviewPatrick.classList.remove('is-flex');
		pageOne.classList.remove('is-none');
		pageOne.classList.remove('is-reducing');
	});

