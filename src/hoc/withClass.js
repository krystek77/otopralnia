import React from 'react';

const withClass = (Component,ClassName) => {
    return props => (
        <Component cName={ClassName}/>
    )
}

export default withClass