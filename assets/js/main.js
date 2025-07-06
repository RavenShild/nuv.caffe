const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('open');
});

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

const form = document.getElementById('formContato');
if (form) {
  const status = document.getElementById('status');
  form.addEventListener('submit', e => {
    e.preventDefault();
    const nome = form.nome.value.trim();
    const email = form.email.value.trim();
    const mensagem = form.mensagem.value.trim();

    if (!nome || !email || !mensagem) {
      status.textContent = 'Por favor, preencha todos os campos.';
      status.style.color = 'red';
    } else {
      status.textContent = 'Obrigado! Entraremos em contato em breve.';
      status.style.color = 'green';
      form.reset();
    }
  });
}

const carouselSlides = document.querySelectorAll('.slideshow .slide');
let current = 0;

setInterval(() => {
  carouselSlides[current].classList.remove('active');
  current = (current + 1) % carouselSlides.length;
  carouselSlides[current].classList.add('active');
}, 5000);

document.addEventListener('DOMContentLoaded', () => {
  const promoModal     = document.getElementById('promoModal');
  const closeBtn       = promoModal.querySelector('.close');
  const promoForm      = document.getElementById('promoForm');
  const formContainer  = document.getElementById('promoFormContainer');
  const couponContainer= document.getElementById('couponContainer');
  const closeCouponBtn = document.getElementById('closeCoupon');

  
  if (!localStorage.getItem('promoSeen')) {
    promoModal.classList.add('show');
  }


  closeBtn.addEventListener('click', () => {
    promoModal.classList.remove('show');
    localStorage.setItem('promoSeen', 'true');
  });

 
  promoForm.addEventListener('submit', e => {
    e.preventDefault();
  
    const name  = document.getElementById('promoName').value.trim();
    const phone = document.getElementById('promoPhone').value.trim();
    if (!name || !phone) return;

    formContainer.style.display   = 'none';
    couponContainer.style.display = 'block';

    localStorage.setItem('promoSeen', 'true');
  });

  closeCouponBtn.addEventListener('click', () => {
    promoModal.classList.remove('show');
  });
});