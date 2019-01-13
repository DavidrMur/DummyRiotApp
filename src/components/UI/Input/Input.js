import React from 'react';

const input = (props) => {
    let inputElement = null;

    if (props.invalid && props.shouldValidate && props.touched){
        
    }

    switch (props.elementType) {
        case ('input'):
            inputElement = <input
                {...props.elementConfig}
                value={props.value}
                onSubmit={props.submit} />
            break;
        default:
            inputElement = <input
            {...props.elementConfig}
            value={props.value}
            onSubmit={props.submit} />
    }

    return (
        <div>
            <label>{props.label}</label>
            {inputElement}
        </div>
    );
};

export default input;
