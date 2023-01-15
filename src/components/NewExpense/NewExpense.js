import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [newExpense, setNewExpense] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
  };

  const newExpenseHander = () => {
    setNewExpense(true);
  };

  const cancelHandler = () => {
    setNewExpense(false);
  };

  return (
    <div className="new-expense">
      {newExpense && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancelExpense={cancelHandler}
        />
      )}
      {!newExpense && <button onClick={newExpenseHander}>New Expense</button>}
    </div>
  );
};

export default NewExpense;
