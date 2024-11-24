import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
//import ExpenseTotal from '../components/ExpenseTotal'

const Budget = () => {
    const { budget,expenses,currency,dispatch } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    
    const totalExp = expenses.reduce((total, item) => {
        return (total += item.cost)
    }, 0)  

    const handleBudgetChange = (event) => {
        
        if(newBudget >= 20000){
            alert("Budget cannot exceed 20000");
                setNewBudget("20000");
                return;
        }

        if(newBudget < totalExp){
            alert("You cannot reduce the budget lower than expenses")
            setNewBudget(totalExp)
            return;
        }

        setNewBudget(event.target.value);

        dispatch({
            type: 'SET_BUDGET',
            payload: event.target.value
        });
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}{budget}</span>
<input 
type="number" 
step="10" 
max='20000'
//min={totalExp}
value={newBudget} 
onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
