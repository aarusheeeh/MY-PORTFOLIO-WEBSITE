/*========== scroll section active link==========*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })

        };
    });
    /*========== sticky navbar==========*/
    let header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 100);
};

/*========== dark light mode ==========*/
let darkModeIcon = document.querySelector('#darkMode-icon');

// Set default mode to dark
document.body.classList.add('dark-mode');
darkModeIcon.classList.add('bx-sun');

darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
};
/*========== scroll reveal ==========*/
ScrollReveal({
    // reset: true,
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading',{ origin: 'top'});
ScrollReveal().reveal('.portfolio-box, .about-img img, .contact form',{ origin: 'bottom'});
ScrollReveal().reveal('.home-content h1',{ origin: 'left'});
ScrollReveal().reveal('.home-content h3, .home-content p, .about-content',{ origin: 'right'});



