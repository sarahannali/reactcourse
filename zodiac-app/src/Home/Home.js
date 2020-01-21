import React, { Component } from 'react';
import classes from './Home.module.css';
import {Link} from 'react-router-dom';

class Home extends Component {
  render() {
    const allSigns = this.props.content.map((el) => {
        return (
            <div className="four wide column" key={el.sign}>
                <Link to={"/" + el.sign}>
                    <img src={el.imgsrc} alt="zodiac img" />
                </Link>
            </div>
        )
    })

    return (
      <div className={"ui grid stackable container " + classes.Home}>
          {allSigns}
          <div className={classes.attribution}>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"     title="Flaticon">www.flaticon.com</a></div>
      </div>
    );
  }
}

export default Home;