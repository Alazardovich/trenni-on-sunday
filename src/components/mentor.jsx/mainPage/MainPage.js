import React from 'react';
import MainInfo from '../mainInfo/MainInfo';
import data from '../db/testOptions.json';
import StatisticBtn from '../statisticBtns/StatisticBtn';
import MainHeader from '../mainHeader/MainHeader';

function MainPage({ openActivePage }) {
  return (
    <>
      <MainHeader />
      <main>
        <MainInfo
          title="Расходы"
          options={data.costsInfoOptions}
          titleColor="green"
          btnColor="green"
          openActivePage={openActivePage}
          activePage="costs"
        />
        <MainInfo
          title="Доходы"
          options={data.incomesInfoOptions}
          titleColor="red"
          btnColor="green"
          openActivePage={openActivePage}
          activePage="incomes"
        />
        <MainInfo
          title="Баланс"
          options={data.balanceInfoOptions}
          titleColor="blue"
          btnColor="blue"
          openActivePage={openActivePage}
          activePage="balance"
        />
        <StatisticBtn />
      </main>
    </>
  );
}

export default MainPage;
