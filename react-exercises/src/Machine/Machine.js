import React from 'react';

class Machine extends React.Component {
    render() {
        const result = this.props.s1 + this.props.s2 + this.props.s3;
        const win = ((this.props.s1 === this.props.s2) && (this.props.s1 === this.props.s3))

        return (
            <div>
                <p>{result}</p>
                <p>{win ? "You won!" : "You Lost :("}</p>
            </div>

        )
    }
}

export default Machine;