/** @jsx jsx */
import { jsx } from "theme-ui"
import { Container, Flex, Box, NavLink } from 'theme-ui'

// import { faRobot } from '@fortawesome/free-brands-svg-icons'
import { faRobot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Nav = () => (
    <Container py={2} px={2} >
        <Flex>
            <Box sx={{ flex: '1 1', display: 'flex', alignItems: 'center' }}>
                <NavLink href="/" p={2}>
                    <FontAwesomeIcon icon={faRobot} size="3x" />
                </NavLink>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Flex as="nav">
                    <NavLink href="/" p={2}>
                        Home
                    </NavLink>
                    <NavLink href="/projects" p={2}>
                        Projects
                    </NavLink>
                    <NavLink href="/resume" p={2}>
                        Resume
                    </NavLink>
                    <NavLink href="/contact" p={2}>
                        Contact
                    </NavLink>
                </Flex>
            </Box>
        </Flex>
    </Container>

)


export default Nav
