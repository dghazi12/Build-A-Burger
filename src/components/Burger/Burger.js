import React from 'react';

import BurgerIngredient from './BurgerIngredients/BurgerIngredients'

const Burger = {
    width: '50%',
    margin: 'auto',
    height: '500px',
    overflow: 'scroll',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '1.2rem'
}

const burger = (props) => {
    return (
        <div style={Burger}>
            <BurgerIngredient type="bread-top" />
            <BurgerIngredient type="cheese" />
            <BurgerIngredient type="meat" />
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;