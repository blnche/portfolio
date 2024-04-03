window.addEventListener('DOMContentLoaded', () => {

    const navButton = document.getElementById('navButton');
    const nav = document.getElementById('nav');
    const navLinks = document.querySelectorAll('nav li a');
    const html = document.querySelector('html');

    const toggleNav = () => {

        navButton.addEventListener('click', () => {
            navStatus();
        })

        navLinks.forEach(link => link.addEventListener('click', () => {
            navStatus();
            })
        );
    }

    const navStatus = () => {
        
        if(window.getComputedStyle(nav).display === 'none') {
            navButton.classList.add('open');
            navButton.classList.remove('close');

            nav.style.display = 'block';

            html.style.overflowY = 'hidden';

        } else if (window.getComputedStyle(nav).display === 'block') {

            navButton.classList.add('close');
            navButton.classList.remove('open');

            nav.style.display = 'none';

            html.style.overflowY = 'auto';
        }
    }
    
    if (window.innerWidth > 768) {
        nav.classList.add('nav-desktop');
    } else {
        toggleNav();
        nav.classList.add('nav-mobile');
    }

    html.addEventListener('wheel', (event) => {
        if((event.deltaY === 100) || (event.deltaY === -100)) {
            event.preventDefault();
            html.scrollBy({
                top: event.deltaY,
                behavior: 'smooth'
            });
        }
    })
});