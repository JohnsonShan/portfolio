/** @jsx jsx */
import { jsx } from "theme-ui"
import { Container, Flex, Box, NavLink } from 'theme-ui'

import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'
import { faLinkedinIn, faGithub, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Forward } from "../styles/animations"

const IndexPage = () => {
  return (
    <Layout>
      <Box >
        <h1 sx={{
          textAlign: 'center',
        }}>I'M JOHNSON SHAN, </h1>
        <p>A highly experienced Software Engineer based in Toronto, Ontario, Canada. With a strong background in software development, I specialize in creating a wide range of applications, including both Frontend and Backend projects, Cloud hosting solutions, and CICD DevOps pipelines.</p>
        <p>Passionate about innovation, I am constantly exploring cutting-edge technologies and finding optimized solutions to complex technical problems. I thrive on the challenge of creating user-centric solutions that not only enhance the overall user experience but also drive business growth.</p>
        <p>Beyond my professional endeavors, I find joy in pursuing various hobbies and activities. When I'm not engrossed in coding, you'll often find me immersed in the pages of a captivating novel, honing my skills on the badminton court, or enjoying quality time with my friends. Additionally, I am a guitar player and have been dedicating considerable time and effort to practice. I am eagerly anticipating the release of a guitar cover video in the near future.</p>
        <p>View my works <Forward/></p>

        <Box sx={{
          my: 4
        }}>
          <NavLink href="https://www.linkedin.com/in/johnson-shan-b9a373168/" target="_blank">
            <FontAwesomeIcon icon={faLinkedinIn} size="2x" sx={{ pr: 4, }} />
          </NavLink>
          <NavLink href="https://johnsonshan.github.io/">
            <FontAwesomeIcon icon={faGithub} size="2x" sx={{ pr: 4 }} />
          </NavLink>
          <NavLink href="https://twitter.com/shan_johns84215">
            <FontAwesomeIcon icon={faTwitter} size="2x" sx={{ pr: 4 }} />
          </NavLink>
          <NavLink href="https://www.instagram.com/johnson_abcd/">
            <FontAwesomeIcon icon={faInstagram} size="2x" sx={{ pr: 4 }} />
          </NavLink>
        </Box>

      </Box>
    </Layout>
  )
}

export const Head = () => <Seo title="Home" />

export default IndexPage