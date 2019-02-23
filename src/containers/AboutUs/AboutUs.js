import React, { Component } from 'react';
import classes from './AboutUs.css';

import Aux from '../../hoc/Aux/Aux';
import Header from '../../components/Header/Header';
import Backdrop from '../../components/UI/Backdrop/Backdrop';
import PageSectionTitle from '../../components/PageSectionTitle/PageSectionTitle';

import axios from '../../axios-pralma';

class AboutUs extends Component {
    
    state = {
        data:null
    }

    componentDidMount(){
        //console.log("About page")
        axios.get("/about.json")
        .then(response=>{
            //console.log(response.data)
            this.setState({
                data:response.data
            })
          })
          .catch(error=>console.log(error.message))
    }
    render(){
        
    let content = null
    const {data} = this.state

    if(data){
            
        const {title,info,details,page,actionBtn} = data

        content = (
            <Aux>
                <Header 
                title={title} 
                info={info} 
                details={details}
                page={page}
                actionBtn={actionBtn}
                />
                <main className={classes.AboutUs}>
                    <section className={classes.Company}>
                        <Backdrop backDropColor="Grey" backDropWidth="Part"/>
                        <div className={classes.Container}>
                            <PageSectionTitle>Firma</PageSectionTitle>
                            <p className={[classes.Content,classes.Introduction].join(' ')}>
                                Jesteśmy polskim producentem przemysłowych urządzeń pralniczych. 
                            </p>
                            <p className={[classes.Content,classes.Description].join(' ')}>
                               Budujemy urządzenia pralnicze oraz dostarczamy ekonomicznych i podnoszących zyskowność 
                               rozwiązań dla pralni przemysłowych. Pomagamy w projektowaniu małych i dużych pralni każdego typu i wielkości, 
                               na każdym etapie inwestycji. Dostarczamy wyposażenie, przeprowadzamy montaż oraz uruchomienie pralni. 
                            </p>
                            <p className={[classes.Content,classes.Description].join(' ')}>
                               Chętnie dzielimy się naszą wiedzą i olbrzymim doświadczeniem. Świadczymy wsparcie techniczne oraz
                               serwis gwarancyjny i pogwarancyjny.  Bazujemy na długoterminowej i zaufanej wspólpracy biznesowej.
                            </p>
                            <p className={[classes.Content,classes.Description].join(' ')}>
                               W wolnych chwilach piszemy bloga o pralnictwie.
                            </p>  
                        </div>
                    </section>
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

export default AboutUs