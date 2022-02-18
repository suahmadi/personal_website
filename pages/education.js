import {Container } from "@chakra-ui/react";
import { Box, Heading, Image, Button } from '@chakra-ui/react'
import Section from "../components/section";
import Paragraph from "../components/paragraph";
import Link from "next/link";
import Layout from "../components/layouts/article";


const Education = () => {

    return (

        <Layout title="Education">
            <Container>
                <Box display={{ md: 'flex' }} mt={6}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title">
                            Purdue University
                        </Heading>
                        <p> Computer Science - Software Engineering </p>
                        <p> Minor: Psychology </p>

                    </Box>
                    <Box
                        flexShrink={0}
                        mt={{ base: 4, md: 0 }}
                        ml={{ md: 6 }}
                        textAlign="center"
                    >
                        <Image
                            borderWidth={2}
                            borderStyle="solid"
                            maxWidth="100px"
                            display="inline-block"
                            borderRadius="full"
                            borderColor={'grey'}
                            src="/images/Purdue-logo.png"
                            alt="Profile image"
                        />
                    </Box>

                </Box>
                <Section delay={0.2}>
                    <Heading as="h3" variant="section-title">
                        Relevant Courses
                    </Heading>
                    <Paragraph>
                        <Link
                            href="https://www.cs.purdue.edu/academic-programs/courses/canonical/cs307.html" scroll={false}>
                            - Software Engineering
                        </Link>

                        <br></br>

                        - Software Testing
                        <br></br>
                        <Link
                            href="https://www.cs.purdue.edu/academic-programs/courses/canonical/cs251.html" scroll={false}>
                            - Data Structers and Algorithms
                        </Link>
                        <br></br>
                        <Link
                            href="https://www.cs.purdue.edu/academic-programs/courses/canonical/cs381.html" scroll={false}>
                            - Analysis of Algorithms
                        </Link>
                        <br></br>
                        <Link
                            href="https://www.cs.purdue.edu/academic-programs/courses/canonical/cs240.html" scroll={false}>
                            - Programming in C
                        </Link>
                        <br></br>
                        <Link
                            href="https://www.cs.purdue.edu/academic-programs/courses/canonical/cs180.html" scroll={false}>
                            - Problem Solving and Object Oriented Programming
                        </Link>
                        <br></br>
                        <Link
                            href="https://www.cs.purdue.edu/academic-programs/courses/canonical/cs250.html" scroll={false}>
                            - Computer Architecture
                        </Link>
                        <br></br>
                        <Link
                            href="https://www.cs.purdue.edu/academic-programs/courses/canonical/cs252.html" scroll={false}>
                            - Systems Programming
                        </Link>
                    </Paragraph>

                    <Heading as="h3" variant="section-title">
                        PROGRAMMING LANGUAGES AND TOOLS
                    </Heading>


                    <Box
                        flexShrink={0}
                        mt={{ base: 4, md: 6 }}
                        ml={{ md: 3 }}
                        textAlign="left"
                    >
                        <Image
                            borderColor="whiteAlpha.800"
                            borderStyle="solid"
                            maxWidth="80px"
                            maxH="80px"
                            ml={2}
                            display="inline-block"
                            alt="C"
                            src="/images/c-programming.PNG" />
                        <Image
                            borderColor="whiteAlpha.800"
                            borderStyle="solid"
                            maxWidth="80px"
                            maxH="80px"
                            ml={5}
                            display="inline-block"
                            alt="Java Script"
                            src="/images/java-script.PNG" />
                        <Image
                            borderColor="whiteAlpha.800"
                            borderStyle="solid"
                            maxWidth="100px"
                            maxHeight="500px"
                            ml={2}
                            display="inline-block"
                            alt="python"
                            src="/images/python-logo.PNG" />
                        <Image
                            borderColor="whiteAlpha.800"
                            borderStyle="solid"
                            maxWidth="80px"
                            ml={2}
                            display="inline-block"
                            alt="Java"
                            src="/images/java-logo.PNG" />
                        <Image
                            borderColor="whiteAlpha.800"
                            borderStyle="solid"
                            maxWidth="80px"
                            ml={2}
                            display="inline-block"
                            alt="React"
                            src="/images/react-logo-final.PNG" />
                        <Image
                            borderColor="whiteAlpha.800"
                            borderStyle="solid"

                            maxWidth="90px"
                            display="inline-block"
                            alt="C++"
                            src="/images/C++LOGO.PNG" />

                        <Image
                            borderColor="whiteAlpha.800"
                            borderStyle="solid"
                            ml={1}
                            maxWidth="90px"
                            display="inline-block"
                            alt="SQL"
                            src="/images/sql-logo-final.PNG" />

                        <Image
                            borderColor="whiteAlpha.800"
                            borderStyle="solid"
                            ml={2}
                            maxWidth="90px"
                            display="inline-block"
                            alt="FireBase"
                            src="/images/firebase-logo.PNG" />


                        <Image
                            borderColor="whiteAlpha.800"
                            borderStyle="solid"
                            ml={2}
                            maxWidth="85px"
                            display="inline-block"
                            alt="Node JS"
                            src="/images/nodeJS-logo.PNG" />

                        <Image
                            borderColor="whiteAlpha.800"
                            borderStyle="solid"
                            ml={2}
                            maxWidth="90px"
                            display="inline-block"
                            alt="Next JS"
                            src="/images/nextJS-logo.PNG" />


                    </Box>






                </Section>

            </Container>
        </Layout>
    )

}


export default Education;