import React from 'react';
import './Card.css';
// import './CardContent';
import CardBanner from './CardBanner';
import CardContent from './CardContent';

const CardContainer = () =>{
    return (
    <a href = 'https://www.reactjs.org'>
    <div class= 'card-container'>
    <CardBanner/>
    
    </div></a>)
}

export default CardContainer;