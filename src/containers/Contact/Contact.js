import React, { Component } from 'react';
import classes from './Contact.css';

import Aux from '../../hoc/Aux/Aux';
import Header from '../../components/Header/Header';

class Contact extends Component {
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
            
        const {title,info,details,actionBtn} = data

        content = (
            <Aux>
                <Header 
                    title={title} 
                    info={info} 
                    details={details}
                    actionBtn={actionBtn===null ? false : actionBtn}
                    />
                <main className={classes.Contact}>
                    <div className={classes.Container}>
                        <h1 style={{fontSize:"6rem",textAlign:"center"}}>
                            Kontact {this.props.match.path}
                        </h1>    
                    </div>
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

export default Contact