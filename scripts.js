// Wait until DOM fully loads
document.addEventListener("DOMContentLoaded", () => {

    // Toggle Mobile Menu
    const mobileMenu = document.getElementById('mobileMenu');
    const navLinks = document.getElementById('navLinks');

    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');

            const icon = mobileMenu.querySelector('i');

            if (icon) {
                if (icon.classList.contains('fa-bars')) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-times');
                } else {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });
    }

    // Smooth Active Navigation Tracking on Scroll
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-links a');

    if (sections.length && navItems.length) {
        window.addEventListener('scroll', () => {
            let current = '';

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;

                if (window.pageYOffset >= (sectionTop - sectionHeight / 3)) {
                    current = section.getAttribute('id');
                }
            });

            navItems.forEach(item => {
                item.classList.remove('active');

                if (item.getAttribute('href').slice(1) === current) {
                    item.classList.add('active');
                }
            });
        });
    }

    // Close Mobile Navbar on Link Click
    if (navItems.length) {
        navItems.forEach(link => {
            link.addEventListener('click', () => {

                if (navLinks) {
                    navLinks.classList.remove('active');
                }

                if (mobileMenu) {
                    const icon = mobileMenu.querySelector('i');

                    if (icon) {
                        icon.classList.remove('fa-times');
                        icon.classList.add('fa-bars');
                    }
                }
            });
        });
    }

    // Form Submission Alert Placeholder
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            alert('Thank you! Your message has been sent successfully.');

            this.reset();
        });
    }

});