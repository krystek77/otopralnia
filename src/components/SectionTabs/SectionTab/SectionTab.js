import React, { Component } from 'react';
import classes from './SectionTab.css';
import IndicatorButton from '../../UI/IndicatorButton/IndicatorButton';
import Card from '../../../components/Cards/Card/Card';

class SectionTab extends Component {

    state = {
        active:this.props.active
    }

    compare =(objectA,objectB)=>{
        if(objectA.id < objectB.id){
            return -1
        }
        if(objectA.id > objectB.id){
            return 1
        }
        return 0
    }

    openTabHandler = () => {
        //console.log("clicked")
        this.setState((prevState)=>({active:!prevState.active}))
    }

    render(){
        let contentClass = [classes.Content]
        let titleClass = [classes.Title]

        const {active} = this.state
        const {title,cards} =this.props.tab

        let card = null
        let description = null

        if(typeof cards !== "undefined") {
            if(typeof cards.card !=="undefined" && typeof cards.description !== "undefined"){
                card = {...cards.card}
                description = cards.description

                card = Object.keys(card).map((type)=>{
                    return ([...Array(card[type])]).reduce((a,e)=>a.concat(e))
                }).sort(this.compare).map((elem)=>{
                    return <Card 
                        key={elem.id}
                        elem ={elem}
                    />
                })

            }
        }
        // console.log(card)
        // console.log(description)

        if(active){
            contentClass=contentClass.concat([classes.Active]).join(' ')
            titleClass=titleClass.concat([classes.Active]).join(' ')
           //console.log(contentClass)
        }
        return (
            <section className={classes.Tab}>

                <header className={classes.Header}>
                    <div className={classes.Container}>
                        <IndicatorButton open={active} classBtn=""/>
                        <h2 
                            className={titleClass} 
                            onClick={this.openTabHandler}>
                            {title}
                        </h2>
                    </div>
                </header>
                {/** diffrence content depending on page */}
                <div className={contentClass}>
                    <div className={classes.Cards}>
                        <p 
                            className={classes.CardsDescription}>
                            {description}
                        </p>
                        {card}
                        {this.props.children}
                    </div>
                </div>
                
            </section>
        )
    }
}

export default SectionTab