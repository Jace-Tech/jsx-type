import { Box } from '@mui/material'
import Header from '../../components/Header'
import Hero from './components/Hero'
import Service from './components/Service'
import AppSection from './components/AppSection'

const Landing = () => {
  return (
    <Box>
      <Header />
      <Hero />
      <Service />
      <AppSection />
    </Box>
  )
}

export default Landing