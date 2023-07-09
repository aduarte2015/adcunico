document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', smoothScroll);
});

function smoothScroll(event) {
  event.preventDefault();
  const targetId = this.getAttribute('href').substring(1);
  const targetElement = document.getElementById(targetId);

  if (targetElement) {
    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: 'smooth' // Add smooth scrolling behavior
    });
  }
}
  
  // Parallax effect
  window.addEventListener('scroll', function () {
    var scrollPosition = window.pageYOffset;
    const parallax = document.querySelector('#header');
  
    parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
  });

  window.addEventListener('scroll', function () {
    var scrollPosition = window.pageYOffset;
    const parallax = document.querySelector('#about');
  
    parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
  });
  