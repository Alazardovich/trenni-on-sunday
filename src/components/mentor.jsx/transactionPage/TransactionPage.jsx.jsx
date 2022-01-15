// import { useState } from 'react';
const TransactionPage = ({ closeActivePage }) => {
  return (
    <div>
      <h1>TransactionPage</h1>
      <button type="button" onClick={closeActivePage}>
        Go BACK
      </button>
    </div>
  );
};
export default TransactionPage;
