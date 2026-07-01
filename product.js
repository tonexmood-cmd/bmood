const PRODUCTS = {
  beads: {
    name: 'Beads Keyring',
    price: '₩28,000',
    image: 'a.png',
    desc: '천연석 비즈를 한 알씩 엮어 만든 키링입니다. 매끈한 표면과 자연스러운 색의 변주가 특징이며, 손에 닿을 때마다 잔잔한 안정감을 줍니다.',
    colors: [
      { hex: '#8a7256', label: '천연석' },
      { hex: '#c9c2b4', label: '실버' },
      { hex: '#b08d57', label: '골드' },
    ],
  },
  flower: {
    name: 'Flower Keyring',
    price: '₩32,000',
    image: 'b.png',
    desc: '글라스 비즈로 피어낸 플라워 모티브 키링입니다. 빛에 따라 달라지는 투명한 색감이 특징이며, 가볍게 포인트를 주기 좋습니다.',
    colors: [
      { hex: '#c9c2b4', label: '글라스' },
      { hex: '#b08d57', label: '골드' },
    ],
  },
};

document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id') || 'beads';
  const product = PRODUCTS[id] || PRODUCTS.beads;

  document.getElementById('product-image').src = product.image;
  document.getElementById('product-image').alt = product.name;
  document.getElementById('product-name').textContent = product.name;
  document.getElementById('product-price').textContent = product.price;
  document.getElementById('product-desc').textContent = product.desc;
  document.title = `${product.name} — bmood`;

  const colorRow = document.getElementById('color-row');
  colorRow.innerHTML = '';
  product.colors.forEach((color, i) => {
    const btn = document.createElement('button');
    btn.style.background = color.hex;
    btn.dataset.color = color.label;
    btn.title = color.label;
    if (i === 0) btn.classList.add('active');
    btn.addEventListener('click', () => {
      colorRow.querySelectorAll('button').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
    });
    colorRow.appendChild(btn);
  });
});
