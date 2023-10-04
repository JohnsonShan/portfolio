/** @jsx jsx */
import { jsx } from "theme-ui"
import { Container, Flex, Box, NavLink } from 'theme-ui'

import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const IndexPage = () => {
  return (
    <Layout>
      <Box sx={{
        alignItems: 'center',
        maxWidth: '600px',
        margin: 'auto'
      }}>
        <h1 sx={{
          textAlign: 'center',
        }}>I'M JOHNSON SHAN</h1>
        <p>Your friendly neighborhood frontend developer, UX architect, and JavaScript engineer. I spend my days (and often nights) painting the Internet canvas with PROJECTS and lines of code, turning zeroes and ones into immersive, interactive experiences,</p>
        <p>Bona fide photochromic LENS enthusiast - sunlight or indoors, I've got it covered. I tread the path of minimalism, finding beauty in simplicity and order. When I'm not crafting beautiful web experiences, you can find me reading ARTICLES or swaying to the rhythm of Pop Music & Jazz, losing myself in the captivating flow of melodies. anyways you can CONTACT ME</p>
        
        <NavLink href="https://www.linkedin.com/in/johnson-shan-b9a373168/" target="_blank">
          <FontAwesomeIcon icon={faLinkedinIn} size="2x" sx={{ pr: 4 }} />
        </NavLink>
        <NavLink href="https://johnsonshan.github.io/">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </NavLink>
      </Box>
    </Layout>
  )
}

export const Head = () => <Seo title="Home" />

export default IndexPage