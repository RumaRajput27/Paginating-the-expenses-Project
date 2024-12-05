// Inline expense data (replace fetch for now)
const expenses = [
    { "id": 1, "name": "Expense 1", "amount": "50.00" },
    { "id": 2, "name": "Expense 2", "amount": "75.00" },
    { "id": 3, "name": "Expense 3", "amount": "20.00" },
    { "id": 4, "name": "Expense 4", "amount": "100.00" },
    { "id": 5, "name": "Expense 5", "amount": "30.00" },
    { "id": 6, "name": "Expense 6", "amount": "80.00" },
    { "id": 7, "name": "Expense 7", "amount": "90.00" },
    { "id": 8, "name": "Expense 8", "amount": "45.00" },
    { "id": 9, "name": "Expense 9", "amount": "60.00" },
    { "id": 10, "name": "Expense 10", "amount": "110.00" },
    { "id": 11, "name": "Expense 11", "amount": "120.00" },
    { "id": 12, "name": "Expense 12", "amount": "35.00" },
    { "id": 13, "name": "Expense 13", "amount": "55.00" },
    { "id": 14, "name": "Expense 14", "amount": "70.00" },
    { "id": 15, "name": "Expense 15", "amount": "85.00" },
    { "id": 16, "name": "Expense 16", "amount": "95.00" },
    { "id": 17, "name": "Expense 17", "amount": "65.00" },
    { "id": 18, "name": "Expense 18", "amount": "40.00" },
    { "id": 19, "name": "Expense 19", "amount": "100.00" },
    { "id": 20, "name": "Expense 20", "amount": "150.00" },
    { "id": 21, "name": "Expense 21", "amount": "120.00" },
    { "id": 22, "name": "Expense 22", "amount": "35.00" },
    { "id": 23, "name": "Expense 23", "amount": "55.00" },
    { "id": 24, "name": "Expense 24", "amount": "70.00" },
    { "id": 25, "name": "Expense 25", "amount": "85.00" },
    { "id": 26, "name": "Expense 26", "amount": "95.00" },
    { "id": 27, "name": "Expense 27", "amount": "65.00" },
    { "id": 28, "name": "Expense 28", "amount": "40.00" },
    { "id": 29, "name": "Expense 29", "amount": "100.00" },
    { "id": 30, "name": "Expense 30", "amount": "150.00" }
  ];
  
  // Pagination logic
  const itemsPerPage = 10;
  let currentPage = 1;
  
  // Get references to DOM elements
  const expenseList = document.getElementById('expenseList');
  const paginationControls = document.getElementById('paginationControls');
  
  // Initialize and render
  function initializePagination(data) {
    renderExpenses(data);
    renderPaginationControls(data);
  }
  
  // Function to render expenses for the current page
  function renderExpenses(data) {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentExpenses = data.slice(startIndex, endIndex);
  
    expenseList.innerHTML = currentExpenses
      .map(
        (expense) => `<div class="expense-item">${expense.name} - $${expense.amount}</div>`
      )
      .join('');
  }
  
  // Function to render pagination controls
  function renderPaginationControls(data) {
    const totalPages = Math.ceil(data.length / itemsPerPage);
    
    let buttonsHtml = '';
  
    // Previous button
    buttonsHtml += `<button ${currentPage === 1 ? 'disabled' : ''} onclick="changePage(currentPage - 1)">Previous</button>`;
  
    // Page number buttons
    for (let i = 1; i <= totalPages; i++) {
      buttonsHtml += `
        <button class="${currentPage === i ? 'active' : ''}" onclick="changePage(${i})">${i}</button>
      `;
    }
  
    // Next button
    buttonsHtml += `<button ${currentPage === totalPages ? 'disabled' : ''} onclick="changePage(currentPage + 1)">Next</button>`;
  
    paginationControls.innerHTML = buttonsHtml;
  }
  
  // Function to change the current page
  function changePage(page) {
    currentPage = page;
    renderExpenses(expenses);
    renderPaginationControls(expenses);
  }
  
  // Initial render
  initializePagination(expenses);
  