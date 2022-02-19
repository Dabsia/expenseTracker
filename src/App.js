import React from 'react'
import './App.css';
import ExpenseItemCardList from './containers/ExpenseItemCardList';
import NewExpense from './components/NewExpense/NewExpense';

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
      amount: 12.15,
      date:new Date(2021,4,22),
    },
    {
      id: 3,
      title: 'Bar Soap',
      amount: 18.23,
      date:new Date(2021,2,25),
    },
    {
      id: 4,
      title: 'bucket',
      amount: 60.16,
      date:new Date(2021,3,28),
    }
  ];

  const addExpenseHandler = (expense) => {
    console.log('IN APP JS')
    console.log(expense);
  }



  return (
      <div className="App">
        <NewExpense onAddExpense = {addExpenseHandler} />
        <ExpenseItemCardList expenses = {expenses}/>
      </div>
  );
}

export default App;
