function toggleMobileMenu() {
    const mobileNav = document.getElementById('mobileNav');
    mobileNav.classList.toggle('active');
    document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : 'auto';
}

document.addEventListener('click', function(event) {
    const mobileNav = document.getElementById('mobileNav');
    const trigger = document.querySelector('.mobile-menu-trigger');
    
    if (!mobileNav.contains(event.target) && !trigger.contains(event.target)) {
        mobileNav.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        document.getElementById('mobileNav').classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Tab functionality
function openTab(evt, tabName) {
    const tabContents = document.getElementsByClassName("tab-content");
    const tabButtons = document.getElementsByClassName("tab-button");

    // Hide all tab content
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove("active");
    }

    // Remove active class from all buttons
    for (let i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove("active");
    }

    // Show selected tab and mark button active
    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
}

// Accordion functionality
function toggleAccordion(button) {
    const content = button.parentElement.querySelector('.accordion-content');
    const icon = button.querySelector('.accordion-icon');
    
    content.classList.toggle('active');
    icon.textContent = content.classList.contains('active') ? '−' : '+';
}

// Tour button interaction
document.querySelectorAll('.tour-button').forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        // Add your booking logic here
        alert('Thank you! Our admissions team will contact you shortly.');
    })// Carousel functionality
    let slideIndex = 0;
    showSlides(slideIndex);
    
    function moveSlide(n) {
        showSlides(slideIndex += n);
    }
    
    function showSlides(n) {
        const slides = document.getElementsByClassName("carousel-slide");
        
        if (n >= slides.length) slideIndex = 0;
        if (n < 0) slideIndex = slides.length - 1;
        
        for (let i = 0; i < slides.length; i++) {
            slides[i].classList.remove("active");
        }
        
        slides[slideIndex].classList.add("active");
    }
    
    // Auto-advance carousel every 5 seconds
    setInterval(() => {
        moveSlide(1);
    }, 5000);;
});


