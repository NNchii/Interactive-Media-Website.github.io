window.addEventListener("DOMContentLoaded", function() {
    // Get all links with hashes
    var links = document.querySelectorAll('a[href*="#"]');

    // Loop through the links
    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener('click', function(event) {
            // Prevent the default link behavior
            event.preventDefault();

            // Get the target element
            var target = document.querySelector(this.getAttribute('href'));

            // Scroll to the target element with a custom speed
            scrollToElement(target, 1000);  // 1000 ms = 1 second
        });
    }
});

function scrollToElement(element, duration) {
    var start = window.pageYOffset;
    var target = element.getBoundingClientRect().top;
    var startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed, start, target, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}

var btn = document.getElementById("back-to-top-btn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};

// When the user clicks on the button, scroll to the top of the document
btn.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

var slideIndex1 = 0;
var slideIndex2 = 0;

// Automatically change slides every 2 seconds
setInterval(function() {
    plusSlides1(1);
    plusSlides2(1);
}, 4000);

function plusSlides1(n) {
    showSlides1(slideIndex1 += n);
}

function plusSlides2(n) {
    showSlides2(slideIndex2 += n);
}

function showSlides1(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides1");
    if (n > slides.length) {slideIndex1 = 1}    
    if (n < 1) {slideIndex1 = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove('show');
    }
    slides[slideIndex1-1].classList.add('show');
}

function showSlides2(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides2");
    if (n > slides.length) {slideIndex2 = 1}    
    if (n < 1) {slideIndex2 = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove('show');
    }
    slides[slideIndex2-1].classList.add('show');
}
