let transactions = JSON.parse(localStorage.getItem('transactions')) || [];

function saveTransactions() {
  localStorage.setItem('transactions', JSON.stringify(transactions));
  updateUI();
}

function addTransaction() {
  const desc = document.getElementById('description').value.trim();
  const amt  = parseFloat(document.getElementById('amount').value);
  const type = document.getElementById('type').value;

  if (!desc || isNaN(amt) || amt <= 0) {
    alert("Please fill in description and valid positive amount");
    return;
  }

  transactions.push({
    id: Date.now(),
    description: desc,
    amount: amt,
    type: type
  });

  saveTransactions();

  // clear form
  document.getElementById('description').value = '';
  document.getElementById('amount').value = '';
}

function deleteTransaction(id) {
  transactions = transactions.filter(t => t.id !== id);
  saveTransactions();
}

function updateUI() {
  const incomeEl  = document.getElementById('total-income');
  const expenseEl = document.getElementById('total-expenses');
  const remainEl  = document.getElementById('remaining');
  const listEl    = document.getElementById('transactions');

  let income  = 0;
  let expense = 0;

  transactions.forEach(t => {
    if (t.type === 'income')  income  += t.amount;
    else                       expense += t.amount;
  });

  const remaining = income - expense;

  incomeEl.textContent  = '$' + income.toFixed(2);
  expenseEl.textContent = '$' + expense.toFixed(2);
  remainEl.textContent  = '$' + remaining.toFixed(2);
  remainEl.style.color  = remaining >= 0 ? 'var(--income)' : 'var(--danger)';

  listEl.innerHTML = '';

  transactions
    .sort((a,b) => b.id - a.id)   // newest first
    .forEach(t => {
      const item = document.createElement('div');
      item.className = 'transaction';
      item.innerHTML = `
        <i class="fa-solid ${t.type === 'income' ? 'fa-arrow-down' : 'fa-arrow-up'} icon"></i>
        <div>
          <div class="desc">${t.description}</div>
          <div class="category">${t.type}</div>
        </div>
        <div class="amount ${t.type}">${t.type === 'income' ? '+' : '-'}$${Math.abs(t.amount).toFixed(2)}</div>
        <button class="delete-btn" onclick="deleteTransaction(${t.id})">
          <i class="fa-solid fa-trash"></i>
        </button>
      `;
      listEl.appendChild(item);
    });
}

// Initial render
updateUI();