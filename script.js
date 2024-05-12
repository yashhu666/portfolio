window.addEventListener('scroll', function() {
  var elements = document.querySelectorAll('#h1, #h2, #who, #art, #cntct, #background, #discord, #coder, #education');
  var windowHeight = window.innerHeight;

  elements.forEach(function(element) {
    var elementTop = element.getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      element.classList.add('visible');
    } else {
      element.classList.remove('visible');
    }
  });
});
