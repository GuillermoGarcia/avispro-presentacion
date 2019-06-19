var vid = document.getElementById("video");
Reveal.initialize({
  controls: true,
  progress: true,
  history: true,
  center: true,
  transition: Reveal.getQueryHash().transition || 'fade'
});

// Slide changed listener
Reveal.addEventListener('slidechanged', function (event) {
  console.log(event.indexh);
  // if is slide 1 then launch title animation
  if (event.indexh == 1) {
    titulo.play();
    tituloA.play();
    tituloVIS.play();
    tituloP.play();
    tituloR.play();
    tituloO.play();
  }
  // if is slide 4 then play video
  if (event.indexh == 4) {
    vid.play()
  } else { // else pause video
    vid.pause()
  }
});

// Logo Rotate animation
var rotate = anime({
  targets: 'img#logoRotate',
  keyframes: [
    { rotate: 360 },
    { opacity: 0 }
  ],
  duration: 4000,
  endDelay: 2000,
  direction: 'normal',
  easing: 'linear',
  complete: function (anim) {
    rotateReverse.play()
  }
})

// Logo Rotate Reverse animation
var rotateReverse = anime({
  targets: 'img#logoRotate',
  keyframes: [
    { rotate: 0 }
  ],
  autoplay: false,
  duration: 100,
  delay: 1000,
  direction: 'normal',
  easing: 'linear',
  complete: function (anim) {
    rotate.restart()
  }
})

// Logo Static animation
var static = anime({
  targets: 'img#logoStatic',
  opacity: 1,
  delay: 2500,
  duration: 100,
  endDelay: 4550,
  direction: 'normal',
  easing: 'linear',
  complete: function (anim) {
    anim.restart()
  }
})

// Title animation
var titulo = anime({
  targets: '.titulo-animado h2 span, .titulo-animado h5',
  autoplay: false,
  opacity: 0,
  delay: 3000,
  duration: 1000,
  easing: 'linear'
})

// Title Letter A animation
var tituloA = anime({
  targets: '#A',
  autoplay: false,
  translateY: 270,
  translateX: 10,
  scale: 2,
  delay: 4000,
  duration: 1000,
  easing: 'linear'
})

// Title Letters VIS animation
var tituloVIS = anime({
  targets: '#VIS',
  autoplay: false,
  translateY: 163,
  translateX: -32,
  scale: 2,
  delay: 4000,
  duration: 1000,
  easing: 'linear'
})

// Title Letter P animation
var tituloP = anime({
  targets: '#P',
  autoplay: false,
  translateY: 0,
  translateX: 247,
  scale: 2,
  delay: 4000,
  duration: 1000,
  easing: 'linear'
})

// Title Letter R animation
var tituloR = anime({
  targets: '#R',
  autoplay: false,
  translateY: -163,
  translateX: 97,
  scale: 2,
  delay: 4000,
  duration: 1000,
  easing: 'linear'
})

// Title Letter O animation
var tituloO = anime({
  targets: '#O',
  autoplay: false,
  translateY: -270,
  translateX: 384,
  scale: 4,
  delay: 4000,
  duration: 1000,
  easing: 'linear'
})
