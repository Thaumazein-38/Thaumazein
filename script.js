document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    const slideInterval = 4000; // 4 seconds per slide

    if (slides.length === 0) return;

    function nextSlide() {
        // Remove active class from current slide
        slides[currentSlide].classList.remove('active');
        
        // Move to the next slide, or loop back to 0
        currentSlide = (currentSlide + 1) % slides.length;
        
        // Add active class to new current slide
        slides[currentSlide].classList.add('active');
    }

    // Start the automatic slideshow
    setInterval(nextSlide, slideInterval);

    // Domain Expansion Effect (Every 10 seconds)
    const domainOverlay = document.getElementById('domain-expansion-overlay');
    
    if (domainOverlay) {
        setInterval(() => {
            // Trigger Domain Expansion
            domainOverlay.classList.add('active');
            
            // Remove it after 4 seconds to go back to normal
            setTimeout(() => {
                domainOverlay.classList.remove('active');
            }, 4000);
            
        }, 10000); // 10 seconds interval
    }

    // Chainsaw Man Denji Effect (Every 3 seconds)
    const denjiOverlay = document.getElementById('denji-overlay');
    
    if (denjiOverlay) {
        setInterval(() => {
            // Trigger Denji Effect
            denjiOverlay.classList.add('active');
            
            // Add cut effect to body when slash happens (1s after Denji appears)
            setTimeout(() => {
                document.body.classList.add('screen-cut');
            }, 1000);
            
            // Clean up after animation finishes
            setTimeout(() => {
                denjiOverlay.classList.remove('active');
                document.body.classList.remove('screen-cut');
            }, 2500);
            
        }, 3000); // 3 seconds interval
    }
});
