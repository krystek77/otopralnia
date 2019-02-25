import React from 'react';
import classes from './Card.css'
import H3 from '../../H3/H3';
import Button from '../../UI/Button/Button';
import FX80 from '../../../../src/assets/machines/FX80.jpeg';

const card = props => {
    
    console.log(props.elem)
    
    const {header,subTitle,nameParameter,valueParameter} = props.elem

    return(
        <a className={classes.Card} href="/">
            <article className={classes.InnerWrapper}>
                <header className={classes.Header}>
                    <H3 hClass="Blue">{header}</H3>
                    <p className={classes.SubTitle}>{subTitle}</p>
                </header>
                <div className={classes.ImageContainer}>
                    <img className={classes.Image} src={FX80} alt=""/>
                </div>
                <footer className={classes.Footer}>
                    <div className={classes.Parameters}>
                        <div className={classes.NameParameter}>{nameParameter}</div>
                        <div className={classes.ValueParameter}>{valueParameter}</div>
                    </div>
                    <Button btnClass="Black">wiecej</Button>
                </footer>
            </article>
        </a>
    )
}

export default card