document.getElementById("btn-calculate").addEventListener("click", function () {
  const perPlayerExpenseElement = document.getElementById("per-player-expense");
  const perPlayerExpense = parseInt(perPlayerExpenseElement.value);
  //   perPlayerExpenseElement.value = "";
  // console.log(perPlayerExpense);
  if (isNaN(perPlayerExpense)) {
    alert("Please insert a number");
    perPlayerExpenseElement.value = "";
  } else {
    const playerExpenses = cart.length * perPlayerExpense;

    const setExpensesElement = document.getElementById("player-expense");
    setExpensesElement.innerText = playerExpenses;
  }
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
    if (isNaN(coachExpense) || isNaN(managerExpense)) {
      alert("Please insert a number");
      coachExpenseElement.value = "";
      managerExpenseElement.value = "";
    } else {
      const playerExpensesElement = document.getElementById("player-expense");
      const playerExpenses = parseInt(playerExpensesElement.innerText);

      const totalExpenses = playerExpenses + managerExpense + coachExpense;

      const totalExpensesElement = document.getElementById("total-expense");
      totalExpensesElement.innerText = totalExpenses;
    }
  });
