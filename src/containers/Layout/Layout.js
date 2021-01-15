import React, { Component } from 'react';

import Aux from '../../hoc/Aux/Aux';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';

const Content = {
    marginTop: '72px'
}

class Layout extends Component {

    render() {
        return (
            <Aux>
                <Toolbar drawerToggleClicked={this.SideDrawerToggleHandler}/>
                <main style={Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
} 

export default Layout;