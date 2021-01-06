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
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredient  key={igKey + i} type={igKey} />;
            });
        })
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients!</p>
    }
    console.log(transformedIngredients);
    return (
        <div style={Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;