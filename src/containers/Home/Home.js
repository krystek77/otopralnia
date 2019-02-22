import React, { Component } from 'react';
import classes from './Home.css';

import Aux from '../../hoc/Aux/Aux';
import Header from '../../components/Header/Header';


class Home extends Component {

    state = {
        //data:{title:"",info:"",details:""}
        data:null
    }

    componentDidMount(){
        
        // console.log("Component Did Mount")
        // console.log(this.props.match.url)
        const dataPages = this.props.data
        const dataPage = dataPages.find((page)=>page.url===this.props.match.url)
        this.setState({
            data:dataPage
        })
    }

    render(){
        // console.log("Render")
        // console.log(this.props)
        // console.log(this.state.data)
        
        let content = null
        const {data} = this.state

        if(data){
            // console.log(this.state.data.id)
            // console.log(this.state.data.title)
            // console.log(this.state.data.info)
            // console.log(this.state.data.details)
            const {id,title,info,details,actionBtn} = data

            content = (
                <Aux>
                    <Header 
                        title={title} 
                        info={info} 
                        details={details}
                        actionBtn={actionBtn}
                        id={id}
                        />
                    <main className={classes.Home}>
                        <div className={classes.Container}>
                            <h1 style={{fontSize:"6rem",textAlign:"center"}}>
                            Strona startowa {this.props.match.path}
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

export default Home