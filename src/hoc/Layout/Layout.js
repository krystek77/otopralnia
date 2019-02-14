import React, { Component } from 'react';

import Aux from '../Aux/Aux';
import Toolbar from '../../components/Toolbar/Toolbar';
import Header from '../../components/Header/Header';

class Layout extends Component {

    render(){
        return (
            <Aux>
                <Toolbar/>
                <Header/>
                <main className="Main">
                    <div className="Container">
                        {this.props.children}
                    </div>
                </main>
                <footer className="Footer">
                    <div className="Container">
                    Stopka
                    </div>
                </footer>
            </Aux>
        )
    }
}

export default Layout