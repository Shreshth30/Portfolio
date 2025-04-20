// Create and append ScrollReveal script
const script = document.createElement('script');
script.src = 'https://unpkg.com/scrollreveal@4.0.9/dist/scrollreveal.min.js';
script.async = true;

script.onload = function() {
    // Initialize ScrollReveal after script is loaded
    const sr = ScrollReveal({
        origin: 'bottom',
        distance: '60px',
        duration: 1500,
        delay: 400,
        easing: 'cubic-bezier(0.5, 0, 0, 1)',
        reset: true,
        mobile: true,
        viewFactor: 0.2
    });

    // Reveal animations for sections with more dynamic configurations
    sr.reveal('.hero', { 
        origin: 'left',
        distance: '100px',
        duration: 2000,
        delay: 200
    });
    
    sr.reveal('#about', { 
        origin: 'right',
        distance: '80px',
        duration: 1800,
        delay: 300
    });
    
    sr.reveal('#skills .bg-white', { 
        interval: 200,
        scale: 0.9,
        distance: '40px',
        origin: 'bottom',
        delay: 200
    });
    
    sr.reveal('#experience .bg-gray-700', { 
        interval: 300,
        origin: 'left',
        distance: '50px'
    });
    
    sr.reveal('#projects .bg-[#2F365F]', { 
        interval: 300,
        origin: 'right',
        distance: '50px'
    });
    
    sr.reveal('#internships .bg-gray-700', { 
        interval: 300,
        origin: 'bottom',
        distance: '40px'
    });
    
    sr.reveal('#certs .bg-gray-700', { 
        interval: 300,
        scale: 0.95,
        origin: 'bottom',
        distance: '30px'
    });
};

document.head.appendChild(script);

// Dynamic text animation for hero section
class TypeWriter {
    constructor(txtElement, words, wait = 3000) {
        this.txtElement = txtElement;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.type();
        this.isDeleting = false;
    }

    type() {
        const current = this.wordIndex % this.words.length;
        const fullTxt = this.words[current];

        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

        let typeSpeed = 100;

        if (this.isDeleting) {
            typeSpeed /= 2;
        }

        if (!this.isDeleting && this.txt === fullTxt) {
            typeSpeed = this.wait;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.wordIndex++;
            typeSpeed = 500;
        }

        setTimeout(() => this.type(), typeSpeed);
    }
}

// Initialize TypeWriter when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const txtElement = document.querySelector('.text-2xl');
    const words = ['A passionate AI-Enabled Full Stack Developer', 'A Data Engineer', 'A Problem Solver', 'A Tech Enthusiast', 'A Hobbyist Painter', 'A Hobbyist Musician', 'A Hobbyist Photographer'];
    new TypeWriter(txtElement, words);

    // Add floating animation to profile image
    const profileImage = document.querySelector('.hero .w-200');
    profileImage.style.animation = 'float 6s ease-in-out infinite';
});

// Add floating animation keyframes
const style = document.createElement('style');
style.textContent = `
@keyframes float {
    0% {
        transform: translateY(0px);
    }
    50% {
        transform: translateY(-20px);
    }
    100% {
        transform: translateY(0px);
    }
}

.hero .w-200 {
    transition: transform 0.3s ease;
}

.bg-white {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.bg-white:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.2);
}
`;
document.head.appendChild(style);