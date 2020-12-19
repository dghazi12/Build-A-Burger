import React from 'react';

import Aux from '../../hoc/Aux';

const Content = {
    marginTop: '16px'
}

const layout = (props) => (
    <Aux>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main style={Content}>
            {props.children}
        </main>
    </Aux>
);

export default layout;