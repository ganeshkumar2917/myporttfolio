const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.background = 'white';
        body.style.color = 'black';
        body.style.transition = '2s';
       
    }else{
        body.style.background = 'black';
        body.style.color = 'white';
        body.style.transition = '2s';
    }
  
    
});




ScrollReveal({
    reset: true,
    distance: '80px',
    duration:2000,
    delay: 200
});

ScrollReveal().reveal('.home-content,.heading', { origin: 'top' });

ScrollReveal().reveal('.home-img img,.services-container,.portfolio-box,.testimonial-wrapper,.contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1,.about-img img', { origin: 'left' });
ScrollReveal().reveal('.home-content h3,.home-content p,.about-content', { origin: 'right' });