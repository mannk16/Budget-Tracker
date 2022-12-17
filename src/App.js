import React, { useState } from "react";
import ExpenseItem from "./components/ExpenseItem";
import NewExpense from "./NewExpense/NewExpense";
import ExpensesFilter from "./components/ExpensesFilter";
import Expenseschart from "./components/Expenseschart";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const [finalExpenses, setFinalExpenses] = useState(expenses);

  const addExpenseHandler = (expense) => {
    setFinalExpenses((precExpenses) => {
      return [expense, ...precExpenses];
    });
  };

  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const newExpenses = finalExpenses.filter((exp) => {
    return exp.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />

      <div className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <Expenseschart expenses={newExpenses} />
        <ExpenseItem expenses={newExpenses}></ExpenseItem>
      </div>
    </div>
  );
}

export default App;
