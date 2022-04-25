const handleAmountProduct = () => {
  const amountProduct = document.querySelector('.js-amount-product');

  let counter = Number(amountProduct.innerHTML) + 1;

  amountProduct.innerHTML = counter;
};

const handleEmitMessage = () => {
  const button = document.querySelectorAll('input[type="button"]');
  const messageAlert = document.querySelector('.js-message-alert');

  button.forEach((item) => {
    item.addEventListener('click', () => {
      if (item.value === 'M') {
        messageAlert.innerHTML = `
        <span class="is-message-alert--active">Restam 4 itens!</span>
        `;
      } else {
        messageAlert.innerHTML = '';
      }
    });
  });
};

handleEmitMessage();
