import React from 'react'
import './App.css';
import ExpenseItemCardList from './components/ExpenseItemCardList';

function App() {

  const expenses = [
    {
      id: 1,
      title: 'Toilet Paper',
      amount: 94.12,
      date:new Date(2020,7,14),
    },
    {
      id: 2,
      title: 'Toothbrush',
      amount: 12.195,
      date:new Date(2021,4,22),
    },
    {
      id: 3,
      title: 'Bar Soap',
      amount: 18.50,
      date:new Date(2021,2,25),
    },
    {
      id: 4,
      title: 'bucket',
      amount: 60.16,
      date:new Date(2021,3,28),
    }
  ]



  return (
      <div className="App">
        <ExpenseItemCardList expenses = {expenses}/>
      </div>
  );
}

export default App;
