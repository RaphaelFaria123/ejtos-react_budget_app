import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { setCurrency } from '../../context/budgetSlice';

const CurrencySelector = () => {
    const currency = useSelector(state => state.budget.currency);
    const dispatch = useDispatch();

    const alertType = (val) => {
        return val !== currency ? 'alert-success' : '';
    }

    return (
        <div className='alert alert-success'> Currency {currency} {
            <select name="Currency" id="Currency" value={currency} onChange={event => dispatch(setCurrency(event.target.value))} style={{ marginLeft: '2rem', width: '8rem', height: '1.5rem' }}>
                <option className={`alert ${alertType('$')}`} value="$">$ Dollar</option>
                <option className={`alert ${alertType('£')}`} value="£">£ Pound</option>
                <option className={`alert ${alertType('€')}`} value="€">€ Euro</option>
                <option className={`alert ${alertType('₹')}`} value="₹">₹ Ruppee</option>
            </select>
        }
        </div>
    );
};

export default CurrencySelector;