/** @jsx jsx */
import { jsx } from "theme-ui"
import { Container, Flex, Box, NavLink } from 'theme-ui'

import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Layout from '../components/layout'
import Seo from '../components/seo'

const SuccessPage = () => {

    return (
        <Layout>
            <Box sx={{
                alignItems: 'center',
                margin: 'auto',
                marginBottom: 2
            }}>
                <h1 >Thank you.</h1>
                <h2 >Your message has been received.</h2>
                <NavLink href="/" p={0}>
                    <FontAwesomeIcon sx={{ pl: 1 }} icon={faArrowLeft} /> Back to my site.
                </NavLink>
            </Box>



        </Layout>
    )
}

export const Head = () => <Seo title="Thank you" />

export default SuccessPage