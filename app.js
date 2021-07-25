//Scrolling Animations with Scroll Magic

//CARDS
//Card-1
var controller = new ScrollMagic.Controller();

var ourScene = new ScrollMagic.Scene({
    triggerElement: '#section-b',
    reverse: false
}).setClassToggle('.card-list-1', 'move-in').addTo(controller)

//Card-2
var controller = new ScrollMagic.Controller();

var ourScene = new ScrollMagic.Scene({
    triggerElement: '#section-b',
    reverse: false
}).setClassToggle('.card-list-2', 'move-in').addTo(controller)

//Card-3
var controller = new ScrollMagic.Controller();

var ourScene = new ScrollMagic.Scene({
    triggerElement: '#section-b',
    reverse: false
}).setClassToggle('.card-list-3', 'move-in').addTo(controller)

//LIST OF SERVICES
var controller = new ScrollMagic.Controller();

var ourScene = new ScrollMagic.Scene({
    triggerElement: '#section-c',
    reverse: false
}).setClassToggle('.section-c-list', 'move-up').addTo(controller)

//CONTACT FORM Animation with Scroll Magic  
var controllerTwo = new ScrollMagic.Controller();

var ourSceneTwo = new ScrollMagic.Scene({
    triggerElement: '#section-d',
    reverse: false

}).setClassToggle('.contact-form', 'fade-forward').addTo(controllerTwo)
