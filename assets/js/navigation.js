document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.navigation-link');
  
    function updateActiveSection() {
      let current = '';
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - sectionHeight/3)) {
          current = section.getAttribute('id');
        }
      });
  
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
          link.classList.add('active');
        }
      });
    }
  
    window.addEventListener('scroll', updateActiveSection);
    updateActiveSection();
  });

  // Visual Resume Modal functionality
  function openVisualResumeModal() {
    const modal = document.getElementById('visualResumeModal');
    const modalImg = document.getElementById('visualResumeModalImg');
    const img = document.querySelector('.visual-resume-svg');

    modal.classList.add('show');
    modalImg.src = img.src;
    modalImg.alt = img.alt;
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  }

  function closeVisualResumeModal() {
    const modal = document.getElementById('visualResumeModal');
    modal.classList.remove('show');
    document.body.style.overflow = 'auto'; // Restore scrolling
  }

  // Close modal on ESC key
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      closeVisualResumeModal();
    }
  });

  // Allow zooming on the modal image
  document.addEventListener('DOMContentLoaded', function() {
    const modalImg = document.getElementById('visualResumeModalImg');
    if (modalImg) {
      modalImg.addEventListener('click', function(e) {
        e.stopPropagation(); // Prevent closing modal when clicking image
        this.classList.toggle('zoomed');
      });
    }
  });