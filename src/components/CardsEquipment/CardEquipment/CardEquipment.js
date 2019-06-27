import React from 'react';
import classes from './CardEquipment.css'
import H3 from '../../H3/H3';
import Button from '../../UI/Button/Button';
import {Link} from 'react-router-dom';

const cardEquipment = props => {
    
    // console.log(props)
    
    const {link,header,subTitle,nameParameter,valueParameter,family} = props.elem
    // console.log("CardEquipment")
    // console.log(props.match.url)
    // console.log(props.elem)
    let tab = []
    let first = null
    let name ="PBE-08" //temporary
    

    if(typeof family!=="undefined") {

        for(let property in family){
            tab = tab.concat(family[property])
        }
        first = tab.find((elem)=>elem.id===1)
        name = first.name

        // console.log(tab)
        // console.log(name)
    }
    // console.log(props.imageSrc)
    return(
        <Link className={classes.Card} to={props.match.url+"/"+link+"/"+name}>
            <article className={classes.InnerWrapper}>
                <header className={classes.Header}>
                    <H3 hClass="Blue">{header}</H3>
                    <p className={classes.SubTitle}>{subTitle}</p>
                </header>
                <div className={classes.ImageContainer}>
                    <img className={classes.Image} src={props.imageSrc} alt=""/>
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