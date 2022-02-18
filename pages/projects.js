import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import thumbJungle from '../public/images/works/jungle-final.png'
import thumbShell from '../public/images/works/Shell.jpeg'
import thumbHTTP from '../public/images/works/HTTP.jpg'
import thumbCOVID from '../public/images/works/COVID.jpg'
import thumbLoading from '../public/images/works/loading.jpg'

const Projects = () => (
    <Layout title="Projects">
        <Container>
            <Heading as="h3" fontSize={20} mb={4} mt={4}>
                Past
            </Heading>

            <SimpleGrid columns={[1, 1, 2]} gap={6}>
                <Section>
                    <WorkGridItem id="jungle-app" title="Jungle" thumbnail={thumbJungle}>
                        A mobile application that uses web-scraping/machine learning to find events around Purdue University.
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem
                        id="Basic-HTTP-server"
                        title="HTTP-server"
                        thumbnail={thumbHTTP}
                    >
                        HTTP server written from scratch, with ability to run on multiple modes single-process, multi-threaded, and pool of threads
                    </WorkGridItem>
                </Section>

                <Section delay={0.1}>
                    <WorkGridItem
                        id="Shell-Implementation"
                        title="Shell"
                        thumbnail={thumbShell}
                    >
                        UNIX Shell Implementation (using C/C++ and lex and Yacc)
                    </WorkGridItem>
                </Section>
                <Section delay={0.1}>
                    <WorkGridItem id="Covid-Restrictions-Tracker" thumbnail={thumbCOVID} title="Covid Restrictions Tracker">
                        a website that helps with planning out international travel during COVID 19 pandemic restrictions.
                    </WorkGridItem>
                </Section>
            </SimpleGrid>

            <Section delay={0.2}>
                <Divider my={6} />

                <Heading as="h3" fontSize={20} mb={4}>
                    Ongoing
                </Heading>
            </Section>

            <SimpleGrid columns={[1, 1, 2]} gap={6}>
                <Section delay={0.3}>
                    <WorkGridItem
                        id="CryptoArchive"
                        thumbnail={thumbLoading}
                        title="CryptoArchive"
                    >
                        an all-in-one addresses explorer solution for cryptocurrency wallet addresses across blockchains.
                    </WorkGridItem>
                </Section>
                <Section delay={0.3}>
                    <WorkGridItem id="Garage-market" thumbnail={thumbLoading} title="Garage-market">
                        an e-commerce website similar in nature to eBay, but focused on the middle-east.
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
        </Container>
    </Layout>
)

export default Projects
export { getServerSideProps } from '../components/chakra'