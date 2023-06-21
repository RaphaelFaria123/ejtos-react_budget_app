import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencySelector = () => {
    const { dispatch, currency } = useContext(AppContext);

    const changeCurrency = (value) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: value,
        })
    }
    const alertType = (val) => {
        return val !== currency ? 'alert-success' : '';
    }

    return (
        <div className='alert alert-success'> Currency {currency} {
            <select name="Currency" id="Currency" onChange={event => changeCurrency(event.target.value)} style={{ marginLeft: '2rem', width: '8rem', height: '1.5rem' }}>
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