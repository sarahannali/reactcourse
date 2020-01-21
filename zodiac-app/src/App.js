import React, { Component } from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Nav from './Nav/Nav';
import Home from './Home/Home';
import ZodiacPage from './ZodiacPage/ZodiacPage';

class App extends Component {
  static defaultProps = {
    signs: [
      {
        sign: "Aquarius",
        dates: "January 20th - February 18th",
        imgsrc: "./assets/zodiac_imgs/009-aquarius.png",
        facts: [
          "Aquarius-born have a deep need to be some time alone and away from everything, in order to restore power.",
          "They are deep thinkers and highly intellectual people who love helping others.",
          "People born under the Aquarius sign, look at the world as a place full of possibilities."
        ]
      },
      {
        sign: "Pisces",
        dates: "February 19th - March 20th",
        imgsrc: "./assets/zodiac_imgs/004-pisces.png",
        facts: [
          "Pisces are selfless, they are always willing to help others, without hoping to get anything back.",
          "People born under the Pisces sign have an intuitive understanding of the life cycle and thus achieve the best emotional relationship with other beings.",
          "They are also known to be most tolerant of all the zodiac signs."
        ]
      },
      {
        sign: "Aries",
        dates: "March 21st - April 19th",
        imgsrc: "./assets/zodiac_imgs/012-aries.png",
        facts: [
          "Aries is one of the most active zodiac signs. It is in their nature to take action, sometimes before they think about it well.",
          "They are continuously looking for dynamic, speed and competition, always being the first in everything - from work to social gatherings.",
          "Strong personalities born under this sign have a task to fight for their goals, embracing togetherness and teamwork through this incarnation."
        ]
      },
      {
        sign: "Taurus",
        dates: "April 20th - May 20th",
        imgsrc: "./assets/zodiac_imgs/011-taurus.png",
        facts: [
          "Stable and conservative, this is one of the most reliable signs of the zodiac, ready to endure and stick to their choices until they reach the point of personal satisfaction.",
          "They find it easy to make money and stay on same projects for years, or until they are completed.",
          "This makes them excellent employees, great long-term friends and partners, always being there for people they love."
        ]
      },
      {
        sign: "Gemini",
        dates: "May 21st - June 20th",
        imgsrc: "./assets/zodiac_imgs/010-gemini.png",
        facts: [
          "People born under this Sun sign often have a feeling that their other half is missing, so they are forever seeking new friends, mentors, colleagues and people to talk to.",
          "Gemini's changeable and open mind makes them excellent artists, especially writers and journalists, and their skills and flexibility make them shine in trade, driving and team sports.",
          "They are fascinated with the world itself, extremely curious, with a constant feeling that there is not enough time to experience everything they want to see."
        ]
      },
      {
        sign: "Cancer",
        dates: "June 21st - July 22nd",
        imgsrc: "./assets/zodiac_imgs/001-cancer.png",
        facts: [
          "Deeply intuitive and sentimental, Cancer can be one of the most challenging zodiac signs to get to know.",
          "They are very emotional and sensitive, and care deeply about matters of the family and their home.",
          " As children, they don't have enough coping and defensive mechanisms for the outer world, and have to be approached with care and understanding, for that is what they give in return."
        ]
      },
      {
        sign: "Leo",
        dates: "July 23rd - August 22nd",
        imgsrc: "./assets/zodiac_imgs/005-leo.png",
        facts: [
          "People born under the sign of Leo are natural born leaders.",
          "Able to use their mind to solve even the most difficult problems, they will easily take initiative in resolving various complicated situations.",
          "They are dramatic, creative, self-confident, dominant and extremely difficult to resist, able to achieve anything they want to in any area of life they commit to."
        ]
      },
      {
        sign: "Virgo",
        dates: "August 23rd - September 22nd",
        imgsrc: "./assets/zodiac_imgs/008-virgo.png",
        facts: [
          "Virgos are always paying attention to the smallest details and their deep sense of humanity makes them one of the most careful signs of the zodiac.",
          "Their methodical approach to life ensures that nothing is left to chance, and although they are often tender, their heart might be closed for the outer world.",
          "This is a sign often misunderstood, not because they lack the ability to express, but because they won’t accept their feelings as valid, true, or even relevant when opposed to reason."
        ]
      },
      {
        sign: "Libra",
        dates: "September 23rd - October 22nd",
        imgsrc: "./assets/zodiac_imgs/002-libra.png",
        facts: [
          "People born under the sign of Libra are peaceful, fair, and they hate being alone.",
          "These individuals are fascinated by balance and symmetry, they are in a constant chase for justice and equality, realizing through life that the only thing that should be truly important to themselves in their own inner core of personality.",
          "Each Libra representative has to be careful when talking to other people, for when they are forced to decide about something that is coming their way, or to choose sides, they suddenly realize that they might be in the wrong place and surrounded by wrong people."
        ]
      },
      {
        sign: "Scorpio",
        dates: "October 23rd - November 21nd",
        imgsrc: "./assets/zodiac_imgs/003-scorpio.png",
        facts: [
          "Scorpio-born are passionate and assertive people.",
          "People often say that Scorpio-born are fierce, probably because they understand very well the rules of the universe.",
          "Scorpios hate dishonesty and they can be very jealous and suspicious, so they need to learn how to adapt more easily to different human behaviors."
        ]
      },
      {
        sign: "Sagittarius",
        dates: "November 22nd - December 21st",
        imgsrc: "./assets/zodiac_imgs/006-sagittarius.png",
        facts: [
          "Curious and energetic, Sagittarius is one of the biggest travelers among all zodiac signs.",
          "Sagittarius is extrovert, optimistic and enthusiastic, and likes changes.",
          "Sagittarius-born are able to transform their thoughts into concrete actions and they will do anything to achieve their goals."
        ]
      },
      {
        sign: "Capricorn",
        dates: "December 22nd - January 19th",
        imgsrc: "./assets/zodiac_imgs/007-capricorn.png",
        facts: [
          "Capricorn is a sign that represents time and responsibility, and its representatives are traditional and often very serious by nature.",
          "These individuals possess an inner state of independence that enables significant progress both in their personal and professional lives.",
          "They are masters of self-control and have the ability to lead the way, make solid and realistic plans, and manage many people who work for them at any time." 
        ]
      }
    ]
  }
  render(){
    let zodiacRoutes = this.props.signs.map((el) => {
    return <Route exact path={"/" + el.sign} render={(routeProps) => <ZodiacPage content={el} {...routeProps}/>} key={el.sign} />
    })

    return (
      <div className="App">
        <Nav content={this.props.signs}/>
        <Switch>
          <Route exact path="/" render={() => <Home content={this.props.signs}/>}/>
          {zodiacRoutes}
          <Route exact path="/" render={() => <Home content={this.props.signs}/>}/>
        </Switch>
        {/* <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"     title="Flaticon">www.flaticon.com</a></div> */}
      </div>
    );
  };
}

export default App;
