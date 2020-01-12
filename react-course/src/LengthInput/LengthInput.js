import React from 'react';

const lengthInput = (props) => {
    return (
        <div>
            <input 
                type="text" 
                onChange={props.changed} 
            ></input>
            <p>Length: {props.length}</p>
        </div>
    );
};

export default lengthInput;