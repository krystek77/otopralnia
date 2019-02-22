import React, { Component } from 'react';
import classes from './NewsLetterForm.css';
import {MdDone,MdEmail,MdHighlightOff} from 'react-icons/md'
import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';

const EMAIL_PATTERN =  /^[a-z\d]+[\w\d.-]*@(?:[a-z\d]+[a-z\d-]+\.){1,5}[a-z]{2,6}$/i

class NewsLetterForm extends Component {

    state = {
        focus:"",
        email:"",
        accept:false,
        errors:{
            email:false,
            accept:false
        }
    }

    messages = {
        email_incorrect:"Niepoprawny email",
        accept_incorrect:"Brak zgody",
    }

    inputFocusHandler=()=>{
        console.log("Focus");
        this.setState({
            focus:true
        })
    }
    inputBlurHandler=()=>{
        console.log("Blur");
        this.setState({
            focus:false
        })
    }

    changeHandler=(e)=>{
        console.log(e.target.type)
        if(e.target.type==="text"){
            const value = e.target.value.trim()
            this.setState({
                email:value
            })
        } else if(e.target.type==="checkbox"){
            const checked = e.target.checked
            this.setState({
                accept:checked
            })
        }
    }

    newsletterValidation = ()=>{
        console.log("Validation")
        const validation = {
            email:false,
            accept:false,
            correct:false,
        }
        if(this.state.email.match(EMAIL_PATTERN)!==null){
            validation.email=true
        }
        if(this.state.accept) {
            validation.accept=true
        }
        if(validation.email && validation.accept){
            validation.correct=true
        }
        return validation
    }

    submitNewsletterHandler = (e) =>{
        e.preventDefault();
        const validation = this.newsletterValidation()

        if(validation.correct){
            console.log('Form submitted')
            this.setState({

                focus:"",
                email:"",
                accept:false,
                errors:{
                    email:false,
                    accept:false
                }
            })
        } else {
            console.log('Form incorrect')
            this.setState({
                errors:{
                    email:!validation.email,
                    accept:!validation.accept
                }
            })
        }
    }
    
    
    componentDidUpdate(prevProps,prevState){
        console.log("Komponent zaktualizowany")
        console.log(prevState)  
        if(prevState.email!==this.state.email && this.state.email!==""){// &&false at the beginning
            const validation = this.newsletterValidation()
            this.setState({
                errors:{
                    email:!validation.email
                }
            })
        }
        if(prevState.accept!==this.state.accept && this.state.accept===true){ // &&false at the beginning
            const validation = this.newsletterValidation()
            this.setState({
                errors:{
                    accept:!validation.accept
                }
            })
        }
    }

    render(){
        console.log(this.state.email)
        let classFocus ="";
        let trailningIcon = null;

        if(this.state.focus){
            classFocus="Focus"
        }
        if(!this.state.focus && this.state.email!==""){
            classFocus="Blur"
        }
        if(this.state.email!==""){
            trailningIcon = (
                <Aux> 
                    { this.state.errors.email ? 
                    <span className={[classes.TrailingIcon,classes["Wrong"]].join(' ')}><MdHighlightOff/></span> :
                    <span className={[classes.TrailingIcon,classes["Right"]].join(' ')}><MdDone/></span>
                    } 
                </Aux>
            )
        }

        return (
            
            <form className={classes.NewsLetterForm} onSubmit={this.submitNewsletterHandler}>
                <p className={classes.SubTitle}>
                    Zapisz się, aby być na bieżąco z promocjami
                    i nowościami z branży pralniczej.
                </p>
                <div className={classes.InputGroup}>

                    <div className={[classes.InputWrapper,classes[classFocus]].join(' ')}>
                        <span className={classes.LeadingIcon}>
                            <MdEmail/>
                        </span>
                        <label htmlFor="email" className={[classes.LabelText,classes[classFocus]].join(' ')}>Email</label>
                        <input
                            onChange={this.changeHandler}
                            value={this.state.email}
                            type="text" 
                            id="email"
                            name="email"
                            className={classes.InputText}
                            onFocus={this.inputFocusHandler}
                            onBlur={this.inputBlurHandler}/>
                            {/*errors indication by using appropriate icons*/}
                            {trailningIcon}
                    </div>

                    {/*Error message container*/}
                    {this.state.errors.email && <span className={classes.Error}>{this.messages.email_incorrect}</span>}
                    
                </div>
                <div className={classes.InputGroup}>
                    <input 
                        className={classes.CheckBox}
                        type="checkbox" 
                        id="newsletter"
                        name="checkbox"
                        onChange={this.changeHandler}
                        checked={this.state.accept}
                        />
                    <label 
                        className={classes.LabelCheckBox} 
                        htmlFor="newsletter">
                        Akceptuje regulamin
                    </label>
                    {/*Error message container*/}
                    {this.state.errors.accept && <span className={classes.Error}>{this.messages.accept_incorrect}</span>}
                </div>
                <Button btnClass="Black">Subskrybuj</Button>
            </form>
        )
    }
}
export default NewsLetterForm;