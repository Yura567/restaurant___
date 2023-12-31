import React from 'react';
import * as ReactDOMClient from "react-dom/client";
import './index.css';
import MenuList from './MenuList';
import Categories from './Categories';

const Main = () => {
    return(
        <main> 
        <p class="main_title">Головна</p>
       
        <div class="main_baner"></div>

        <p class="categories_title">Категорії</p>

        <div class="big_conteiner">
            <Categories ctext1 = "Піцца"/>
            <Categories ctext1 = "Бургери"/>
            <Categories ctext1 = "Салати"/>
            <Categories ctext1 = "Супи"/>
            <Categories ctext1 = "Суші"/>
            <Categories ctext1 = "Десерти"/>



        </div>

    <div className='menulist1'>
        <MenuList text1 = "Royal Burger" text2 = "200 грн" />
        <MenuList text1 = "Royal Pizza" text2 = "290 грн"/>
        <MenuList text1 = "King Salat" text2 = "126 грн"/>
    </div>
    <div className='menulist2'>
        <MenuList text1 = "Royal Pasta" text2 = "260 грн" />
        <MenuList text1 = "Royal Fish" text2 = "500 грн"/>
        <MenuList text1 = "Finlandia Vodka (0.7мл)" text2 = "450 грн"/>
    </div>

    </main>
    )
}

export default Main;