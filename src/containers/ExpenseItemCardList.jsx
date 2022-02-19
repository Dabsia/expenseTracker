import React, {useState} from 'react';
import ExpenseItem from '../components/ExpenseItem';
import './ExpenseItemCardList.css'
import ExpensesFilter from '../components/NewExpense/ExpensesFilter';


const ExpenseItemCardList = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };
    

    return (
            <div className='expenses'>
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                {
                    props.expenses.map((expense ,id) => {
                        return(
                            <ExpenseItem key = {id} expense = {expense}/>
                        ) 
                    })            
                }
            </div>
        
    )
}


export default ExpenseItemCardList;