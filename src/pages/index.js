import React from "react"
import HeroSection from "../components/HeroSection"
import Image from "../components/image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home Page" />
    <HeroSection />
    <Image />
  </Layout>
)

export default IndexPage
