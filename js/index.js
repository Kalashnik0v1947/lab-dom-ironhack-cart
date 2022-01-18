// ITERATION 1

function updateSubtotal(product) {
  // console.log('Calculating subtotal, yay!');
  let price = Number(product.querySelector('.price span').innerHTML);
  let quantity = product.querySelector('.quantity input').valueAsNumber;
  let sub = price * quantity;
  let subTotalElement = product.querySelector('.subtotal span');
  subTotalElement.innerHTML = sub.toFixed(2);
  return sub;
}

function calculateAll() {
  const allProducts = document.querySelectorAll('.product');

  let total = 0;
  for (let i = 0; i < allProducts.length; i++) {
    total += updateSubtotal(allProducts[i]);
  }

  let totalElement = document.querySelector('#total-value span');

  totalElement.innerText = total.toFixed(2);
}

calculateAll();
// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
