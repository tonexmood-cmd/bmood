document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('.nav-menu-btn');
  const mobileNav = document.querySelector('.mobile-nav');

  if (menuBtn && mobileNav) {
    menuBtn.addEventListener('click', () => {
      mobileNav.classList.toggle('open');
    });
  }

  /* Shop filter */
  const filterBtns = document.querySelectorAll('.filter-bar .filters button');
  const cards = document.querySelectorAll('.product-grid .product-card');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      const category = btn.dataset.filter;

      cards.forEach((card) => {
        const match = category === 'all' || card.dataset.category === category;
        card.style.display = match ? 'flex' : 'none';
      });
    });
  });

  /* Product detail option toggles */
  document.querySelectorAll('.option-row').forEach((row) => {
    row.querySelectorAll('button').forEach((btn) => {
      btn.addEventListener('click', () => {
        row.querySelectorAll('button').forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
      });
    });
  });

  document.querySelectorAll('.swatch-row').forEach((row) => {
    row.querySelectorAll('button').forEach((btn) => {
      btn.addEventListener('click', () => {
        row.querySelectorAll('button').forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
      });
    });
  });

  /* Quantity stepper */
  const qtyValue = document.querySelector('.qty-value');
  const qtyMinus = document.querySelector('.qty-minus');
  const qtyPlus = document.querySelector('.qty-plus');

  if (qtyValue && qtyMinus && qtyPlus) {
    qtyMinus.addEventListener('click', () => {
      const current = parseInt(qtyValue.textContent, 10);
      if (current > 1) qtyValue.textContent = current - 1;
    });
    qtyPlus.addEventListener('click', () => {
      const current = parseInt(qtyValue.textContent, 10);
      qtyValue.textContent = current + 1;
    });
  }

  /* Add to cart feedback */
  const addToCartBtn = document.querySelector('.add-to-cart');
  if (addToCartBtn) {
    addToCartBtn.addEventListener('click', () => {
      const original = addToCartBtn.textContent;
      addToCartBtn.textContent = 'Added to Cart';
      setTimeout(() => { addToCartBtn.textContent = original; }, 1800);
    });
  }

  /* Contact form */
  const contactForm = document.getElementById('contact-form');
  const formSuccess = document.querySelector('.form-success');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      contactForm.style.display = 'none';
      if (formSuccess) formSuccess.classList.add('show');
    });
  }

  /* Newsletter */
  const newsletterRow = document.querySelector('.newsletter-input-row');
  if (newsletterRow) {
    const btn = newsletterRow.querySelector('button');
    const input = newsletterRow.querySelector('input');
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (input.value.trim()) {
        btn.textContent = 'Subscribed';
        input.value = '';
        setTimeout(() => { btn.textContent = 'Subscribe'; }, 2000);
      }
    });
  }
});
