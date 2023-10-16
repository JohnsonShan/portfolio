/** @jsx jsx */
import { jsx } from "theme-ui"
import { Badge, Grid, Card, Image, Text, Container, Flex, Box, NavLink } from 'theme-ui'
const ProjectCard = ({ url, imageUrl, title, text, badges = [] }) => {
    // console.log(badges)
    return (
        <NavLink variant='project' href={url} target="_blank" >
            <Card variant='project' >
                <Image className='image' variant='project' src={imageUrl} />
                <Box variant='boxes.project' className='overlay'></Box>
                <Box variant='boxes.project' className='context' >
                    <Box>
                        {
                            badges.map((element) => {
                                return <Badge key={element} variant='project'>{element}</Badge>
                            })
                        }
                    </Box>
                    <p sx={{ color: 'white' }}>{text}</p>
                    <h1 sx={{ color: 'white' }}>{title}</h1>
                </Box>
            </Card>
        </NavLink>

    )
}

export default ProjectCard