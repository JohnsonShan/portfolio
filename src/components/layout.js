/** @jsx jsx */
import { jsx } from "theme-ui"
import { Container, Flex, Box, NavLink } from 'theme-ui'

import { Link, useStaticQuery, graphql } from 'gatsby'
import Nav from './nav'
import Background from './background'
const Layout = ({ pageTitle, children }) => {
  return (
    <div sx={{
      position: 'relative',
    }}>
      <div sx={{
        zIndex: -100,
        position: 'absolute',
        top: 0,
        left: 0,
      }}>
        <Background />
      </div>
      <div sx={{
        zIndex: 100,
        position: 'relative'
      }}>
        <Container >
          <Nav />
          <Container sx={{
            alignItems: 'center',
            maxWidth: '800px',
            margin: 'auto',
            paddingX: 2
          }}>
            {children}
          </Container>
        </Container>
      </div>



    </div>

  )
}

export default Layout