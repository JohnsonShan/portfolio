/** @jsx jsx */
import { jsx } from "theme-ui"
import { Container, Flex, Box, NavLink } from 'theme-ui'

import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Forward } from "../styles/animations"

const IndexPage = () => {
  return (
    <Layout>
      <Box pt='10vh' sx={{
        textAlign: 'center',
      }}>
        <h1 >I'M JOHNSON SHAN, </h1>
        <h2 >A Software Engineer based in Toronto, Ontario, Canada.</h2>
        <p>With a strong background in software development, I specialize in creating a wide range of applications, including both Frontend and Backend projects, Cloud hosting solutions, and CICD DevOps pipelines.</p>
        <NavLink href="/projects" p={0}>
          To Projects  <FontAwesomeIcon sx={{ pl: 1 }} icon={faArrowRight} />
        </NavLink>

      </Box>
    </Layout>
  )
}

export const Head = () => <Seo title="Home" />

export default IndexPage