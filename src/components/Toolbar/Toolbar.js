import React from 'react';
import classes from './Toolbar.css';

import Hamburger from './Hamburger/Hamburger';
import Logo from '../Logo/Logo';
import NavigationItems from './NavigationItems/NavigationItems';
import SocialIcons from '../../components/SocialIcons/SocialIcons';

const toolbar = props => {
    return (
        <div className={classes.Toolbar}>
                    <div className={classes.UserPanel}>
                        <div className={classes.UserPanelContainer}>
                            <SocialIcons place="UserPanel"/>
                        </div>
                    </div>
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