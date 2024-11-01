import React, { useState } from 'react';

const AddExpense = ({ onAddExpense }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const submitHandler = e => {
    e.preventDefault();
    onAddExpense(description, amount);
    setDescription('');
    setAmount('');
  };

  return (
    <form onSubmit={submitHandler} className="my-4">
      <h3 className="font-semibold">Add Expense</h3>
      <input
        type="text"
        value={description}
        onChange={e => setDescription(e.target.value)}
        className="border border-gray-300 rounded p-2 w-full"
        placeholder="Enter expense description"
        required
      />
      <input
        type="number"
        value={amount}
        onChange={e => setAmount(e.target.value)}
        className="border border-gray-300 rounded p-2 w-full mt-2"
        placeholder="Enter expense amount"
        required
      />
      <button
        type="submit"
        className="mt-2 bg-red-500 text-white p-2 rounded w-full"
      >
        Add Expense
      </button>
    </form>
  );
};

export default AddExpense;
