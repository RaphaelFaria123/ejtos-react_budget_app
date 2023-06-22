import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { setBudget } from '../../context/budgetSlice';

const Budget = () => {
    const { budget, currency } = useSelector(state => state.budget);
    const dispatch = useDispatch();

    return (
        <div className='alert alert-secondary'>
            <label htmlFor="budget">Budget: {currency}</label>
            <input
                required='required'
                type='number'
                id='budget'
                value={budget}
                style={{ marginLeft: '0.5rem', width: '8rem', height: '1.5rem' }}
                onChange={(event) => dispatch(setBudget(event.target.value))}
                step="10">
            </input>
        </div>
    );
};

export default Budget;