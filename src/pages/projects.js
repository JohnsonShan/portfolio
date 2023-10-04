/** @jsx jsx */
import { jsx } from "theme-ui"
import { Card, Image, Text, Container, Flex, Box, NavLink } from 'theme-ui'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

const ProjectsPage = () => {
  return (
    <Layout>
      <Box sx={{
        alignItems: 'center',
        maxWidth: '600px',
        margin: 'auto'
      }}>
        <h1 sx={{
        }}>Projects.</h1>
        <Flex>
          <Box >
            <NavLink href="https://www.linkedin.com/in/johnson-shan-b9a373168/" target="_blank">
              <Card>
                <StaticImage src='../images/todomobileui.png' />
                <Text>To Do</Text>
              </Card>
            </NavLink>
            <NavLink href="https://www.linkedin.com/in/johnson-shan-b9a373168/" target="_blank">
              <Card>
                <StaticImage src='../images/todomobileui.png' />
                <Text>To Do</Text>
              </Card>
            </NavLink>
          </Box>
          <Box >
            <NavLink href="https://www.linkedin.com/in/johnson-shan-b9a373168/" target="_blank">
              <Card>
                <StaticImage src='../images/myShop.png' />
                <Text>My shop</Text>
              </Card>
            </NavLink>
            <NavLink href="https://www.linkedin.com/in/johnson-shan-b9a373168/" target="_blank">
              <Card>
                <StaticImage src='../images/myShop.png' />
                <Text>My shop</Text>
              </Card>
            </NavLink>
          </Box>
        </Flex>

      </Box>
    </Layout>
  )
}

export const Head = () => <Seo title="Projects" />

export default ProjectsPage