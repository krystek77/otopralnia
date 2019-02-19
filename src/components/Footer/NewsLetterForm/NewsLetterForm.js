import React, { Component } from 'react';
import classes from './NewsLetterForm.css';
import {MdDone,MdEmail} from 'react-icons/md'
import Button from '../../UI/Button/Button';

class NewsLetterForm extends Component {

    state = {
        focus:""
    }

    inputTextFocusHandler=()=>{
        console.log("Focus");
        this.setState({
            focus:true
        })
    }
    inputTextBlurHandler=()=>{
        console.log("Blur");
        this.setState({
            focus:false
        })
    }

    render(){

        let classFocus = 100;

        if(this.state.focus){
            classFocus="Focus"
        }

        return (
            <form className={classes.NewsLetterForm}>
                <h3 className={classes.Title}>Newsletter</h3>
                <p className={classes.SubTitle}>
                    Zapisz się i bądź na bieżąco z promocjami
                    i nowościami z branży pralniczej.
                </p>
                <div className={[classes.InputGroup,classes[classFocus]].join(' ')}>
                    <span className={classes.LeadingIcon}>
                        <MdEmail/>
                    </span>
                    <label htmlFor="email" className={[classes.LabelText,classes[classFocus]].join(' ')}>Email</label>
                    <input 
                        type="text" 
                        id="email"
                        className={classes.InputText}
                        onFocus={this.inputTextFocusHandler}
                        onBlur={this.inputTextBlurHandler}/>
                    <span className={[classes.TrailingIcon,classes[classFocus]].join(' ')}>
                        <MdDone/>
                    </span>
                </div>
                <div className={classes.InputGroup}>
                    <input 
                        className={classes.CheckBox} 
                        type="checkbox" 
                        id="newsletter"
                     
                        />
                    <label 
                        className={classes.LabelCheckBox} 
                        htmlFor="newsletter">
                        Akceptuje regulamin
                    </label>
                </div>
                <Button btnClass="Black">Subskrybuj</Button>
            </form>
        )
    }
}
export default NewsLetterForm;