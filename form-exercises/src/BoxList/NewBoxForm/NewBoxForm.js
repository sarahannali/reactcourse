import React, { Component } from 'react';

class NewBoxForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            bgColor: "",
            width: "",
            height: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.addBox(this.state);
        this.setState(() => ({
            bgColor: "",
            width: "",
            height: ""
        }))
    }

    render() {
        return (
        <div>
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="bgColor">Background Color: </label>
                <input
                    type="text"
                    id="bgColor" 
                    name="bgColor"
                    placeholder="Background Color"
                    value={this.state.bgColor}
                    onChange={this.handleChange}></input>
                <label htmlFor="width">Width: </label>
                <input
                    type="number"
                    id="width" 
                    name="width"
                    placeholder="Width"
                    value={this.state.width}
                    onChange={this.handleChange}></input>
                <label htmlFor="height">Height: </label>
                <input
                    type="number"
                    id="height" 
                    name="height"
                    placeholder="Height"
                    value={this.state.height}
                    onChange={this.handleChange}></input>
                <p></p>
                <button>Create Box!</button>
            </form>
        </div>
        );
    }
}

export default NewBoxForm;