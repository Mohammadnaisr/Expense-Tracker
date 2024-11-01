import React, { useState } from 'react';
import Balance from '../Components/Balance';
import AddIncome from '../Components/AddIncome';
import AddExpense from '../Components/AddExpense';
import ExpenseHistory from '../Components/ExpenseHistory';

const Roots = () => {
  const [income, setIncome] = useState(0);
  const [expenses, setExpenses] = useState([]);

  const totalExpenses = expenses.reduce(
    (acc, expense) => acc + expense.amount,
    0
  );
  const balance = income - totalExpenses;

  const addIncomeHandler = amount => {
    setIncome(prev => prev + Number(amount));
  };

  const addExpenseHandler = (description, amount) => {
    setExpenses(prev => [...prev, { description, amount: Number(amount) }]);
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded">
      <h1 className="text-2xl font-bold text-center">Expense Tracker</h1>
      <Balance balance={balance} />
      <AddIncome onAddIncome={addIncomeHandler} />
      <AddExpense onAddExpense={addExpenseHandler} />
      <ExpenseHistory expenses={expenses} />
    </div>
  );
};

export default Roots;
