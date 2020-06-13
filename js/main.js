let userIcon = document.querySelector('.user-header__icon');

userIcon.addEventListener("click", function(e) {
    let userMenu = document.querySelector('.user-header__menu');
    userMenu.classList.toggle('_active');
});

let burgerMenu = document.querySelector('.icon-menu');

burgerMenu.addEventListener("click", function(e) {
    let menuBody = document.querySelector(".menu__body");
    menuBody.classList.toggle('_active');
    burgerMenu.classList.toggle('_krest');
    const menuLinks = document.querySelectorAll('.menu__link');
    if(window.innerWidth <= 767) {
        for ( let i = 0; i < menuLinks.length; i++){
            menuLinks[i].addEventListener('click', () => {
                menuBody.classList.remove('_active');
            });
        }
    }
})

document.documentElement.addEventListener("click", function(e) {
    if(!e.target.closest('.user-header')) {
        let userMenu = document.querySelector('.user-header__menu');
        userMenu.classList.remove('_active');
    }
})

//smoothScroll
(function () {

    const smoothScroll = function (targetEl, duration) {
        const headerElHeight =  document.querySelector('.header').clientHeight;
        let target = document.querySelector(targetEl);
        let targetPosition = target.getBoundingClientRect().top - headerElHeight;
        let startPosition = window.pageYOffset;
        let startTime = null;
    
        const ease = function(t,b,c,d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };
    
        const animation = function(currentTime){
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, targetPosition, duration);
            window.scrollTo(0,run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };
        requestAnimationFrame(animation);

    };

    const scrollTo = function () {
        const links = document.querySelectorAll('.js-scroll');
        links.forEach(each => {
            each.addEventListener('click', function () {
                const currentTarget = this.getAttribute('href');
                smoothScroll(currentTarget, 1000);
            });
        });
    };
    scrollTo();
}());