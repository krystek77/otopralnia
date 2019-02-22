import React, { Component } from 'react';
import classes from './Equipment.css';

import Aux from '../../hoc/Aux/Aux';
import Header from '../../components/Header/Header';
import SectionTab from '../../components/SectionTab/SectionTab';

class Equipment extends Component {
    state = {
        //data:{title:"",info:"",details:""}
        data:null
    }

    componentDidMount(){
        const dataPages = this.props.data
        const dataPage = dataPages.find((page)=>page.url===this.props.match.url)
        this.setState({
            data:dataPage
        })
    }

    render(){

    let content = null
    const {data} = this.state

    if(data){
            
        const {id,title,info,details} = data

        content = (
            <Aux>
                <Header 
                title={title} 
                info={info} 
                details={details}
                id={id}/>
                <main className={classes.Equipment}>
                    <SectionTab title="Maszyny obsługowe" active/>
                    <SectionTab title="Maszyny samoobsługowe"/>
                </main>
            </Aux>
            )
        }

        return (
            <Aux>
                {content}
            </Aux>
        )
    }
}

export default Equipment