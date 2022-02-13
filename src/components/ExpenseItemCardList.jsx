import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpenseItemCardList.css'
const ExpenseItemCardList = ({expenses}) => {

    return (
        <div className='expenses'>
            {
                expenses.map((expense ,id) => {
                    return(
                        <ExpenseItem key = {id} expense = {expense}/>
                    ) 
                })            
            }
        </div>
    )
}


export default ExpenseItemCardList;