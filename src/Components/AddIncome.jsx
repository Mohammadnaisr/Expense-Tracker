import React, { useState } from 'react';

const AddIncome = ({ onAddIncome }) => {
  const [amount, setAmount] = useState('');

  const submitHandler = e => {
    e.preventDefault();
    onAddIncome(amount);
    setAmount('');
  };

  return (
    <form onSubmit={submitHandler} className="my-4">
      <h3 className="font-semibold">Add Income</h3>
      <input
        type="number"
        value={amount}
        onChange={e => setAmount(e.target.value)}
        className="border border-gray-300 rounded p-2 w-full"
        placeholder="Enter income amount"
        required
      />
      <button
        type="submit"
        className="mt-2 bg-green-500 text-white p-2 rounded w-full"
      >
        Add Income
      </button>
    </form>
  );
};

export default AddIncome;
