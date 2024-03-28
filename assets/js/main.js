window.addEventListener('DOMContentLoaded', () => {

    const toggleNav = () => {
        const navButton = document.getElementById('navButton');
        const nav = document.getElementById('nav');

        navButton.addEventListener('click', () => {
            if(navButton.classList.contains('close')) {
                console.log('nav is close');
                navButton.classList.add('open');
                navButton.classList.remove('close');

                nav.style.display = 'block';

            } else {
                console.log('nav is open');
                navButton.classList.add('close');
                navButton.classList.remove('open');

                nav.style.display = 'none';
            }
        })
    }

    toggleNav();
})