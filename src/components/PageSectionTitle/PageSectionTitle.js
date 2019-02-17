import React from 'react';
import classes from './PageSectionTitle.css';

const pageSectionTitle = props => {

    return(
        <h2 className={classes.PageSectionTitle}>{props.children}</h2>
    )
}

export default pageSectionTitle