import React, { Component } from 'react';
import classes from './SideBar.module.css';

class SideBar extends Component {
    render() {
        return (
        <div className={classes.SideBar}>
            <h1><span>Shakespeare's </span><span style={{fontWeight:400}}>Insults</span></h1>
            <img src="https://i.ya-webdesign.com/images/shakespeare-transparent-cartoon-17.png" alt="Shakespeare Icon"></img>
            <p></p>
            <button onClick={this.props.onClick}><i className="fas fa-sync-alt"></i></button>
        </div>
        );
    }
}

export default SideBar;