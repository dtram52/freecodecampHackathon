import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Hello World</h1>
    <p>My name is <em>Du Tram</em> and I'm very excited to attend the freecodecamp hackathon.</p>

    <p>I have been studying as a post-bac CS student while maintaining my full-time job as a Research Manager at a Financial Service firm. </p>
    <p>Yes I will something great!</p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
