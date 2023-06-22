import { createSlice } from '@reduxjs/toolkit'

export const budgetSlice = createSlice({
  name: 'budget',
  initialState: {
    budget: 2000,
    expenses: [
      { id: "Marketing", name: 'Marketing', cost: 50 },
      { id: "Finance", name: 'Finance', cost: 300 },
      { id: "Sales", name: 'Sales', cost: 70 },
      { id: "Human Resource", name: 'Human Resource', cost: 40 },
      { id: "IT", name: 'IT', cost: 500 },
    ],
    currency: '£',
    remaining: 1040,
    totalExpenses: 960,
  },
  reducers: {
    setBudget: (state, action) => {
      const value = action.payload;
      const totalExpenses = state.expenses.reduce((total, item) => total + item.cost, 0);

      if (value < totalExpenses) {
        alert("You cannot reduce the budget value lower than the spending amount");
        return;
      }

      if (value > 20000) {
        alert("The value cannot exceed 20 000");
        return;
      }

      state.budget = value;
      state.remaining = value - totalExpenses;
      state.totalExpenses = totalExpenses;
    },
    setCurrency: (state, action) => {
      state.currency = action.payload;
    },
    addExpense: (state, action) => {
      const value = action.payload.cost;
      let newTotal = state.totalExpenses + value;
      if (newTotal > state.budget) {
        alert("Cannot increase the allocation! Out of funds");
        return;
      }

      const expenseIndex = state.expenses.findIndex(expense => expense.name === action.payload.name);

      if (expenseIndex === -1) return;

      if (state.expenses[expenseIndex].cost + value >= 0) {
        state.expenses[expenseIndex].cost += value;
        state.remaining = state.budget - newTotal;
        state.totalExpenses = newTotal;
      }
    },
  }
})

export const { addExpense, setBudget, setCurrency } = budgetSlice.actions

export default budgetSlice.reducer