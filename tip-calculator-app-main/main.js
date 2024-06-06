function setTip(percentage) {
    document.getElementById('tip-percentage').value = percentage;
}

function calculateTip() {
    const billAmount = parseFloat(document.getElementById('bill').value);
    const tipPercentage = parseFloat(document.getElementById('tip-percentage').value);
    const numOfPeople = parseInt(document.getElementById('num-of-people').value);
    
    if (isNaN(billAmount) || isNaN(tipPercentage) || isNaN(numOfPeople) || numOfPeople <= 0) {
        document.getElementById('result').innerText = 'Please enter valid inputs.';
        return;
    }

    const tipAmount = (billAmount * (tipPercentage / 100));
    const totalAmount = billAmount + tipAmount;
    const amountPerPerson = totalAmount / numOfPeople;
    
    document.getElementById('result').innerText = `Tip Amount per Person: $${(tipAmount / numOfPeople).toFixed(2)}\nTotal Amount per Person: $${amountPerPerson.toFixed(2)}`;
}