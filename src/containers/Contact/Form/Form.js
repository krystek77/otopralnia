import React, { Component } from 'react';
import classes from './Form.css';
import Button from '../../../components/UI/Button/Button';
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import {faUser,faPhoneSquare, faFileSignature, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {FaUser,FaPhoneSquare, FaFileSignature, FaEnvelope} from 'react-icons/fa';

class Form extends Component {

    render() {
        return (
            <form className={classes.Form}>
                <div className={classes.UserDetails}>
                    <div className={classes.WrapperInput}>
                        <label className={classes.Label} htmlFor="name">
                            <FaUser/>
                        </label>
                        <input 
                            className={classes.Input} 
                            type="text" id="name" 
                            placeholder="Podaj imię" 
                            required/>
                    </div>
                    <div className={classes.WrapperInput}>
                        <label className={classes.Label} htmlFor="email">
                            <FaEnvelope/>
                        </label>
                        <input 
                            className={classes.Input} 
                            type="text" id="email" 
                            placeholder="Podaj e-mail" 
                            required/>
                    </div>
                    <div className={classes.WrapperInput}>
                        <label className={classes.Label} htmlFor="phone">
                            <FaPhoneSquare/>
                        </label>
                        <input 
                            className={classes.Input} 
                            type="text" id="phone" 
                            placeholder="Podaj telefon"/>
                    </div>
                    <div className={classes.WrapperInput}>
                        <label className={classes.Label} htmlFor="subject">
                            <FaFileSignature/>
                        </label>
                        <input 
                            className={classes.Input} 
                            type="text" id="subject" 
                            placeholder="Podaj temat"/>
                    </div>
                </div>
                <div className={classes.Message}>
                    <div className={classes.WrapperInput}>
                        <label className={classes.Label} htmlFor="message">*Treść:</label>
                        <textarea className={classes.Textarea} name="" id="message" cols="30" rows="12" placeholder="Wpisz treść wiadomości" required></textarea>
                    </div>
                </div>
                <Button btnClass="Blue">Wyślij</Button>
            </form>
        )
    }
}

export default Form