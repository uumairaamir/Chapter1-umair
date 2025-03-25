// Function to calculate the total cost of petrol
function calculateTotalCost() {
    // Get the values from the input fields
    const costPerLiter = parseFloat(document.getElementById('costPerLiter').value);
    const litersPurchased = parseFloat(document.getElementById('litersPurchased').value);

    // Calculate the total cost
    const totalCost = (costPerLiter * litersPurchased).toFixed(2);

    // Display the total cost in the paragraph
    document.getElementById('totalCost').innerText = `Total Cost: ${totalCost}aed`;
}

// Add event listener to the button
document.getElementById('calculateButton').addEventListener('click', calculateTotalCost);