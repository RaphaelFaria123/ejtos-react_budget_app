import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppProvider } from './context/AppContext';
import Budget from './components/Budget';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AllocationForm from './components/AllocationForm';
import RemainingBudget from './components/Remaining';
import CurrencySelector from './components/CurrencySelector';
import ReduxExpenseList from './components/redux/ExpenseList';
import ReduxBudget from './components/redux/Budget';
import ReduxCurrencySelector from './components/redux/CurrencySelector';
import ReduxRemaining from './components/redux/Remaining';
import ReduxExpenseTotal from './components/redux/ExpenseTotal';
import ReduxAllocationForm from './components/redux/AllocationForm';

const App = () => {
    return (
        <div className='container'>
            <AppProvider>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                <div className='row mt-3'>
                    <div className='col-sm'>
                        <Budget />
                    </div>
                    <div className='col-sm'>
                        <RemainingBudget />
                    </div>
                    <div className='col-sm'>
                        <ExpenseTotal />
                    </div>
                    <div className='col-sm'>
                        <CurrencySelector />
                    </div>
                </div>
                <h3 className='mt-3'>Allocation</h3>
                <div className='row '>
                    <div className='col-sm'>
                        <ExpenseList />
                    </div>
                </div>
                <h3 className='mt-3'>Change allocation</h3>
                <div className='row mt-3'>
                    <div className='col-sm'>
                        <AllocationForm />
                    </div>
                </div>
            </AppProvider>

            <h1 className='mt-3'>Company's Redux Budget Allocation</h1>
            <div className='row mt-3'>
                <div className='col-sm'>
                    <ReduxBudget />
                </div>
                <div className='col-sm'>
                    <ReduxRemaining />
                </div>
                <div className='col-sm'>
                    <ReduxExpenseTotal />
                </div>
                <div className='col-sm'>
                    <ReduxCurrencySelector />
                </div>
            </div>
            <h3 className='mt-3'>Redux Allocation</h3>
            <div className='row mt-3'>
                <div className='col-sm'>
                    <ReduxExpenseList />
                </div>
            </div>
            <h3 className='mt-3'>Redux Change allocation</h3>
            <div className='row mt-3'>
                <div className='col-sm'>
                    <ReduxAllocationForm />
                </div>
            </div>
        </div>
    );
};

export default App;