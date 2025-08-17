const container = document.getElementById('container-card');
const incomeForm = document.getElementById('income-form');
const favoritesList = document.getElementById('favorites-list');

let totalIncomeDisplay;
let totalPlannedIncome = 0;
let IncomeEntries = [];

function plannedIncomeandMonthlyIncomeCard() {

    return container.innerHTML = `
        <div id="container">
            <div id="left-card" id="planned-income">
                <p id="emojis">&#128176;</p>
                <h3>Planned Income</h3>
                <span id="total-income">$0</span>
            </div>

            <div id="right-card" id="actual-income">
                <p id="emojis">&#128181;</p>
                <h3>Actual Income</h3>
            </div>
        </div>`

}

plannedIncomeandMonthlyIncomeCard();    

totalIncomeDisplay = document.getElementById('total-income');


function saveIncomeToLocalStorage() {
  try {
    localStorage.setItem('plannedIncomeEntries', JSON.stringify(IncomeEntries));
    console.log('Income entries saved to localStorage.');
  } catch (error) {
    console.error('Error saving to localStorage:', error);  
  }
} 

function createIncomeFormCard() {
  // Create the main container div
  const incomeFormCard = document.createElement('div');
  incomeFormCard.id = 'income-form-card';
  
  // Set the inner HTML for the form structure
  incomeFormCard.innerHTML = `
    <h3>Add Income</h3>
    <div id="income-output"></div>
    <form id="income-form-element">
      <input type="text" id="income-source" placeholder="Income Source" required>
      <input type="number" id="income-amount" placeholder="Amount" required>
      <button id="add-button" type="submit">Add Income</button>
    </form>
  `;
  
  // Append the newly created card to the body or a specific container
  // This is a crucial step to make the elements accessible
  document.body.appendChild(incomeFormCard);

  // Get the elements AFTER they have been added to the document
  const incomeFormElement = document.getElementById('income-form-element');
  const incomeSourceInput = document.getElementById('income-source');
  const incomeAmountInput = document.getElementById('income-amount');
  const incomeOutput = document.getElementById('income-output');

  // Add the event listener to the form
  incomeFormElement.addEventListener('submit', (e) => {
    e.preventDefault();

    const source = incomeSourceInput.value;
    const amount = parseFloat(incomeAmountInput.value);

    if (source && !isNaN(amount)) {
      const newIncomeEntry = document.createElement('div');
      newIncomeEntry.classList.add('income-entry');
      newIncomeEntry.innerHTML = `
        <span class="income-source">${source}</span>
        <span class="income-amount">$${amount.toLocaleString()}</span>
      `;
      incomeOutput.appendChild(newIncomeEntry);

      saveIncomeToLocalStorage();

      incomeSourceInput.value = '';
      incomeAmountInput.value = '';

      totalIncome(amount);
    } else {
      alert('Please enter a valid income source and amount.');
    }
    
  });  
}
// this is the beginning of total income function

function totalIncome(amount) {
  totalPlannedIncome += amount;

  if (totalIncomeDisplay) {
    totalIncomeDisplay.textContent = '$' + totalPlannedIncome.toLocaleString();
  } else {
    console.error('Total income display element not found.');
  } 
}

// Call the function to create the form
createIncomeFormCard();
// this is the end of total income function

