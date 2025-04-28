/** @jsx jsx */
import { jsx } from "theme-ui"
import Divider from "@lekoarts/gatsby-theme-cara/src/elements/divider"
import Inner from "@lekoarts/gatsby-theme-cara/src/elements/inner"
import Content from "@lekoarts/gatsby-theme-cara/src/elements/content"
import Svg from "@lekoarts/gatsby-theme-cara/src/components/svg"
import { UpDown, UpDownWide } from "@lekoarts/gatsby-theme-cara/src/styles/animations"
import Intro from "../sections/intro.mdx"
import BgImageSvg from "../../../svg/bg-small-3.svg"

const Hero = ({ offset, factor = 1 }: { offset: number; factor?: number }) => (
  <div>
    <Content sx={{ variant: `texts.bigger` }} speed={0.4} offset={offset} factor={factor}
        className="!justify-end">
      <div className="flex flex-col md:flex-row bg-white rounded-md overflow-hidden">
        <div className="">
          <div
            className="md:min-w-[400px] w-full h-full flex items-center text-white font-bold text-xl md:text-4xl py-10 px-10 pr-14 uppercase leading-tight"
            style={{
              backgroundImage: `url(${BgImageSvg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center right',
            }}
          >
            Память, Честь, Слава
          </div>
        </div>
        <Inner className="p-10 text-xs">
          <Intro />
        </Inner>
      </div>
    </Content>
  </div>
)

export default Hero
