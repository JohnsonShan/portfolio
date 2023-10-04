/** @jsx jsx */
import { jsx } from "theme-ui"
import { Embed, Card, Image, Text, Container, Flex, Box, NavLink } from 'theme-ui'

import Layout from '../components/layout'
import Seo from '../components/seo'
import pdf from '../files/johnson-shan-resume-P-2-10-23.pdf'
const ResumePage = () => {
    return (
        <Layout>
            <Box sx={{
                alignItems: 'center',
                maxWidth: '600px',
                margin: 'auto',
                height: '2000px'
            }}>
                <h1 sx={{
                }}>Resume.</h1>
                {/* <iframe sx={{
            height: '100%',
            width: '100%'
        }} src="https://docs.google.com/document/d/e/2PACX-1vSgHs6FM25lhLNZIBEnltVw78k1hC0G8RP4sevEzIGLugx030EhVJd7RxhWQio8v8zx6YL98SizMCib/pub?embedded=true" />
        */}
                <embed src={'https://drive.google.com/viewerng/viewer?embedded=true&url=' + { pdf }} width="500" height="375" />

            </Box>
        </Layout>
    )
}

export const Head = () => <Seo title="Resume" />

export default ResumePage