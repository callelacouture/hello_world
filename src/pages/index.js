import React from "react"
import {Link} from 'gatsby'
import Header from "../components/header"

export default () => <div style={{ color: `green`}}>
<Header headerText="This is the Home Page"/>
  <h1>Howdy World!</h1>
  <p>This is a paragraph.</p>
  <Link to="/about">About</Link>
  <br></br>
  <img src='https://source.unsplash.com/random/600x300' alt='imageRandom'></img>
</div>
