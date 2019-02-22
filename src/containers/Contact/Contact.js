import React, { Component } from 'react';
import classes from './Contact.css';

import Aux from '../../hoc/Aux/Aux';
import Header from '../../components/Header/Header';
import Backdrop from '../../components/UI/Backdrop/Backdrop';
import PageSectionTitle from '../../components/PageSectionTitle/PageSectionTitle';
import IFrame from 'react-iframe';
import Form from './Form/Form';

class Contact extends Component {
    state = {
        //data:{title:"",info:"",details:"",...}
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
            
        const {id,title,info,details,contactBoxes} = data
        // console.log(contactBoxes)
        content = (
            <Aux>
                <Header 
                    title={title} 
                    info={info} 
                    details={details}
                    contactBoxes={contactBoxes}
                    id={id}
                    />
                <main className={classes.Contact}>
                    <section className={classes.GoogleMap}>
                        <Backdrop backDropColor="Grey" backDropWidth="Part"/>
                        <div className={classes.Container}>
                            <PageSectionTitle>Dojazd</PageSectionTitle>
                            <p className={[classes.Content,classes.Introduction].join(' ')}>
                                Zobacz wyposażenie pralni przemysłowych oraz komercyjnych i wybierz odpowiednie do swoich potrzeb. 
                            </p>
                            <p className={[classes.Content,classes.Description].join(' ')}>
                                Nasi pracownicy chętnie pokażą Państwu wszystkie urządzenia. Opiszą zalety każdych
                                z nich, zastosowanie oraz funkcje i rozwiązania gwarantujące niskie koszty prania oraz zwiększające
                                zyskowność. 
                            </p>
                            
                        </div>
                        <IFrame url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2516.9431208041!2d20.60559285167648!3d50.88776307943773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47182872456572d3%3A0xc686637d22c1997!2sPPUP+%22Pralma%22+Sp.+z+o.o.!5e0!3m2!1spl!2spl!4v1550323572904"
                            width="100%"
                            height="600px"
                            id="myId"
                            className={classes.Map}
                            display="initial"
                            position="relative"
                            allowFullScreen/>
                    </section>
                    <section className={classes.Form}>
                        <Backdrop backDropColor="Grey" backDropWidth="Part"/>
                        <div className={classes.Container}>
                            <PageSectionTitle>Formularz kontaktowy</PageSectionTitle>
                            <Form/>  
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

export default Contact