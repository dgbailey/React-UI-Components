import React from 'react';
import './Header.css';

import HeaderContent from './HeaderContent';
import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';

const HeaderContainer = () => {
    return (
    <header>
        <ImageThumbnail/>
        <div class= 'headtxt'>
            <HeaderTitle/>
            <HeaderContent/>
        </div>
    </header>);
}

export default HeaderContainer;
