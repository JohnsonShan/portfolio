/** @jsx jsx */
import { jsx } from "theme-ui"
import { Container, Flex, Box, NavLink } from 'theme-ui'

import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Forward } from "../styles/animations"
import { Parallax } from "@react-spring/parallax"

const IndexPage = () => {
  return (
    <Layout>
      
      <Box pt='10vh'>
        <h1 className="text-center" >This is JOHNSON SHAN, </h1>
        <p>I am a software engineer with a passion for coding and building awesome things. With a strong background in software development, I specialize in creating a wide range of applications, including both Frontend and Backend projects, Cloud hosting solutions, and CICD DevOps pipelines.</p>
        <p>When I'm not at the computer, I usually play badminton or hang out with friends. Recently, I have also been learning how to snowboard and improve my cooking skills.</p>
        <NavLink href="/projects" p={0} >
          To Projects →
        </NavLink>

      </Box>

    </Layout>
  )
}

export const Head = () => <Seo title="Home" />

export default IndexPage