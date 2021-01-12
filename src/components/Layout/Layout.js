import React from 'react';

import Aux from '../../hoc/Aux';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

const Content = {
    marginTop: '72px'
}

const layout = (props) => (
    <Aux>
        <Toolbar />
        <SideDrawer />
        <main style={Content}>
            {props.children}
        </main>
    </Aux>
);

export default layout;