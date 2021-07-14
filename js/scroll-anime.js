// Animação junto com o scroll
const targets = document.querySelectorAll('[data-anime="scroll"]'), animationClass = 'animate', offset = (window.innerHeight * 3 / 4) + 100;

function animateScroll(){
    let documentTop = document.documentElement.scrollTop;
    targets.forEach( (target) => {
        let targetTop = target.offsetTop;
        documentTop > targetTop - offset ? target.classList.add(animationClass) : target.classList.remove(animationClass);
    });
}

animateScroll();
document.addEventListener('scroll', animateScroll);