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
          <NavLink variant='card' href="#" target="_blank">
            <Card >
              <Image variant='card' src='/images/portfolio.gif' />
              {/* <Text>Portfolio</Text> */}
            </Card>
          </NavLink>
          <NavLink variant='card' href="#" target="_blank">
            <Card>
              <Image variant='card' src='/images/todomobileui.png' />
            </Card>
          </NavLink>
        </Box>
        <Box >
          <NavLink variant='card' href="#" target="_blank">
            <Card>
              <Image variant='card' src='/images/myShop.png' />
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