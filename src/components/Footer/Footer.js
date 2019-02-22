import React from 'react';
import classes from './Footer.css'
import Logo from '../../components/Logo/Logo';
import NavigationItems from '../../components/Toolbar/NavigationItems/NavigationItems';
import NewsLetterForm from './NewsLetterForm/NewsLetterForm';
import H3 from '../../components/H3/H3';
import SocialIcons from '../SocialIcons/SocialIcons';
import {MdHome} from 'react-icons/md';

const footer = () => {
    return ( 
        <footer className={classes.Footer}>
            <div className={classes.Container}>
                <div className={classes.Address}>
                    <H3 hClass="">ADRES</H3>
                    {/* microdata */}
                    <div className={classes.AddressWrapper} itemScope itemType="http://schema.org/LocalBusiness">
                        <meta itemProp="image" content="https://www.pralma.pl/producent-pralek-przemyslowych.jpg"/>
                        <meta itemProp="url" content="https://www.pralma.pl"/>
                        <meta itemProp="logo" content="https://www.pralma.pl/pralma-logo.png"/>
                        <span className={classes.HomeIcon}><MdHome/></span>
                        <p className={classes.CompanyName} itemProp="name">Przedsiębiorstwo Produkcji Urządzeń Pralniczych &quot;Pralma&quot; sp. z o.o.</p>
                        <div itemProp="address" itemScope itemType="http://schema.org/PostalAddress">
                            <p itemProp="streetAddress">ul. Górnicza 49a</p>
                            <p>
                                <span itemProp="postalCode">25-651 </span>
                                <span itemProp="addressLocality">Kielce</span>
                            </p>
                            <p className={classes.PhoneWrapper}>Tel.:      <a className={classes.Phone} itemProp="telephone" href="tel:+48413453856">+48 41 345 38 56</a></p>
                            <p className={classes.FaxWrapper}>Tel./Fax   <a className={classes.Fax} itemProp="faxNumber" href="tel:+48413450561">+48 41 345 05 61</a></p>
                            <p className={classes.EmailWrapper}>E-mail:    <a className={classes.Email} itemProp="email" href="mailto:biuro@pralma.pl">biuro@pralma.pl</a></p>
                            <time className={classes.OpeningHoures} itemProp="openingHours" dateTime="Mo, Tu, We, Th, Fr 07:00-15:00">poniedziałek-piątek: 7<sup>00</sup>-15<sup>00</sup></time>
                        </div>
                    </div>
                </div>
                <div className={classes.Navigation}>
                    <H3 hClass="Blue">Nawigacja</H3>
                    <NavigationItems place="Footer"/>
                </div>
                <div className={classes.Newsletter}>
                    <H3>Newsletter</H3>
                    <NewsLetterForm/>
                </div>
                <div className={classes.Social}>
                    <H3 hClass="Blue">Media społecznościowe</H3>
                    <SocialIcons/>
                    <p className={classes.SubTitle}>Dołącz do nas...</p>
                </div>
                </div>
                <div className={classes.Copyright}>
                    <div className={classes.Container}>
                        <Logo/>
                        <p>&copy; 2019 by Krystian Wrona. All rights reserved</p>
                    </div>
                </div>
        </footer> )
}
 
export default footer;