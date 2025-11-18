// Basic JS: menu toggle, smooth scrolling, and form submit hint
document.addEventListener('DOMContentLoaded', function(){
    const menuToggle = document.getElementById('menuToggle');
    const nav = document.getElementById('nav');
    menuToggle && menuToggle.addEventListener('click', () => {
      nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
    });
  
    // Smooth scroll for internal links
    document.querySelectorAll('a[href^="#"]').forEach(a=>{
      a.addEventListener('click', function(e){
        const target = document.querySelector(this.getAttribute('href'));
        if(target){
          e.preventDefault();
          target.scrollIntoView({behavior:'smooth', block:'start'});
        }
      });
    });
  
    // Form submit feedback (Formspree handles actual submission)
    const form = document.getElementById('appointmentForm');
    if(form){
      form.addEventListener('submit', function(e){
        // let Formspree handle submission; show a small notice
        const btn = form.querySelector('button[type="submit"]');
        btn.disabled = true;
        btn.textContent = 'Sending...';
        // No need to preventDefault — Formspree will POST and redirect (or respond)
        setTimeout(()=> {
          btn.disabled = false;
          btn.textContent = 'Submit';
        }, 5000);
      });
    }
  });