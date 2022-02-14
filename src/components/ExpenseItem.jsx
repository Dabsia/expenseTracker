import React from 'react';
import './ExpenseItem.css'


const ExpenseItem = ({expense}) => {

    // const [name, setTitle] = useState('');

    // const handleClick = () => {
    //     setTitle('Updated')
    //     console.log('Title')
    // }

    const {date, title, amount} = expense;

    const month = date.toLocaleString('en-US', {month: 'long'});
    const day = date.toLocaleString('en-US', {day: '2-digit'});
    const year = date.getFullYear()
    return (
        <div className = 'expense-item'>
            <div className='expense-date'>
                <div className='expense-date__month'>{month}</div>
                <div className='expense-date__year'>{year}</div>
                <div className='expense-date__day'>{day}</div>
            </div>
            <div className = 'expense-item__description'>
            <h2>{title}</h2>
            <div className = 'expense-item__price '>${amount}</div>
            {/* <button onClick={handleClick}>Change State</button> */}
            </div>
            
        </div>
    )
}

export default ExpenseItem