import React from "react"
import {Link} from 'gatsby'
import Header from "../components/header"

export default () => <div style={{ color: `green`}}>
<Header headerText="This is the Home Page"/>
  <h1>This is the beginning of our Decibel journey!</h1>
  <p>This is a paragraph.</p>
  <Link to="/about">About</Link>
  <br></br>
  <Link to="/about-css-modules">Users</Link>
  <br></br>
  <img src='https://source.unsplash.com/random/600x300' alt='imageRandom'></img>
</div>
