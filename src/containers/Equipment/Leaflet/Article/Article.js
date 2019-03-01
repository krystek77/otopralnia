import React, { Component } from 'react';
import classes from './Article.css'

import H3 from '../../../../components/H3/H3';
import Aux from '../../../../hoc/Aux/Aux';
import SubNavigation from './SubNavigation/SubNavigation';
import Technologies from './Technologies/Technologies';
import Specyfication from './Specyfication/Specyfication';

import image from '../../../../assets/machines/FX80L.jpeg';

class Article extends Component {

    state={
        loadedItem:null,
    }

    componentDidUpdate(prevProps,prevState){
        console.log("Article componenent did update")
        console.log(prevProps)
        console.log(prevState)
        console.log(this.props.match.params.name)
        if(prevProps.match.params.name!==this.props.match.params.name){
            console.log("YES");
            const item = this.props.family.find((item)=>item.name===this.props.match.params.name)
            console.log(item)

            this.setState({
                loadedItem:item
            })
        }
    }

    componentDidMount(){
        console.log("Article Component did mount")
        
        if(this.props.match.params.name){
            if(!this.state.loadedItem) {
                const item = this.props.family.find((item)=>item.name===this.props.match.params.name)
                console.log(item)
                this.setState({
                    loadedItem:item
                })
            }
        }
        console.log("Article")
        console.log(this.props.family)
        console.log(this.props.match)
    }
    render(){
        console.log("Render article")
        console.log(this.props)
        let content = null
        
        if(this.state.loadedItem){
            const {name} = this.state.loadedItem

            console.log(this.state.loadedItem)
            console.log(name)

            content = (
                <article>
                    <header className={classes.Header}>
                        <div className={classes.Container}>
                            <h2 className={classes.Type}>{name}</h2>
                        </div>
                    </header>
                     <div className={classes.Content}>
                    <div className={classes.Container}>
                        <div className={classes.WrapperContent}>
                            {/** Introduction stateless component */}
                            <section className={classes.Introduction}>

                                <div className={classes.ImageWrapper}>
                                    <img className={classes.Image} src={image} alt=""/>
                                </div>
                                <div className={classes.FeaturesWrapper}>
                                    <H3 hClass="Black" hSize="Sbig" hMb="Mmedium">
                                    {this.props.familyTitle}
                                    </H3>
                                    <div className={classes.FeauterItemsWrapper}>
                                        <p className={classes.ItemsTitle}>Cechy</p>
                                        <ul className={classes.ItemsList}>
                                            <li>bez wirowania</li>
                                            <li>sterowanie półautomatyczne</li>
                                            <li>oblachowanie ze stali nierdzewnej</li>
                                            <li>sterownik mikroprocesorowy TC</li>
                                            <li>oba bębny ze stali nierdzewnej</li>
                                            <li>duże kulowe zawory zasilające 3/4 cala</li>
                                            <li>duży kulowy zawór spustowy o średnicy 60 mm</li>
                                            <li>podgrzew elektryczny</li>
                                            <li>funkcje: pranie, płukanie, krochmalenie</li>
                                            <li>trwała budowa</li>
                                            <li>niskie koszty eksploatacji</li>
                                            <li>prosta konstrukcja</li>
                                        </ul>
                                    </div>
                                    <div className={classes.OptionItemsWrapper}>
                                        <p className={classes.ItemsTitle}>Opcje</p>
                                        <ul className={classes.ItemsList}>
                                            <li>wersja elektryczno - parowa</li>
                                        </ul>
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
                        <SubNavigation subNavigation={this.props.family}/>
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