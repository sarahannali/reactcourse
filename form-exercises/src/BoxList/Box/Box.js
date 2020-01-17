import React, { Component } from 'react';

class Box extends Component {
    constructor(props){
        super(props);
        this.clickHandler = this.clickHandler.bind(this);
    }
    clickHandler(){
        this.props.remove(this.props.id);
    }

    render() {
        let styles = {
            backgroundColor: this.props.bgColor,
            width: this.props.width,
            height: this.props.height
        }

        return (
        <div style={styles}>
            <button onClick={this.clickHandler}>X</button>
        </div>
        );
    }
}

export default Box;