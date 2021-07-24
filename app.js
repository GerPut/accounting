//Logo appear
// gsap.from('.hello', { duration: 1, x: '-100vw', delay: 0.5, ease: 'power.in' })
// gsap.from('.cog-container', { duration: 1, x: '200vw', delay: 0.5, ease: 'power.in' })

// //Scrolling Animations with Scroll Magic
// var controller = new ScrollMagic.Controller();

// var ourScene = new ScrollMagic.Scene({
//     triggerElement: '.card',
//     reverse: false
// }).setClassToggle('.card', 'fade-in').addTo(controller)

//Contact Form animation with Scroll Magic  
var controllerTwo = new ScrollMagic.Controller();

var ourSceneTwo = new ScrollMagic.Scene({
    triggerElement: '.contact-form',
    reverse: false

}).setClassToggle('.contact-form', 'fade-forward').addTo(controllerTwo)