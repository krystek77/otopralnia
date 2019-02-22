import React from 'react';
import classes from './IndicatorButton.css'
import {MdAdd,MdRemove} from 'react-icons/md'

const indicatorButton = props => {

    const classBtn = [classes.IndicatorButton,classes[props.classBtn]].join(' ')

    return (
        <button className={classBtn}>
            {props.open ? <MdRemove/>:<MdAdd/>}
        </button>
    )
}

export default indicatorButton