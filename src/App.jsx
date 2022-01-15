import React, { Component, useState } from 'react';
import './App.css';

import MainPage from './components/mentor.jsx/mainPage/MainPage';
import TransactionPage from './components/mentor.jsx/transactionPage/TransactionPage.jsx';

const App = () => {
  const [activePage, setActivePage] = useState('main');

  const closeActivePage = () => {
    setActivePage('main');
  };
  const openActivePage = type => setActivePage(type);
  // eslint-disable-next-line default-case
  switch (activePage) {
    case 'main':
      return <MainPage openActivePage={openActivePage} />;
    case 'costs':
      return (
        <TransactionPage closeActivePage={closeActivePage} transType="costs" />
      );
    case 'incomes':
      return (
        <TransactionPage
          closeActivePage={closeActivePage}
          transType="incomes"
        />
      );
    default:
      return null;
  }
};

export default App;
