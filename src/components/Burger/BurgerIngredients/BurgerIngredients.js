import React, { Component } from 'react';

import PropTypes from 'prop-types';

const BreadBottom = {
        height: '13%',
        width: '80%',
        background: 'linear-gradient(#F08E4A, #e27b36)',
        borderRadius: '0 0 30px 30px',
        boxShadow: 'inset -15px 0 #c15711',
        margin: '2% auto'
}
    
const BreadTop = {
        height: '20%',
        width: '80%',
        background: 'linear-gradient(#bc581e, #e27b36)',
        borderRadius: '50% 50% 0 0',
        boxShadow: 'inset -15px 0 #c15711',
        margin: '2% auto',
        position: 'relative',
}
    
const Seeds1 = {
        width: '10%',
        height: '15%',
        position: 'absolute',
        backgroundColor: 'white',
        left: '30%',
        top: '50%',
        borderRadius: '40%',
        transform: 'rotate(-20deg)',
        boxShadow: 'inset -2px -3px #c9c9c9'
}

const Seeds2 = {
        width: '10%',
        height: '15%',
        position: 'absolute',
        backgroundColor: 'white',
        left: '64%',
        top: '50%',
        borderRadius: '40%',
        transform: 'rotate(10deg)',
        boxShadow: 'inset -3px -3px #c9c9c9'
}
    
const Meat = {
        width: '80%',
        height: '8%',
        background: 'linear-gradient(#7f3608, #702e05)',
        margin: '2% auto',
        borderRadius: '15px'
}

const Cheese = {
        width: '90%',
        height: '4.5%',
        margin: '2% auto',
        background: 'linear-gradient(#f4d004, #d6bb22)',
        borderRadius: '20px'
}
    
const Lettuce = {
        width: '85%',
        height: '7%',
        margin: '2% auto',
        background: 'linear-gradient(#228c1d, #91ce50)',
        borderRadius: '20px'
}

const Bacon = {
        width: '80%',
        height: '3%',
        background: 'linear-gradient(#bf3813, #c45e38)',
        margin: '2% auto'
}

class BurgerIngredient extends Component {
    render () {
        let ingredient = null;

        switch (this.props.type) {
            case ('bread-bottom'):
                ingredient = <div style={BreadBottom}></div>;
                break;
            case ('bread-top'):
                ingredient = (
                    <div style={BreadTop}>
                        <div style={Seeds1}></div>
                        <div style={Seeds2}></div>
                    </div>
                );
                break;
            case ('meat'):
                ingredient = <div style={Meat}></div>;
                break;
            case ('cheese'):
                ingredient = <div style={Cheese}></div>;
                break;
            case ('lettuce'):
                ingredient = <div style={Lettuce}></div>;
                break;
            case ('bacon'):
                ingredient = <div style={Bacon}></div>;
                break;
            default:
                ingredient = null;
        }
    
        return ingredient;
    }
}

BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired 
}

export default BurgerIngredient;