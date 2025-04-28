import * as React from "react"
import type { HeadFC } from "gatsby"
import { Parallax } from "@react-spring/parallax"
import Layout from "@lekoarts/gatsby-theme-cara/src/components/layout"
import Hero from "@lekoarts/gatsby-theme-cara/src/components/hero"
import Projects from "@lekoarts/gatsby-theme-cara/src/components/projects"
import About from "@lekoarts/gatsby-theme-cara/src/components/about"
import Contact from "@lekoarts/gatsby-theme-cara/src/components/contact"
import Seo from "@lekoarts/gatsby-theme-cara/src/components/seo"
import { StaticImage } from "gatsby-plugin-image"
import Logo from "../../../assets/logo.svg"

const Cara = () => (
  <Layout>
    <StaticImage
      src="../../../images/9mai-berlin-flag.jpg"
      alt="Background"
      layout="constrained"
      objectFit="cover"
      className="!fixed w-full h-screen"
      style={{
        zIndex: -1,
      }}
    />
    <Parallax pages={6}>
      <div className="absolute z-20 top-0 left-16 w-28 bg-white px-6 py-6 pt-10 rounded-b-md">
        <Logo id="home-logo" className="w-full h-auto" />
      </div>
      <Hero offset={0} factor={1} />
      <Projects offset={1} factor={2} />
      <About offset={3} factor={2} />
      <Contact offset={5} factor={1} />
    </Parallax>
  </Layout>
)

export default Cara

export const Head: HeadFC = () => <Seo />
