import React, { Component } from 'react';
import classes from './Article.css'

import H3 from '../../../../components/H3/H3';
import Aux from '../../../../hoc/Aux/Aux';
import SubNavigation from './SubNavigation/SubNavigation';
import ItemsList from './ItemsList/ItemsList';
import Technologies from './Technologies/Technologies';
import Specyfication from './Specyfication/Specyfication';
import {MdSkipPrevious,MdSkipNext,MdStop} from 'react-icons/md'

// import FX_OPL from '../../../../assets/equipment/opl/FX_OPL.jpeg'
import FX_COIN from '../../../../assets/equipment/coin/FX_COIN.jpeg'

class Article extends Component {

    state={
        loadedItem:null,
    }

    componentDidUpdate(prevProps,prevState){
        // console.log("Article componenent did update")
        // console.log(prevProps)
        // console.log(prevState)
        // console.log(this.props.match.params.name)
        if(prevProps.match.params.name!==this.props.match.params.name){
            // console.log("YES");
            const item = this.props.family.find((item)=>item.name===this.props.match.params.name)
            // console.log(item)

            this.setState({
                loadedItem:item
            })
        }
    }

    componentDidMount(){
        // console.log("Article Component did mount")
        
        if(this.props.match.params.name){
            if(!this.state.loadedItem) {
                const item = this.props.family.find((item)=>item.name===this.props.match.params.name)
                // console.log(item)
                this.setState({
                    loadedItem:item
                })
            }
        }
        // console.log("Article")
        // console.log(this.props.family)
        // console.log(this.props.match)
    }
    prevHandler = ()=>{
        console.log("PREV")
        this.props.history.goBack()
    }
    backHandler = ()=>{
        console.log("BACK")
        this.props.history.push({pathname:'/wyposazenie-pralni-przemyslowych'})
        // console.log(this.props.match)
    }
    nextHandler = ()=>{
        console.log("NEXT")
        this.props.history.go(1)
    }
    render(){
        // console.log("Article")
        // console.log(this.props.match.url)
        let content = null
        
        if(this.state.loadedItem){
            const {name,feauters,options} = this.state.loadedItem

            // console.log(this.state.loadedItem)
            // console.log(name,feauters,options)

            content = (
                <article>
                    <header className={classes.Header}>
                        <div className={classes.Container}>
                            <h2 className={classes.Type}>{name}</h2>
                            <div className={classes.Controls}>
                                <span><MdSkipPrevious onClick={this.prevHandler}/></span>
                                <span><MdStop onClick={this.backHandler}/></span>
                                <span><MdSkipNext onClick={this.nextHandler}/></span>
                            </div>
                        </div>
                    </header>
                     <div className={classes.Content}>
                    <div className={classes.Container}>
                        <div className={classes.WrapperContent}>
                            {/** Introduction stateless component */}
                            <section className={classes.Introduction}>

                                <div className={classes.ImageWrapper}>
                                    <img className={classes.Image} src={FX_COIN} alt=""/>
                                </div>
                                <div className={classes.FeaturesWrapper}>
                                    <H3 hClass="Black" hSize="Sbig" hMb="Mmedium">
                                    {this.props.familyTitle}
                                    </H3>
                                    <div className={classes.FeauterItemsWrapper}>
                                        <p className={classes.ItemsTitle}>Cechy</p>
                                        <ItemsList items={feauters}/>
                                    </div>
                                    <div className={classes.OptionItemsWrapper}>
                                        <p className={classes.ItemsTitle}>Opcje</p>
                                        <ItemsList items={options}/>
                                    </div>
                                    <p className={classes.ShortDescription}>
                                        {this.props.shortDesc}  
                                    </p>
                                </div>
                            </section>
                            {/** Technology statefull component */}
                            <Technologies technologies={this.props.technologies}/>
                        </div>
                        {/**  Subnavigation stateless component*/}
                        <SubNavigation subNavigation={this.props.family} match={this.props.match}/>
                        {/** Specyfication statefull component */}
                        <Specyfication/>
                        </div>
                    </div>
                </article>
            
            )
        }

        return(
            <Aux>
                {content}
            </Aux>
        )
    }
}

export default Article