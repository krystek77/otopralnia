import React, { Component } from 'react';
import classes from './SectionTab.css';
import IndicatorButton from '../../UI/IndicatorButton/IndicatorButton';

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
                            {this.props.titleTab}
                        </h2>
                    </div>
                </header>
                {/** diffrence content depending on page */}
                <div className={contentClass}>
                    <div className={classes.Cards}>
                        <p 
                            className={classes.CardsDescription}>
                            {this.props.descriptionTab}
                        </p>
                        {this.props.children}
                    </div>
                </div>
                
            </section>
        )
    }
}

export default SectionTab