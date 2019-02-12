import React, { Component } from 'react';
import classes from './ToggleButton.css';

class ToggleButton  extends Component {

    constructor(props){
        super(props)
        this.state = {
            isOpen:false
        }
    }
    
    handleClickedButton = () => {
        this.setState({
            isOpen:!this.state.isOpen
        })
    }

    render() {
        const btnClass = [classes.Button,classes[this.props.btnClass]].join(' ')
        const isOpen = this.state.isOpen
        let sign = "+"

        if(isOpen) {
            sign = "-"
        }
        return (
            <button 
                className={btnClass} 
                onClick={this.handleClickedButton}>
                {sign}
            </button>
        )
    }
}




export default ToggleButton