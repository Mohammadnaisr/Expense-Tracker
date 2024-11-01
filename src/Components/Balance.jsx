const Balance = ({ balance }) => {
  return (
    <div className="text-center my-4">
      <h2 className="text-xl font-semibold">Balance</h2>
      <p className="text-2xl">${balance.toFixed(2)}</p>
    </div>
  );
};

export default Balance;
