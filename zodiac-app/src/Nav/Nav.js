import React, { Component } from 'react';
import classes from './Nav.module.css';
import {NavLink} from 'react-router-dom';

class Nav extends Component {
    render() {
        let allSigns = this.props.content.map((el) => {
            return (
                <NavLink exact className="item" activeClassName="item active" to={"/" + el.sign} key={el.sign}>
                    {el.sign}
                </NavLink>
            )
        })
        return (
        <nav className={classes.Nav + " ui top fixed inverted menu"}>
            <NavLink exact className="header item" activeClassName="item active" to="/">
                Zodiac Signs
            </NavLink>
            {allSigns}
        </nav>
        );
    }
}

export default Nav;