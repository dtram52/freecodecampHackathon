import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const FaqPage = () => (
  <Layout>
    <h1>FAQs for Voters</h1>
    <p>Am I registered to Vote</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default FaqPage
