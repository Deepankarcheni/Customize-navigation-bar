// Smooth Scroll for Navigation Links
document.querySelectorAll('.navigation a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault(); // Prevent default anchor behavior
      const targetId = this.getAttribute('href').substring(1); // Get target section ID
      const targetSection = document.getElementById(targetId);
  
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 60, // Adjust for header height
          behavior: 'smooth', // Smooth scroll effect
        });
      }
    });
  });
  
  // Scroll Effect for Sticky Header
  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }
  });
  
  // Dynamic Year in Footer
  const footer = document.querySelector('footer');
  const yearSpan = document.createElement('span');
  yearSpan.textContent = new Date().getFullYear();
  footer.appendChild(yearSpan);
  
  // Show Alert on Portfolio Item Click
  document.querySelectorAll('.portfolio-item').forEach(item => {
    item.addEventListener('click', () => {
      alert('Thank you for viewing this project! More details coming soon.');
    });
  });