import React from 'react';
import { useSelector } from 'react-redux'

const Remaining = () => {
    const { remaining, currency, totalExpenses, budget } = useSelector(state => state.budget);

    const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';
    return (
        <div className={`alert ${alertType}`}>
            <span>Remaining: {currency}{remaining}</span>
        </div>
    );
};

export default Remaining;
