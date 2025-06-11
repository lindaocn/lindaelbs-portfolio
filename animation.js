document.addEventListener('DOMContentLoaded', () => {
    const arrowSlider = document.querySelector('.arrow-slider a');
  
    arrowSlider.addEventListener('click', (event) => {
      event.preventDefault(); // Verhindert das normale Springen zum Linkziel
      
      window.scrollTo({
        top: 0, // Scrollt nach ganz oben
        behavior: 'smooth' // Sorgt für die sanfte Scroll-Animation
      });
    });
  });

  document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.header-list-item');
  
    navLinks.forEach(link => {
      link.addEventListener('click', (event) => {
        const targetId = link.getAttribute('href'); // Holt die ID des Ziels (z. B. #about-linda)
  
        if (targetId.startsWith('#') && targetId.length > 1) {
          event.preventDefault(); // Verhindert das Standardverhalten
          const targetElement = document.querySelector(targetId);
  
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        }
      });
    });
  });

  document.addEventListener('DOMContentLoaded', () => {
    const allLinks = document.querySelectorAll('.header-list-item, .contact-button a');
  
    allLinks.forEach(link => {
      link.addEventListener('click', (event) => {
        const targetId = link.getAttribute('href'); // Holt die ID des Ziels (z. B. #contact-me)
  
        if (targetId.startsWith('#') && targetId.length > 1) {
          event.preventDefault(); // Verhindert das Standardverhalten
          const targetElement = document.querySelector(targetId);
  
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        }
      });
    });
  });

/* Hamburger Menu anzeigen- Seiten*/
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const headerPages = document.querySelector('.header-pages');
  let isOpen = false;

  menuToggle.addEventListener('click', () => {
    if (!isOpen) {
      openMenu();
    } else {
      closeMenu();
    }
  });

  function openMenu() {
    headerPages.style.display = 'flex';
    requestAnimationFrame(() => {
      headerPages.style.transform = 'scaleY(1)';
      headerPages.style.opacity = '1';
    });
    isOpen = true;
  }

  function closeMenu() {
    headerPages.style.transform = 'scaleY(0)';
    headerPages.style.opacity = '0';
    
    headerPages.addEventListener('transitionend', () => {
      if (!isOpen) {
        headerPages.style.display = 'none';
      }
    }, { once: true });

    isOpen = false;
  }
});

// Smooth übergang
document.addEventListener("DOMContentLoaded", () => {
  const lenis = new Lenis();

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
});

