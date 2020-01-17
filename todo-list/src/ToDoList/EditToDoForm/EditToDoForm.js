import React, { Component } from 'react';
import classes from './EditToDoForm.module.css';

class EditToDoForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            edit: ""
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
        this.props.editToDo(this.state.edit);
        this.setState(() => ({
            edit: ""
        }))
    }

  render() {
    return (
      <div className={classes.EditToDoForm}>
          <form onSubmit={this.handleSubmit}>
                <label htmlFor="edit"></label>
                <input
                    type="text"
                    id="edit"
                    name="edit"
                    placeholder="Edit"
                    value={this.state.edit}
                    onChange={this.handleChange}></input>
                <button>Edit todo!</button>
            </form>
      </div>
    );
  }
}

export default EditToDoForm;