import React from 'react';
import classes from './NavigationItems.css';

import NavigationItem from './NavigationItem/NavigationItem';


const navigationItems =props=>{
    // console.log("navigationItems")
    // console.log(props)
    /*
    * props.place - "Footer", other than toolbar.
    */
    const navClass = [classes.NavigationItems,classes[props.place]].join(' ')

    return (
        <ul className={navClass}>
            <NavigationItem place={props.place} link="/klienci-pralni-przemyslowych">Klienci</NavigationItem>
            <NavigationItem place={props.place} link="/wyposazenie-pralni-przemyslowych">Wyposażenie</NavigationItem>
            <NavigationItem place={props.place} link="/technologie-nowoczesnej-pralni-przemyslowej">Technologie</NavigationItem>
            <NavigationItem place={props.place} link="/recykling-mediow-w-pralni">Recykling mediów</NavigationItem>
            <NavigationItem place={props.place} link="/wiadomosci-o-pralniach-przemyslowych">Blog</NavigationItem>
            <NavigationItem place={props.place} link="/o-pralma">O nas</NavigationItem>
            <NavigationItem place={props.place} link="/kontakt-do-producenta-pralek-przemyslowych" last="Last">Kontakt</NavigationItem>
        </ul>
    )
}

export default navigationItems