/** @jsx jsx */
import { jsx } from "theme-ui"

type ProjectCardProps = {
  link: string
  title: string
  children: React.ReactNode
  bg: string
}

const ProjectCard = ({ link, title, children, bg }: ProjectCardProps) => (
  <div>
    <h3 className="text-4xl mb-4 text-white">
      {title}
    </h3>
    <div className="text-lg text-gray-950">
      {children}
    </div>
  </div>
)

export default ProjectCard
