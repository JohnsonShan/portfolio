/** @jsx jsx */
import { jsx } from "theme-ui"
import { Container, Flex, Box, NavLink } from 'theme-ui'

import { Link, useStaticQuery, graphql } from 'gatsby'
import Nav from './nav'
import Background from './background'
const Layout = ({ pageTitle, children }) => {
  return (
    <div >
      {/* <Background></Background> */}

      <Container>
        <Nav/>
        <Container px={4}>
          {children}
        </Container>
      </Container>


    </div>

  )
}

export default Layout