/** @jsx jsx */
import { jsx } from "theme-ui"
import { Container, Flex, Box, NavLink } from 'theme-ui'

import { faLinkedinIn, faGithub, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => (
    <Container py={2} px={2}>
        <Box sx={{
            alignItems: 'center',
            display:'flex',
            justifyContent: 'center',
            height: '40px',
            [`@media screen and (min-width: 600px)`]: {
                alignItems: 'center',
                display: 'block'
            },
        }}>
            <NavLink href="https://www.linkedin.com/in/johnson-shan-b9a373168/" target="_blank">
                <FontAwesomeIcon icon={faLinkedinIn} size="2x" sx={{ pr: 3, }} />
            </NavLink>
            <NavLink href="https://github.com/JohnsonShan">
                <FontAwesomeIcon icon={faGithub} size="2x" sx={{ px: 3 }} />
            </NavLink>
            <NavLink href="https://twitter.com/shan_johns84215">
                <FontAwesomeIcon icon={faTwitter} size="2x" sx={{ px: 3 }} />
            </NavLink>
            <NavLink href="https://www.instagram.com/johnson_abcd/">
                <FontAwesomeIcon icon={faInstagram} size="2x" sx={{ pl: 3 }} />
            </NavLink>
        </Box>
        <p className="my-0">Copyright © 2024. All rights reserved.</p>
        <p className="mt-0">Written by ReactJS & GastbyJs / Build & Deploy on Netlify / Sourced on GitHub</p>

    </Container>

)


export default Footer
