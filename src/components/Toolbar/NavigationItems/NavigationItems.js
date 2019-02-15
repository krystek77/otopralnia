import React from 'react';
import classes from './NavigationItems.css';

import NavigationItem from './NavigationItem/NavigationItem';


const navigationItems =props=>{
    // console.log("navigationItems")
    // console.log(props)
    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem link="/klienci-pralni-przemyslowych">Klienci</NavigationItem>
            <NavigationItem link="/wyposazenie-pralni-przemyslowych">Wyposażenie</NavigationItem>
            <NavigationItem link="/technologie-nowoczesnej-pralni-przemyslowej">Technologie</NavigationItem>
            <NavigationItem link="/recykling-mediow-w-pralni">Recykling mediów</NavigationItem>
            <NavigationItem link="/wiadomosci-o-pralniach-przemyslowych">Wiadomości</NavigationItem>
            <NavigationItem link="/o-pralma">O nas</NavigationItem>
            <NavigationItem link="/kontakt-do-producenta-pralek-przemyslowych" last="Last">Kontakt</NavigationItem>
        </ul>
    )
}

export default navigationItems