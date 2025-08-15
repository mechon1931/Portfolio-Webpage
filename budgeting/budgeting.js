const monthlyBudgetCard = document.getElementById('monthly-budget');
const plannedIncomeCard = document.getElementById('income');

function updateMonthlyBudget() {
    monthlyBudgetCard.innerHTML = `
        <p id="emojis">&#128176;</p>
        <h2>Monthly Budget</h2>
        <p>Your Monthly Budget is: $${income}</p>`
}

updateMonthlyBudget();

function updatePlannedIncome() {
    plannedIncomeCard.innerHTML = `
        <p id="emojis">&#128181;</p>
        <h2>Planned Income</h2>
        <form id="income-form">
            <label for="income">Enter your check income:</label>
            <input type="number" id="income" name="income" required>
            <button id="planned-income" type="submit" onclick="incomeForm">Submit</button>
        </form>`

    const incomeForm = document.getElementById('income-form');

    incomeForm.addEventListener('submit', (event) =>{
        event.preventDefault(); // prevents the page from refreshing on submit
        const incomeValue = document.getElementById('income').value;

        updateMonthlyBudget(incomeValue);
    });
}

updatePlannedIncome();
