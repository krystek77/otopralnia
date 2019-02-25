import React, { Component } from 'react';
import classes from './SectionTab.css';
import IndicatorButton from '../../UI/IndicatorButton/IndicatorButton';
import Card from '../../../components/Cards/Card/Card';

class SectionTab extends Component {

    state = {
        active:this.props.active
    }

    openTabHandler = () => {
        //console.log("clicked")
        this.setState((prevState)=>({active:!prevState.active}))
    }

    render(){
        let contentClass = [classes.Content]
        let titleClass = [classes.Title]
        const {active} = this.state

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
                        {this.props.title}</h2>
                    </div>
                </header>
                
                <div className={contentClass}>
                <div className={classes.Cards}>
                        <p className={classes.CardsDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse atque hic corporis? Magnam nemo nobis nam neque, adipisci cumque, deleniti recusandae iste aperiam nisi iusto repellat? Soluta corporis laboriosam ea.</p>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                    </div>
                </div>
            </section>
        )
    }
}

export default SectionTab