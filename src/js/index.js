const SIZES = [
  { name: 'Extra Small', abbreviation: 'PP', quantity: 0, index: 0 },
  { name: 'Small', abbreviation: 'P', quantity: 4, index: 1 },
  { name: 'Medium', abbreviation: 'M', quantity: 3, index: 2 },
  { name: 'Large', abbreviation: 'G', quantity: 2, index: 3 },
  { name: 'Extra Large', abbreviation: 'GG', quantity: 0, index: 4 },
];

const BUTTON_CLASS = 'c-button__size';
const BUTTON_CLASS_JS = 'js-button';
const BUTTON_DISABLED_CLASS = 'c-button--disabled';
const BUTTONS_BOX_CLASS = 'js-buttons-size';
const MESSAGE_ALERT_CLASS = 'js-message-alert';
const AMOUNT_PRODUCT_CLASS = 'js-amount-product';

let selectedProductQuantity = 0;

const createButton = ({ abbreviation, quantity, index }) => {
  const button = document.createElement('button');

  button.innerText = abbreviation;
  button.setAttribute('type', 'button');
  button.setAttribute('data-quantity', quantity);
  button.setAttribute('data-size', abbreviation);
  button.setAttribute('data-index', index);
  button.classList.add(BUTTON_CLASS);
  button.classList.add(BUTTON_CLASS_JS);

  if (abbreviation === 'PP' || abbreviation === 'GG' || quantity === 0) {
    button.setAttribute('disabled', true);
    button.classList.add(BUTTON_DISABLED_CLASS);
  }

  return button;
};

const handleEmitMessage = (button) => {
  const messageAlert = document.querySelector(`.${MESSAGE_ALERT_CLASS}`);

  button.addEventListener('click', () => {
    const productSizeQuantity = button.getAttribute('data-size');
    const productQuantity = parseInt(button.getAttribute('data-quantity'), 10);

    if (productSizeQuantity && productQuantity > 0) {
      messageAlert.innerHTML = `
        <span class="is-message-alert--active">Restam ${productQuantity} itens!</span>
        `;
      selectedProductQuantity = productQuantity - 1;
      button.setAttribute('data-quantity', selectedProductQuantity);
    } else {
      messageAlert.innerHTML = '';
      button.classList.add(BUTTON_DISABLED_CLASS);
    }
  });
};

const handleBuyButtonClick = () => {
  const messageAlert = document.querySelector(`.${MESSAGE_ALERT_CLASS}`);
  const amountProduct = document.querySelector(`.${AMOUNT_PRODUCT_CLASS}`);

  amountProduct.innerHTML = parseInt(amountProduct.innerHTML, 10) + 1;
  messageAlert.innerHTML = '';
};

const createSizeButtons = () => {
  const boxButtons = document.querySelector(`.${BUTTONS_BOX_CLASS}`);

  SIZES.forEach((size, index) => {
    const { name, abbreviation } = size;
    const { quantity } = SIZES[index];

    const button = createButton({ name, abbreviation, quantity, index });

    handleEmitMessage(button);

    boxButtons.appendChild(button);
  });
};

createSizeButtons();

document
  .querySelector('.js-button-buy')
  .addEventListener('click', handleBuyButtonClick);
