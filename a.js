const addButton = document.getElementById('addButton');
const nameInput = document.getElementById('name');
const amountInput = document.getElementById('amount');
const contributorList = document.getElementById('contributorList');
const totalAmountDisplay = document.getElementById('totalAmount');

let totalAmount = 0;

addButton.addEventListener('click', () => {
    const name = nameInput.value;
    const amount = parseFloat(amountInput.value);
    
    if (name && !isNaN(amount)) {
        totalAmount += amount;
        totalAmountDisplay.textContent = totalAmount;

        const li = document.createElement('li');
        li.textContent = `${name}: $${amount.toFixed(2)}`;
        contributorList.appendChild(li);

        // Clear input fields
        nameInput.value = '';
        amountInput.value = '';
    } else {
        alert('Please enter valid name and amount');
    }
});
