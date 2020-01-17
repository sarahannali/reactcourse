import React, { Component } from 'react';
import classes from './ToDoList.module.css';
import NewToDoForm from './NewToDoForm/NewToDoForm';
import ToDo from './ToDo/ToDo';
import uuid from 'uuid';

class ToDoList extends Component {
    constructor(props){
        super(props);
        this.state = {
            todos: [],
        };
        this.addToDo = this.addToDo.bind(this);
        this.remove = this.remove.bind(this);
        this.editToDo = this.editToDo.bind(this);
        this.toggleCompletion = this.toggleCompletion.bind(this);
    }

    addToDo(item){
        item.id = uuid();
        item.completed = false;
        this.setState((st) => ({
            todos: [...st.todos, item]
        }));
    }

    remove(id){
        this.setState({
            todos: this.state.todos.filter((todo) => todo.id !== id)
        });
    }

    editToDo(editedText, id){
        const updatedToDos = this.state.todos.map((todo) => {
            if(todo.id === id){
                return {...todo, todo: editedText}
            }
            else{
                return todo
            }
        })
        this.setState({todos: updatedToDos})
    }

    toggleCompletion(id){
        const updatedToDos = this.state.todos.map((todo) => {
            if(todo.id === id){
                if(todo.completed){
                    return {...todo, completed: false}
                }
                else{
                    return {...todo, completed: true}
                }
            }
            else{
                return todo
            }
        })
        this.setState({todos: updatedToDos})
    }

    render() {
        const currToDos = [...this.state.todos];
        const allToDos = currToDos.map((_, i) => {
            const currToDo = this.state.todos[i]
            return <ToDo 
                todo={currToDo.todo}
                id={currToDo.id}
                completed={currToDo.completed}
                key={uuid()}
                remove={this.remove}
                editToDo={this.editToDo}
                toggleCompletion={this.toggleCompletion} />
        })
        return (
        <div className={classes.ToDoList}>
            <h1>ToDo List</h1>
            <NewToDoForm addToDo={this.addToDo}/>
            <ul>{allToDos}</ul>
        </div>
        );
    }
}

export default ToDoList;