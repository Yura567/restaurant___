import React from 'react';
import * as ReactDOMClient from "react-dom/client";
import './index.css';

const Header = () => {
    return(
        <div>
            <header className='header'>
        <div className='content_header'>

        <div className='menu'>
           <a href='#'><p className='s'>ПРО НАС</p></a>
           <a href='#'><p className='s'>ГОЛОВНЕ</p></a>
           <a href='#'><p className='s'>СВЯТКОВІ ПОСЛУГИ</p></a>
        </div>
        <div class="offers">
            <a href="#">
                <div class="buutton">
                оформити замовлення
            </div></a>

            <div class="bag">

            </div>
        </div>
        <div class="login">
            <div class="button_log">
                увійти
            </div>
            <div class="icon">
                
            </div>
        </div>
    </div>
    </header>    
        </div>
    )
}

export default Header;


