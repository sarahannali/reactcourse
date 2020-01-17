import React, { Component } from 'react';
import classes from './NewToDoForm.module.css';

class NewToDoForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            todo: ""
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
        this.props.addToDo(this.state);
        this.setState(() => ({
            todo: ""
        }))
    }

    render() {
        return (
        <div className={classes.NewToDoForm}>
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="todo">ToDo: </label>
                <input
                    type="text"
                    id="todo"
                    name="todo"
                    placeholder="todo"
                    value={this.state.todo}
                    onChange={this.handleChange}></input>
                <button>Add todo!</button>
            </form>
        </div>
        );
    }
}

export default NewToDoForm;