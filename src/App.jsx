import React, { Component, useState } from 'react';
import Form from './components/Form/Form';
import List from './components/List/List';
import Filter from './components/Filter/Filter';
import './App.css';

const App = () => {
  return (
    <>
      <Form />
      <List />
      <Filter />
    </>
  );
};

export default App;
