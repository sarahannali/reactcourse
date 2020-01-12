import React from 'react';

const validation = (props) => {
    let val = "Text too short";

    if (props.length >= 5) {
        val = "Text long enough!";
    }

    return (
        <div>
            {val}
        </div>
    );
};

export default validation;