import CreditCard from 'credit-card';

const card = {
    cardType: 'VISA',
    number: '4111111111111111',
    expiryMonth: '03',
    expiryYear: '2100',
    cvv: '123'
};

const validation = CreditCard.validate(card);

const results = document.querySelector('#results');
results.innerHTML = JSON.stringify(validation, null, 2);

console.log(TEST_SOMETHING);
