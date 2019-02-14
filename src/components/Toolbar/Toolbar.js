import React from 'react';
import classes from './Toolbar.css';

import Hamburger from './Hamburger/Hamburger';
import Logo from '../Logo/Logo';
import NavigationItems from './NavigationItems/NavigationItems';

const toolbar = props => {
    return (
        <div className={classes.Toolbar}>
                    <div className={classes.Container}>
                        <Hamburger/>
                        <Logo/>
                        <nav className={classes.Navigation}>
                            <NavigationItems/>
                        </nav>
                    </div>
                </div>
    )
}

export default toolbar