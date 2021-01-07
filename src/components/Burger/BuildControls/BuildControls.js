import React from 'react';

import BuildControl from './BuildControl/BuildControl'

const BuildControlsCss = {
    width: '100%',
    backgroundColor: '#CF8F2E',
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
    boxShadow: '0 2px 1px #ccc',
    margin: 'auto',
    padding: '10px 0px'
}

const controls = [
    { label: 'Lettuce', type: 'lettuce' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
]

const OrderButtonCss = {
    backgroundColor: '#DAD735',
    outline: 'none',
    cursor: 'pointer',
    border: '1px solid #966909',
    color: '#966909',
    fontFamily: 'inherit',
    fontSize: '1.2em',
    padding: '15px 30px',
    boxShadow: '2px 2px 2px #966909'
}

const buildControls = (props) => (
    <div style={BuildControlsCss}>
        <p>Current Price: {props.price.toFixed(2)}</p>
        {controls.map(ctrl => (
            <BuildControl 
                key={ctrl.label} 
                label={ctrl.label} 
                added={() => props.ingredientAdded(ctrl.type)} 
                removed={() => props.ingredientRemoved(ctrl.type)}
                disabled={props.disabled[ctrl.type]} />
        ))}
        <button style={OrderButtonCss}>Order Now</button>
    </div>
);

export default buildControls;