import React from 'react';
import { FaMinusCircle, FaPlusCircle } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux'
import { addExpense } from '../../context/budgetSlice';

const ExpenseItem = (props) => {
    const currency = useSelector(state => state.budget.currency)
    const dispatch = useDispatch();

    const updateAllocation = (name, amount) => {
        const expense = {
            name: name,
            cost: amount,
        };
        dispatch(addExpense(expense));
    }

    return (
        <tr>
            <td>{props.name}</td>
            <td>{currency}{props.cost}</td>
            <td><FaPlusCircle style={{color: 'green'}} size='1.5em' onClick={event => updateAllocation(props.name, 10)}></FaPlusCircle></td>
            <td><FaMinusCircle style={{color: 'red'}} size='1.5em' onClick={event => updateAllocation(props.name, -10)}></FaMinusCircle></td>
        </tr>
    );
};

export default ExpenseItem;
