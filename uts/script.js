

const products = [
  { id: 1, name: 'Produk 1', price: 10 },
  { id: 2, name: 'Produk 2', price: 15 },
  { id: 3, name: 'Produk 3', price: 20 },
];

let cart = [];

function showPage(pageId) {
  document.querySelectorAll('.page').forEach(page => page.classList.add('hidden'));
  document.getElementById(pageId).classList.remove('hidden');
}

function renderProducts() {
  const productList = document.getElementById('product-list');
  productList.innerHTML = '';
  products.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.className = 'product';
    productDiv.innerHTML = `
      <h3>${product.name}</h3>
      <p>Harga: $${product.price}</p>
      <button onclick="addToCart(${product.id})">Tambahkan</button>
    `;
    productList.appendChild(productDiv);
  });
}

function renderCart() {
  const cartList = document.getElementById('cart-list');
  cartList.innerHTML = '';
  let total = 0;
  cart.forEach(item => {
    total += item.price * item.quantity;
    const cartItem = document.createElement('div');
    cartItem.className = 'cart-item';
    cartItem.innerHTML = `
      <h4>${item.name}</h4>
      <p>Harga: $${item.price}</p>
      <p>Kuantitas: 
        <button onclick="updateCart(${item.id}, -1)">-</button>
        ${item.quantity}
        <button onclick="updateCart(${item.id}, 1)">+</button>
      </p>
      <button onclick="removeFromCart(${item.id})">Hapus</button>
    `;
    cartList.appendChild(cartItem);
  });
  document.getElementById('cart-total').textContent = `Total: $${total}`;
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  const existingItem = cart.find(item => item.id === productId);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  renderCart();
  showPage('cart');
}

function updateCart(productId, change) {
  const item = cart.find(item => item.id === productId);
  if (item) {
    item.quantity += change;
    if (item.quantity <= 0) {
      cart = cart.filter(item => item.id !== productId);
    }
    renderCart();
  }
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  renderCart();
}

document.getElementById('checkout-form').addEventListener('submit', (e) => {
  e.preventDefault();
  cart = [];
  renderCart();
  document.getElementById('checkout-success').classList.remove('hidden');
});

renderProducts();
