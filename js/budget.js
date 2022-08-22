document.getElementById("btn-calculate").addEventListener("click", function () {
  const perPlayerExpenseElement = document.getElementById("per-player-expense");
  const perPlayerExpense = parseInt(perPlayerExpenseElement.value);
  //   perPlayerExpenseElement.value = "";
  //console.log(cart.length);
  const playerExpenses = cart.length * perPlayerExpense;

  const setExpensesElement = document.getElementById("player-expense");
  setExpensesElement.innerText = playerExpenses;
});

document
  .getElementById("btn-calculate-total")
  .addEventListener("click", function () {
    // console.log(playerExpenses);

    const managerExpenseElement = document.getElementById("manager-expense");
    const managerExpense = parseInt(managerExpenseElement.value);
    // managerExpenseElement.value = "";

    const coachExpenseElement = document.getElementById("coach-expense");
    const coachExpense = parseInt(coachExpenseElement.value);
    // coachExpenseElement.value = "";

    const playerExpensesElement = document.getElementById("player-expense");
    const playerExpenses = parseInt(playerExpensesElement.innerText);

    const totalExpenses = playerExpenses + managerExpense + coachExpense;

    const totalExpensesElement = document.getElementById("total-expense");
    totalExpensesElement.innerText = totalExpenses;
  });
