import React from 'react';
import { useSelector } from 'react-redux'

const ExpenseTotal = () => {
    const { currency, totalExpenses } = useSelector(state => state.budget);

    return (
        <div className='alert alert-primary'>
            <span>Spent so far: {currency}{totalExpenses}</span>
        </div>
    );
};

export default ExpenseTotal;
