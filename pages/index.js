import { Container } from "@chakra-ui/react";
import { Box, Heading, Image, Button } from '@chakra-ui/react'
import Section from "../components/section";
import Paragraph from "../components/paragraph";
import NextLink from 'next/link'
import { ChevronRightIcon } from "@chakra-ui/icons";
import { List, ListItem } from "@chakra-ui/react";
import Link from "next/link";
import { Icon } from "@chakra-ui/react";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import thumbJungle from '../public/images/works/jungle-final.png'
import thumbShell from '../public/images/works/shell.jpeg'
import { SimpleGrid } from "@chakra-ui/react";
import { GridItem } from "../components/grid-item";




const Page = () => {

    return (

        <Container>

            <Box borderRadius="lg" bg="grey" mt={6} p={3} mb={6} align="center">
                Hello, i'm a Software Developer based in the US!
            </Box>
            <Box display={{ md: 'flex' }}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Sultan Alahmadi
                    </Heading>
                    <p> Student at Purdue University (Aspiring Software Engineer)</p>
                </Box>
                <Box flexShrink={0}
                    mt={{ base: 4, md: 0 }}
                    ml={{ md: 6 }}
                    align="center"
                >




                </Box>


            </Box>
            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    About me
                </Heading>
                <Paragraph>
                    I am an undergraduate student in my senior year at Purdue University in West Lafayette, Indiana. I am currently studying Computer Science with a concentration in Software Engineering.


                </Paragraph>

                <Heading as="h3" variant="section-title">
                    Past Projects
                </Heading>
                <Paragraph p={0}>

                    - <b>Jungle</b>, an app that makes finding events on campus easier by offering tinder-style swiping
                    <br></br>
                    - <b>UNIX Shell Implementation</b> (using C/C++ and lex and Yacc)
                    <br></br>
                    - <b>Covid Restrictions Tracker</b>, a website that helps with planning out international travel during COVID 19 pandemic restrictions.
                    <br></br>
                    - <b> a simple HTTP web server </b>, built from scratch.

                </Paragraph>

                <Heading as="h3" variant="section-title">
                    Currently Working on:
                </Heading>
                <Paragraph>

                    - <b>CryptoArchive </b>, an all-in-one addresses explorer solution for cryptocurrency wallet addresses across blockchains.
                    <br></br>
                    - <b>Garage-market </b>, an e-commerce website similar in nature to eBay, but focused on the middle-east.
                </Paragraph>

            </Section>
            <Section delay={0.3}>
                <Heading as="h3" variant="section-title">
                    On the web
                </Heading>
                <List>
                    <ListItem>
                        <Link href="https://github.com/suahmadi" target="_blank">
                            <Button
                                variant="ghost"
                                colorScheme="teal"
                                leftIcon={<Icon as={IoLogoGithub} />}
                            >
                                Github
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href="https://linkedin.com/in/sultan-a-7881a4141" target="_blank">
                            <Button
                                variant="ghost"
                                colorScheme="teal"
                                leftIcon={<Icon as={IoLogoLinkedin} />}
                            >
                                LinkedIn
                            </Button>
                        </Link>
                    </ListItem>

                </List>



                <Box align="center" my={4}>
                    <NextLink href="/projects" scroll={false}>
                        <Button rightIcon={<ChevronRightIcon />} colorScheme="teal" mr={2}>
                            Projects
                        </Button>
                    </NextLink>

                    <NextLink href="/education" scroll={false}>
                        <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                            Education
                        </Button>
                    </NextLink>
                </Box>
            </Section>
        </Container>
    )

}
export default Page;