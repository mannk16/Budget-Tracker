import React from "react";
import "./ExpenseItem.css";

const ExpenseItem = ({ expenses }) => {
  if (expenses.length === 0) {
    return <p className="expenses-zero">No Expenses found</p>;
  }
  return expenses.map((expense) => {
    return (
      <div className="expense-item" key={expense.id}>
        <div className="expense-date">
          <div className="expense-date__month">
            {expense.date.toLocaleString("en-US", { month: "long" })}
          </div>
          <div className="expense-date__year">{expense.date.getFullYear()}</div>
          <div className="expense-date__day">
            {expense.date.toLocaleString("en-US", { day: "2-digit" })}
          </div>
        </div>
        <div className="expense-item__description">
          <h2>{expense.title}</h2>
          <div className="expense-item__price">{expense.amount}</div>
        </div>
      </div>
    );
  });
};

export default ExpenseItem;
