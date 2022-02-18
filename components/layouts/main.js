
import Head from 'next/head'
import {Box, Container} from '@chakra-ui/react'
import NavBar from "../navbar.js" 
import dynamic from 'next/dynamic'


import Footer from '../footer'
import EarthGlobeLoader from '../earth-loader'

const LazyGlobe = dynamic(() => import('../earth-globe'), {
  ssr: false,
  loading: () => <EarthGlobeLoader />
})

const Main = ({children, router}) => {

    return (
        <Box as ="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" >
                </meta>
                <title>
                    Sultan Alahmadi - Homepage
                </title>
            </Head>

            <NavBar path={router.asPath}/>


            <Container maxW = "container.md" pt = {14}>
            <LazyGlobe />

                {children}
                <Footer />

            </Container>
            </Box>


    )
}

export default Main