/** @jsx jsx */
import { jsx } from "theme-ui"
import { Grid, Card, Image, Text, Container, Flex, Box, NavLink } from 'theme-ui'
import Layout from '../../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../../components/seo'

const ProjectsPage = () => {
  return (
    <Layout>
      {/* <Box > */}
      <h1>Projects.(Pending)</h1>
      <Grid
        columns={[2, '1fr 1fr']}
        sx={{
          display: 'grid',
          gridGap: 1, // theme.space[4]
        //   // use arrays for mobile-first responsive styles
          gridTemplateColumns: [
            'auto', // default to a stacked layout on small screens
            // '1fr 256px', // use columns for larger screens
          ],
        }}>
        <Box >
          <NavLink href="https://www.linkedin.com/in/johnson-shan-b9a373168/" target="_blank">
            <Card>
              <StaticImage src='/images/todomobileui.png' />
              <Text>To Do</Text>
            </Card>
          </NavLink>
        </Box>
        <Box >
          <NavLink href="https://www.linkedin.com/in/johnson-shan-b9a373168/" target="_blank">
            <Card>
              <StaticImage src='/images/myShop.png' />
              <Text>My shop</Text>
            </Card>
          </NavLink>
        </Box>
      </Grid>

      {/* </Box> */}
    </Layout>
  )
}

export const Head = () => <Seo title="Projects" />

export default ProjectsPage