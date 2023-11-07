/** @jsx jsx */
import { jsx } from "theme-ui"
import { Embed, Card, Image, Text, Container, Flex, Box, NavLink } from 'theme-ui'

import Layout from '../components/layout'
import Seo from '../components/seo'
const ResumePage = () => {

    return (
        <Layout>
            <Box sx={{
                alignItems: 'center',
                margin: 'auto',
                minHeight: '1000px'
            }}>
                <h1 sx={{
                }}>Resume.</h1>
                <Card>
                    <embed src={`https://drive.google.com/viewerng/viewer?embedded=true&url=https://raw.githubusercontent.com/JohnsonShan/others/main/johnson-shan-resume.pdf`} width="100%" height="1000px" />

                </Card>

            </Box>
        </Layout>
    )
}

export const Head = () => <Seo title="Resume" />

export default ResumePage