import React from 'react';
import classes from './Header.css';

import LinkButton from '../UI/LinkButton/LinkButton';

const header =props=>{
    console.log(props)
    return (
        <header className={classes.Header}>
            <div className={classes.Container}>
                <h1 className={classes.PageTitle}>Producent</h1>
                <p className={classes.PageInfo}>Systemów i rozwiązań do pralni przemysłowych i komercyjnych</p>
                <p className={classes.PageDetails}>Urządzenia - Transport międzyoperacyjny - Sposób na produktywność - Oszczędność mediów</p>
                <LinkButton btnClass="Blue">Poznaj ofertę</LinkButton>
            </div>
        </header>
    )
}

export default header