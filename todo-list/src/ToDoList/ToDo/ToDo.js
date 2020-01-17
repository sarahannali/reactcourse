import React, { Component } from 'react';
import classes from './ToDo.module.css';
import EditToDoForm from '../EditToDoForm/EditToDoForm';

class ToDo extends Component {
    constructor(props){
        super(props);
        this.state = {
            editing: false,
        }
        this.removeHandler = this.removeHandler.bind(this);
        this.editHandler = this.editHandler.bind(this);
        this.editToDo = this.editToDo.bind(this);
        this.completedHandler = this.completedHandler.bind(this);
    };
    
    removeHandler(){
        this.props.remove(this.props.id);
    };

    editHandler(){
        this.setState({editing: true})
    }

    editToDo(editedText){
        this.props.editToDo(editedText, this.props.id);
    }

    completedHandler(){
        this.props.toggleCompletion(this.props.id);
    }

    render() {
        return (
        <div className={classes.ToDo}>
            <div onClick={this.completedHandler}>
                <li className={this.props.completed
                    ? classes.completed + " " + classes.task
                    : null}>{this.props.todo}</li>
            </div>
            <div className={this.state.editing
                ? classes.hidden
                : null}>
                <button onClick={this.removeHandler}><i class="fas fa-trash"></i></button>
                <button onClick={this.editHandler}><i class="fas fa-pencil-alt"></i></button>
            </div>
            {this.state.editing && <EditToDoForm editToDo={this.editToDo} />}
        </div>
        );
    }
}

export default ToDo;