import React from 'react';
import * as ReactDOMClient from "react-dom/client";
import './index.css';

const MenuList = (props) => {
    return(
        <div>
            <div>
            <div className='menu_cont'>
            <div className='menu_photo'>
                <img src="../src/img/src/img/400_0_1669036584-8046.jpg" alt= "NO"></img>

            </div>
            <p className='text_menu_list'>{props.text1}</p>
            <p className='price'>{props.text2}</p>

            <div className='button_menu'>Додати</div>
        </div>
        </div>
        </div>
    )
}

export default MenuList;