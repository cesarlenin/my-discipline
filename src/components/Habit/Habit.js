import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import ThreeButtons from '../ThreeButtons';

export class Habit extends Component {
  render() {
    
    return ( 
        <section>
        <header>
        <NavLink className="links" to={`/Detail/${this.props.id}`}>
        <h2>{this.props.name}</h2>
        </NavLink>
        </header>
        <p>7 day calendar goes here</p>
        <div className= "habit">
        <ThreeButtons id={this.props.id}/>
        </div>
      </section>

    )
  }
}

export default Habit