import React from 'react';
import classes from './Card.css'
import H3 from '../../H3/H3';
import Button from '../../UI/Button/Button';
import image from '../../../../src/assets/machines/FX80.jpeg';

const card = props => {
    console.log(props)
    return(
        <a className={classes.Card} href="/">
            <article className={classes.InnerWrapper}>
                <header className={classes.Header}>
                    <H3 hClass="Blue">Pralnicowirówki</H3>
                    <p className={classes.SubTitle}>wysokoobrotowe</p>
                </header>
                <div className={classes.ImageContainer}>
                    <img className={classes.Image} src={image} alt=""/>
                </div>
                <footer className={classes.Footer}>
                    <div className={classes.Parameters}>
                        <div className={classes.NameParameter}>Zaladunek</div>
                        <div className={classes.ValueParameter}>8-50 kg</div>
                    </div>
                    <Button btnClass="Black">wiecej</Button>
                </footer>
            </article>
        </a>
    )
}

export default card