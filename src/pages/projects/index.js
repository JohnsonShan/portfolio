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
            url='https://github.com/JohnsonShan/portfolio'
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
            url='https://github.com/JohnsonShan/express-locallibrary'
            imageUrl='/images/express-libaray.gif'
            title='Express Libaray'
            text='A Libaray RESTful CRUD application.'
            badges={['Node.js', 'Express', 'RESTful']}
          />
          
          {/* <ProjectCard
            url=''
            imageUrl='/images/todo-app.png'
            title='To Do List'
            text='A To Do app with severless backend.'
            badges={['React.js', 'Next.js', 'Vercel']}
          /> */}

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
            url='https://image-gallery-johnsonshans-projects.vercel.app/'
            imageUrl='/images/image-gallery.gif'
            title='Image Gallery'
            text='A Image Gallery.'
            badges={['React.js', 'Next.js', 'Tailwind', 'Vercel']}
          />
          <ProjectCard
            url='https://github.com/JohnsonShan/django-t'
            imageUrl='/images/django-admin.gif'
            title='Django app'
            text='A Django app with admin portal.'
            badges={['Python', 'Django']}
          />
          <ProjectCard
            url='https://test.pypi.org/project/django-polls-b081148/0.0.1/'
            imageUrl='/images/django-polls.png'
            title='Django polls package'
            text='A Python package on TestPyPI.'
            badges={['Python', 'Package', 'TestPyPI']}
          />
          {/* <ProjectCard
            url=''
            imageUrl='/images/my-shop.png'
            title='J Pizza'
            text='Pending for revamp.'
            badges={['React.js', 'Next.js']}
          /> */}
        </div>
      </Grid>

    </Layout>
  )
}

export const Head = () => <Seo title="Projects" />

export default ProjectsPage