import * as React from "react"
import { HeadFC, Link, PageProps } from "gatsby"
import { Parallax } from "@react-spring/parallax"
import { Themed } from "@theme-ui/mdx"
import Layout from "@lekoarts/gatsby-theme-cara/src/components/layout"
import Divider from "@lekoarts/gatsby-theme-cara/src/elements/divider"
import { UpDown, UpDownWide } from "@lekoarts/gatsby-theme-cara/src/styles/animations"
import Svg from "@lekoarts/gatsby-theme-cara/src/components/svg"
import Seo from "@lekoarts/gatsby-theme-cara/src/components/seo"
import Content from "@lekoarts/gatsby-theme-cara/src/elements/content"
import Inner from "@lekoarts/gatsby-theme-cara/src/elements/inner"

const Impressum = (_props: PageProps) => (
  <Layout>
    <Parallax pages={1}>
      <div>
        <Content sx={{ variant: `texts.bigger` }} speed={0.4} offset={0} factor={1}>
          <Inner>
            <Themed.h1>Impressum</Themed.h1>
            <Themed.p>
              <br />
              Konstantin Smetana<br />
              Obere Sage 39<br />
              33184 Altenbeken<br />
              <br />
              Kontakt<br />
              Telefon: +49 176 421 46 550<br />
              E-Mail: konstantinsmetana@gmail.com<br />
              <br />
              Verbraucher­streit­beilegung/Universal­schlichtungs­stelle<br />
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.<br />
              <br />
              Quelle: https://www.e-recht24.de/impressum-generator.html
              <br /><br />
              Go back to <Link to="/">homepage</Link>.
            </Themed.p>
          </Inner>
        </Content>
      </div>
    </Parallax>
  </Layout>
)

export default Impressum

export const Head: HeadFC = () => <Seo title="404 - Not Found" />
