/** @jsx jsx */
import { jsx } from "theme-ui"
import { Container, Flex, Box, NavLink, MenuButton } from 'theme-ui'
import React, { useState } from 'react';
import { globalHistory } from "@reach/router"
// import { faRobot } from '@fortawesome/free-brands-svg-icons'
import { faRobot, faBars, faX, faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Nav = ({ colorMode, handleColorMode }) => {
    const [menu, setMenu] = useState(false)
    const path = globalHistory.location.pathname
    return (
        <Container py={2} px={2} >
            <Flex>
                <Box sx={{ flex: '1 1', display: 'flex', alignItems: 'center' }}>
                    <NavLink href="/" p={2}>
                        <FontAwesomeIcon icon={faRobot} size="3x" />
                    </NavLink>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <NavLink href="/#" p={2} sx={{
                        display: ['block', 'block', 'none']
                    }} onClick={() => { setMenu(true) }}>
                        <FontAwesomeIcon icon={faBars} size="2x" />
                    </NavLink>
                    <Flex as="nav" sx={{
                        display: ['none', 'none', 'flex']
                    }}>
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
                        <NavLink href={path} p={2}>
                            <FontAwesomeIcon icon={faCircleHalfStroke} onClick={handleColorMode} size='2x' />
                        </NavLink>
                    </Flex>
                    {
                        menu
                            ?
                            <Box className="flex flex-col absolute justify-center items-center top-0 left-0 w-full h-screen " bg={colorMode}>
                                <FontAwesomeIcon icon={faX} size="2x" className="absolute top-8 right-8" onClick={() => { setMenu(false) }} />
                                <NavLink href="/" p={2} m={4} >
                                    Home
                                </NavLink>
                                <NavLink href="/projects" p={2} m={4}>
                                    Projects
                                </NavLink>
                                <NavLink href="/resume" p={2} m={4}>
                                    Resume
                                </NavLink>
                                <NavLink href="/contact" p={2} m={4}>
                                    Contact
                                </NavLink>
                                <NavLink href={path} p={2}>
                                    <FontAwesomeIcon icon={faCircleHalfStroke} onClick={handleColorMode} size='2x' />
                                </NavLink>
                            </Box>
                            :
                            <></>
                    }
                </Box>
            </Flex>
        </Container>
    )
}


export default Nav
