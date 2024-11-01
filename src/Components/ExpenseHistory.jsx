const ExpenseHistory = ({ expenses }) => {
  return (
    <div className="my-4">
      <h3 className="font-semibold">Expense History</h3>
      <ul className="list-disc pl-5">
        {expenses.map((expense, index) => (
          <li key={index}>
            {expense.description}: ${expense.amount.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseHistory;
