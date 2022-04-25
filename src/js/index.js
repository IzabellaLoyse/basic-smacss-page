const handleAmountProduct = () => {
  const amountProduct = document.querySelector('.js-amount-product');

  let counter = Number(amountProduct.innerHTML) + 1;

  amountProduct.innerHTML = counter;
};

const handleEmitMessage = () => {
  const messageAlert = document.querySelector('.js-message-alert');

  messageAlert.insertAdjacentHTML(
    'beforeend',
    `
    <span class="message">Restam 4 itens!</span>

  `,
  );

  if (messageAlert.children.length > 1) {
    messageAlert.children[0].remove();
  }
};
