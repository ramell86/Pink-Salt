import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from '../components/image'
import '../components/layout.css'

const IndexPage = () => (
  <div className="background">
  <Layout>
    <SEO title="Home" />
    <div className="box">
      <Image />
      Coming Soon!
    </div>
  </Layout>
  </div>
)

export default IndexPage
