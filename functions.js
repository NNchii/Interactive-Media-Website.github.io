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

var slideIndex = 1;

function plusSlides(n) {
  slideIndex += n;
  showSlides(slideIndex);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  
  slides[slideIndex-1].style.display = "block";  
}

// Call the function once when the page loads
showSlides(slideIndex);











