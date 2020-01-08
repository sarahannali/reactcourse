import React from 'react';

const userInput = (props) => {
    const inStyle = {
        backgroundColor: "#fff",
        border: "10px dashed #b156d8"
      };

    return (
        <div>
            <input 
                type="text" 
                onChange={props.changed} 
                value={props.ogName}
                style={inStyle}></input>
        </div>
    );
};

export default userInput;