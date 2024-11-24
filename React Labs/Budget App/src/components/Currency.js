import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
//import Dropdown from 'react-bootstrap/Dropdown';

const Currency = () => {
    const { dispatch } = useContext(AppContext);

    const handleCurrency = (val) => {

        //setCurrency(currency)
        dispatch({
            type: 'CHG_CURRENCY',
            payload: val
        });
    }
   
   return (
    <div>
    <select className="custom-select alert alert-success" id="inputGroupSelect02" onChange={(event) => handleCurrency(event.target.value)}>
        <option defaultValue value="$" name="$"> $ Dollar </option>
        <option value="£" name="£"> £ Pound </option>
        <option value="€" name="€"> € Euro </option>
        <option value="₹" name="₹"> ₹ Ruppee </option>
    </select>
</div>
)
};
export default Currency;