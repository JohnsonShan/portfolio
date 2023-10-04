/** @jsx jsx */
import { jsx } from "theme-ui"
import { Container, Flex, Box, NavLink } from 'theme-ui'

// import { faRobot } from '@fortawesome/free-brands-svg-icons'
import { faRobot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Nav = () => (
    <Container py={4} px={2} >
        <Flex>
            <Box p={2} sx={{ flex: '1 1' }}>
                <NavLink href="/" p={2}>
                    <FontAwesomeIcon icon={faRobot} size="3x" />
                </NavLink>
            </Box>
            <Box p={2}>
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
                </Flex>
            </Box>
        </Flex>
    </Container>

)


export default Nav
