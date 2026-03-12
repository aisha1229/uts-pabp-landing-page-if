window.addEventListener('scroll', function() {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 50) {
        nav.classList.add('sticky');
    } else {
        nav.classList.remove('sticky');
    }
});
window.addEventListener('load', () => {
    const bubble = document.getElementById('welcome-bubble');
    const closeBtn = document.getElementById('close-bubble');
    setTimeout(() => {
        bubble.classList.remove('bubble-hidden');
        bubble.classList.add('bubble-visible');
    }, 2000);
    closeBtn.addEventListener('click', () => {
        bubble.classList.remove('bubble-visible');
        bubble.classList.add('bubble-hidden');
    });
});
function revealElements() {
    const reveals = document.querySelectorAll('.reveal');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revealElements);

console.log("Website Prodi Informatika UNSIL Loaded Successfully!");

window.onload = revealElements;