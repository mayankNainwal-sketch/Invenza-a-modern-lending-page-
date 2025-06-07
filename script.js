const video = document.getElementById('video1');
const playIcon = document.getElementById('playIcon');
const slides = document.querySelectorAll('.testimonial-slide');
const dots = document.querySelectorAll('.testimonial-controls .dot');
const form = document.querySelector('.contact-form form');
const send_button = document.getElementById('send');
let currentSlide = 0;
// Toggle play/pause on video click
video.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        playIcon.style.display = 'none';

    } else {
        video.pause();
        playIcon.style.display = 'block'; 

    }
});


// Show play icon when video is paused
video.addEventListener('pause', () => {
    playIcon.style.display = 'block';
});

// Hide play icon when video is playing
video.addEventListener('play', () => {
    playIcon.style.display = 'none';
});

// Allow clicking the play icon to play the video
playIcon.addEventListener('click', () => {
    video.play();
    playIcon.style.display = 'none';
});



function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        dots[i].classList.remove('active'); // Deactivate all dots

        if (i === index) {
            slide.classList.add('active');
            dots[i].classList.add('active'); // Activate the corresponding dot

        }
    });
}

 // Add click event to each dot
 dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide = index; // Update the current slide index
        showSlide(currentSlide); // Show the selected slide
    });
});


// Auto-slide every 5 seconds
setInterval(() => {
    currentSlide = (currentSlide === slides.length - 1) ? 0 : currentSlide + 1;
    showSlide(currentSlide);
}, 5000);

// submit functionality
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get the input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Validate the inputs
    if (name && email && message) {
        alert(`Message sent!\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);
        // Reset form fields
        form.reset();
    } else {
        alert('Please fill in all fields.');
    }
});




// Modal functionality
const modal = document.getElementById('authModal');
const closeModal = document.getElementById('closeModal');
const tryButtons = document.querySelectorAll('.try-free-btn, .hero-button button');
const loginTab = document.getElementById('loginTab');
const signupTab = document.getElementById('signupTab');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');

// Show modal on "Try for Free" click
tryButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });
});

// Close modal
closeModal.onclick = function() {
    modal.style.display = 'none';
    document.body.style.overflow = '';
};
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }
};

// Tab switching
loginTab.onclick = function() {
    loginTab.classList.add('active');
    signupTab.classList.remove('active');
    loginForm.style.display = 'flex';
    signupForm.style.display = 'none';
};
signupTab.onclick = function() {
    signupTab.classList.add('active');
    loginTab.classList.remove('active');
    signupForm.style.display = 'flex';
    loginForm.style.display = 'none';
};

// Dummy login/signup handlers
loginForm.onsubmit = function(e) {
    e.preventDefault();
    alert('Logged in as: ' + document.getElementById('loginEmail').value);
    modal.style.display = 'none';
    document.body.style.overflow = '';
};
signupForm.onsubmit = function(e) {
    e.preventDefault();
    alert('Signed up as: ' + document.getElementById('signupEmail').value);
    modal.style.display = 'none';
    document.body.style.overflow = '';
};





// Payment Modal Logic
const paymentModal = document.getElementById('paymentModal');
const closePaymentModal = document.getElementById('closePaymentModal');
const orderButtons = document.querySelectorAll('.order-button');
const paymentForm = document.getElementById('paymentForm');
const paymentSuccess = document.getElementById('paymentSuccess');

// Show payment modal on "Order Now" click
orderButtons.forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        paymentModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        paymentForm.reset();
        paymentSuccess.style.display = 'none';
    });
});

// Close payment modal
closePaymentModal.onclick = function() {
    paymentModal.style.display = 'none';
    document.body.style.overflow = '';
};
window.addEventListener('click', function(event) {
    if (event.target == paymentModal) {
        paymentModal.style.display = 'none';
        document.body.style.overflow = '';
    }
});

// Payment form submission (demo)
paymentForm.onsubmit = function(e) {
    e.preventDefault();
    paymentSuccess.style.display = 'block';
    setTimeout(() => {
        paymentModal.style.display = 'none';
        document.body.style.overflow = '';
    }, 1800);
};
