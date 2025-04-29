/** @jsx jsx */
import { Box, Link, jsx } from "theme-ui"

const Footer = () => {
  return (
    <Box as="footer" variant="footer">
      Copyright &copy; {new Date().getFullYear()}. <br />
      <Link href="/impressum">Impressum</Link>
    </Box>
  )
}

export default Footer
