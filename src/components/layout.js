/** @jsx jsx */
import { jsx } from "theme-ui"
import { Container, Flex, Box, NavLink } from 'theme-ui'
import { useColorMode, ThemeUIProvider } from 'theme-ui'

import Nav from './nav'
import Background from './background'
import Footer from './footer'

const Layout = ({ pageTitle, children }) => {
  const [colorMode, setColorMode] = useColorMode('light')

  const handleColorMode = () => {
    setColorMode(colorMode === 'light' ? 'dark' : 'light')
  };
  return (
    <div sx={{
      position: 'relative',
    }}>
      <div sx={{
        zIndex: -100,
        position: 'absolute',
        top: 0,
        left: 0,
      }}>
        <Background />
      </div>
      <Container sx={{
        zIndex: 100,
        position: 'relative',
        maxWidth: '1000px',
      }}>
        <Nav colorMode={colorMode} handleColorMode={handleColorMode} />
        <Container sx={{
          alignItems: 'center',
          maxWidth: '800px',
          margin: 'auto',
          paddingX: 2
        }}>
          <Box sx={{
            minHeight: 'calc(100vh - 20vh)',
            paddingBottom: '50px',
            [`@media screen and (min-width: 600px)`]: {
              margin: '0 auto -20vh',
              paddingBottom: '20vh',
            },
          }}>
            {children}
          </Box>
          <Footer />
        </Container>
      </Container>



    </div>

  )
}

export default Layout