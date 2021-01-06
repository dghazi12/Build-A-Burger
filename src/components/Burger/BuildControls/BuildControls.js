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

const buildControls = (props) => (
    <div style={BuildControlsCss}>
        {controls.map(ctrl => (
            <BuildControl key={ctrl.label} label={ctrl.label} />
        ))}
    </div>
);

export default buildControls;