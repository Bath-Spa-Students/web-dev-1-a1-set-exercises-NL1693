// Function to Calculate Total Cost of Petrol
function calcTotal() {
    // Retrieve Cost/Liter from Input Field             // Convert to Float (Decimal Values)
    let costPerLiter = parseFloat(document.getElementById('cost').value);
    // Retrieve Liters Purchased from Input Field       // Convert to Float (Decimal Values)
    let litersPurchased = parseFloat(document.getElementById('liters').value);

    // Calculate Total by Multiplying Inputs
    let totalCost = costPerLiter * litersPurchased;

    // Display Total on Page with (2) Decimal Values
    document.getElementById('totalCost').innerText = totalCost.toFixed(2);
}
