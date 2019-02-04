/*-----------------------------------
            S I D E   N A V
-----------------------------------*/

'use strict';

var internals = {};

internals.getNodes = function () {
    internals.nav = document.querySelector('.offscreen-nav__nav');
    internals.overlay = document.querySelector('.offscreen-nav__overlay');
    internals.hamburger = document.querySelector('.offscreen-nav__hamburger');
    internals.navToggleNode = document.querySelector('.offscreen-nav__nav-toggle');
};

internals.setupListeners = function () {
    internals.navToggleNode.addEventListener('click', internals.toggleNav);
    internals.overlay.addEventListener('click', internals.toggleNav);
};

internals.toggleNav = function () {
    internals.nav.classList.toggle('offscreen-nav__nav--active');
    internals.overlay.classList.toggle('offscreen-nav__overlay--active');
    internals.hamburger.classList.toggle('offscreen-nav__hamburger--active');
};

internals.init = function () {
    internals.getNodes();
    internals.setupListeners();
};

document.addEventListener('DOMContentLoaded', internals.init);


/*-----------------------------------
   P A G E   T R A N S I T I O N S
-----------------------------------*/


function aboutMe() {
    TweenMax.to(".btn1", 1, {
        y: -100,
        opacity: 0,
    });

    TweenMax.to(".btn2", 1, {
        y: -100,
        opacity: 0,
        delay: 0.4
    });

    TweenMax.to(".btn3", 1, {
        y: -100,
        opacity: 0,
        delay: 0.8
    });

    TweenMax.to(".screen", 2, {
        y: -400,
        opacity: 0,
        ease: Back.easeIn,
        delay: 1.1
    });

    TweenMax.from(".overlay1", 2, {
        ease: Power2.easeInOut,
    });

    TweenMax.to(".overlay1", 2, {
        delay: 2.1,
        top: "-120%",
        ease: Expo.easeInOut,
    });

    TweenMax.to("#projects", 2, {
        opacity: 0,
    });

    TweenMax.to(".overlay3", 2, {
        opacity: 0,
    });

    TweenMax.to(".overlay2", 2, {
        delay: 2.7,
        top: "-120%",
        ease: Expo.easeInOut
    });

    TweenMax.from(".content", 2, {
        delay: 3,
        opacity: 0,
        ease: Power2.easeInOut
    });

    TweenMax.to("content", 2, {
        opacity: 1,
        y: -300,
        delay: 3.3,
        ease: Power2.easeInOut
    })

    TweenMax.from(".job1", 2, {
        delay: 3.6,
        opacity: 0,
        ease: Power2.easeInOut
    });

    TweenMax.to("job1", 2, {
        opacity: 1,
        y: -300,
        delay: 3.3,
        ease: Power2.easeInOut
    })

    TweenMax.from(".job2", 2, {
        delay: 3.9,
        opacity: 0,
        ease: Power2.easeInOut
    });

    TweenMax.to("job2", 2, {
        opacity: 1,
        y: -300,
        delay: 3.3,
        ease: Power2.easeInOut
    })

    TweenMax.from(".job3", 2, {
        delay: 4.3,
        opacity: 0,
        ease: Power2.easeInOut
    });

    TweenMax.to("job3", 2, {
        opacity: 1,
        y: -300,
        delay: 3.3,
        ease: Power2.easeInOut
    })
}

function projects() {
    TweenMax.to(".btn1", 1, {
        y: -100,
        opacity: 0,
    });

    TweenMax.to(".btn2", 1, {
        y: -100,
        opacity: 0,
        delay: 0.4
    });

    TweenMax.to(".btn3", 1, {
        y: -100,
        opacity: 0,
        delay: 0.8
    });

    TweenMax.to(".screen", 2, {
        y: -400,
        opacity: 0,
        ease: Back.easeIn,
        delay: 1.1
    });

    TweenMax.to(".content", 2, {
        opacity: 0,
    });

    TweenMax.to(".job", 2, {
        opacity: 0,
    });

    TweenMax.from(".overlay1", 2, {
        ease: Power2.easeInOut,
    });

    TweenMax.to(".overlay1", 2, {
        delay: 2.1,
        top: "-120%",
        ease: Expo.easeInOut,
    });

    TweenMax.to(".overlay2", 2, {
        opacity: 0,
    });

    TweenMax.from(".overlay3", 2, {
        opacity: 0,
    });

    TweenMax.to("#about", 2, {
        opacity: 0,
    });

    TweenMax.to(".overlay3", 2, {
        delay: 2.3,
        opacity: 1,
        top: "-120%",
        ease: Expo.easeInOut
    });

    TweenMax.from(".prjct", 2, {
        delay: 3,
        opacity: 0,
        ease: Power2.easeInOut
    });

    TweenMax.to(".prjct", 2, {
        opacity: 1,
        y: 300,
        delay: 3.3,
        ease: Power2.easeInOut
    })
}

function aboutMeNav() {

    TweenMax.to("#projects", 2, {
        opacity: 0,
    });

    TweenMax.to(".overlay3", 2, {
        opacity: 0,
    });

    TweenMax.to(".overlay2", 2, {
        delay: 2.7,
        top: "-120%",
        ease: Expo.easeInOut
    });

    TweenMax.from(".content", 2, {
        delay: 3,
        opacity: 0,
        ease: Power2.easeInOut
    });

    TweenMax.to("content", 2, {
        opacity: 1,
        y: -300,
        delay: 3.3,
        ease: Power2.easeInOut
    })

    TweenMax.from(".job1", 2, {
        delay: 3.6,
        opacity: 0,
        ease: Power2.easeInOut
    });

    TweenMax.to("job1", 2, {
        opacity: 1,
        y: -300,
        delay: 3.3,
        ease: Power2.easeInOut
    })

    TweenMax.from(".job2", 2, {
        delay: 3.9,
        opacity: 0,
        ease: Power2.easeInOut
    });

    TweenMax.to("job2", 2, {
        opacity: 1,
        y: -300,
        delay: 3.3,
        ease: Power2.easeInOut
    })

    TweenMax.from(".job3", 2, {
        delay: 4.3,
        opacity: 0,
        ease: Power2.easeInOut
    });

    TweenMax.to("job3", 2, {
        opacity: 1,
        y: -300,
        delay: 3.3,
        ease: Power2.easeInOut
    })
}

function projectsNav() {
    TweenMax.to(".screen", 2, {
        y: -400,
        opacity: 0,
        ease: Back.easeIn,
        delay: 1.1
    });

    TweenMax.to(".content", 2, {
        opacity: 0,
    });

    TweenMax.to(".job", 2, {
        opacity: 0,
    });

    TweenMax.from(".overlay1", 2, {
        ease: Power2.easeInOut,
    });

    TweenMax.to(".overlay1", 2, {
        delay: 2.1,
        top: "-120%",
        ease: Expo.easeInOut,
    });

    TweenMax.to(".overlay2", 2, {
        opacity: 0,
    });

    TweenMax.from(".overlay3", 2, {
        opacity: 0,
    });

    TweenMax.to("#about", 2, {
        opacity: 0,
    });

    TweenMax.to(".overlay3", 2, {
        delay: 2.3,
        opacity: 1,
        top: "-120%",
        ease: Expo.easeInOut
    });

    TweenMax.from(".prjct", 2, {
        delay: 3,
        opacity: 0,
        ease: Power2.easeInOut
    });

    TweenMax.to(".prjct", 2, {
        opacity: 1,
        y: 300,
        delay: 3.3,
        ease: Power2.easeInOut
    })
}