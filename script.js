        let currentIndex = 0;
        const slides = document.querySelectorAll('.slide');

        function showNextSlide() {
            slides[currentIndex].classList.remove('active');
            currentIndex = (currentIndex + 1) % slides.length;
            slides[currentIndex].classList.add('active');
        }

        setInterval(showNextSlide, 2000); // Change slide every 2 seconds