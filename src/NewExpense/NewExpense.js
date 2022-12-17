import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const [buttonclose, setButtonClose] = useState(false);

  const buttoncloseHandler = () => {
    setButtonClose(true);
  };

  const buttoncloseHandlernew = () => {
    setButtonClose(false);
  };

  return (
    <div className="new-expense">
      {!buttonclose && (
        <button onClick={buttoncloseHandler}>Add new Expense</button>
      )}
      {buttonclose && (
        <ExpenseForm
          onclosingbutton={buttoncloseHandlernew}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
