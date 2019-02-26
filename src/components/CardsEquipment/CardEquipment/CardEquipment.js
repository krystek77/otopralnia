import React from 'react';
import classes from './CardEquipment.css'
import H3 from '../../H3/H3';
import Button from '../../UI/Button/Button';
import {Link} from 'react-router-dom';

import FX80 from '../../../../src/assets/machines/FX80.jpeg';

const cardEquipment = props => {
    
    // console.log(props)
    
    const {link,header,subTitle,nameParameter,valueParameter} = props.elem

    return(
        <Link className={classes.Card} to={props.match.url+"/"+link}>
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
        </Link>
    )
}

export default cardEquipment