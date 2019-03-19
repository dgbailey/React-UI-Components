import React from 'react';
import './Display.css';
import NonOperatorContainer from '../ButtonComponents/NonOperatorContainer';
import OperatorContainer from '../ButtonComponents/OperatorContainer';


const CalculatorDisplay = () =>{

   return (
   <div class= 'global-display'>
        <div class='io-display'><span class='num'>0</span></div>
        <div class='all-btns'>
            <NonOperatorContainer/>
            {/* <OperatorContainer/> */}
        </div>
    </div>);
}

export default CalculatorDisplay;