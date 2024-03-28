window.addEventListener('DOMContentLoaded', () => {

    const navButton = document.getElementById('navButton');
    const nav = document.getElementById('nav');
    const navLinks = document.querySelectorAll('nav li a');

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

        } else if (window.getComputedStyle(nav).display === 'block') {

            navButton.classList.add('close');
            navButton.classList.remove('open');

            nav.style.display = 'none';
        }
    }

    toggleNav();
})