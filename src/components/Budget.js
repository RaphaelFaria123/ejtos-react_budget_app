import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { dispatch, expenses, budget, currency } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    const setBudget = (value) => {
        if (value < totalExpenses) {
            alert("You cannot reduce the budget value lower than the spending");
            return;
        }

        if (value > 20000) {
            alert("The value cannot exceed 20000");
            return;
        }

        dispatch({
            type: 'SET_BUDGET',
            payload: value,
        });
    };

    return (
        <div className='alert alert-secondary'>
            <label htmlFor="budget">Budget: {currency}</label>
            <input
                required='required'
                type='number'
                id='budget'
                value={budget}
                style={{ marginLeft: '0.5rem', width: '8rem', height: '1.5rem' }}
                onChange={(event) => setBudget(event.target.value)}
                step="10">
            </input>
        </div>
    );
};

export default Budget;