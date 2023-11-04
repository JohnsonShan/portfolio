/** @jsx jsx */
import { jsx } from "theme-ui"
import { Badge, Grid, Card, Image, Text, Container, Flex, Box, NavLink } from 'theme-ui'
import Layout from '../../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../../components/seo'
import ProjectCard from '../../components/projectCard'
const ProjectsPage = () => {
  return (
    <Layout>
      <h1>Projects.</h1>
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
        <div >
          <ProjectCard
            url='https://lustrous-torte-4c1709.netlify.app/'
            imageUrl='/images/portfolio.gif'
            title='Portfolio'
            text='A portfolio page for myself.'
            badges={['React.js', 'Gatsby', 'Theme UI', 'Netlify']}
          />
          <ProjectCard
            url='https://homes-johnsonshans-projects.vercel.app/'
            imageUrl='/images/homes.gif'
            title='Homes'
            text='An Angular app that lists houses for rent'
            badges={['Angular', 'Vercel']}
          />
          <ProjectCard
            url=''
            imageUrl='/images/todo-app.png'
            title='To Do List'
            text='Pending revamp to Board.'
            badges={['React.js', 'Next.js']}
          />

        </div>
        <div >
          <ProjectCard
            url='https://nextjs-dashboard-johnsonshans-projects.vercel.app/'
            imageUrl='/images/nextjs-dashboard.gif'
            title='NextJs Dashboard'
            text='A Financial dashboard.'
            badges={['React.js', 'Next.js', 'Tailwind', 'Vercel']}
          />
          <ProjectCard
            url=''
            imageUrl='/images/my-shop.png'
            title='J Pizza'
            text='Pending for revamp.'
            badges={['React.js', 'Next.js']}
          />
        </div>
      </Grid>

    </Layout>
  )
}

export const Head = () => <Seo title="Projects" />

export default ProjectsPage