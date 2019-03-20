import React from 'react';
import './NonOperatorContainer.css';
import GenButtons from './NumberButton';

const btnArry = [
    {
        btnText:'clear',
        cssName:'tob-btn',

    },
    {
        btnText:'÷',
        cssName:'number-btn divide operator',

    },
    {
        btnText:'+',
        cssName:'number-btn add operator',

    },
    {
        btnText:'x',
        cssName:'number-btn product operator',

    },
    {
        btnText:'-',
        cssName:'number-btn sub operator',

    },
    {
        btnText:'=',
        cssName:'number-btn equal operator',

    },
    {
        btnText:'1',
        cssName:'number-btn one',
    },

    {
        btnText:'2',
        cssName:'number-btn two',
    },

    {
        btnText:'3',
        cssName:'number-btn three',
    },

    {
        btnText:'4',
        cssName:'number-btn four',
    },

    {
        btnText:'5',
        cssName:'number-btn five',
    },

    {
        btnText:'6',
        cssName:'number-btn six',
    },

    {
        btnText:'7',
        cssName:'number-btn seven',
    },

    {
        btnText:'8',
        cssName:'number-btn eight',
    },

    {
        btnText:'9',
        cssName:'number-btn nine',
    },

    {
        btnText:'0',
        cssName:'bottom-btn',
    }
];


const NonOperatorContainer= ()=> {
    return(
        <div class='nonop-container'>
            <div class='nonop-grid'>
                {btnArry.map(calcbutton => (
                <GenButtons btnprops={calcbutton}/>))};
                
            
            </div>
        </div>
    )

}

export default NonOperatorContainer;