import React from 'react';
import './Button.css';





const GenButtons = (props) =>{
    console.log(props.btnprops.cssName);
    return (
        <div class = {props.btnprops.cssName}>
        <p>{props.btnprops.btnText}</p>
        </div>

    );



}

export default GenButtons;