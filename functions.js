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

            // Scroll to the target element
            target.scrollIntoView({
                behavior: 'smooth'  // Smooth scrolling
            });
        });
    }
});


