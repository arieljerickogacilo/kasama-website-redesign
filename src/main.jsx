import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ChakraProvider, Container, extendTheme, Stack, Text } from '@chakra-ui/react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage.jsx'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import Careers from './pages/Careers.jsx'
import Contact from './pages/Contact.jsx'
import News from './pages/News.jsx'
import Partners from './pages/Partners.jsx'
import About from './pages/About.jsx'
import Work from './pages/Work.jsx'

const theme = extendTheme({
  fonts: {
    body: "'Space Grotesk', sans-serif"
  }
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <Container 
        maxW="full" 
        p={0} 
        minH="100dvh"
        as={Stack}
        gap={0}
        overflowX="hidden"
      >
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path='/' element={<Careers />}></Route>
              <Route path='/home' element={<Homepage />}></Route>
              <Route path='/careers' element={<Careers />}></Route>
              <Route path='/work' element={<Work />}></Route>
              <Route path='/about' element={<About />}></Route>
              <Route path='/partners' element={<Partners />}></Route>
              <Route path='/news' element={<News />}></Route>
              <Route path='/contact' element={<Contact />}></Route>
            </Routes>
            <Footer mt="auto" />
          </BrowserRouter>
      </Container>
    </ChakraProvider>
  </StrictMode>,
)
