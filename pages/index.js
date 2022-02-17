import { Container } from "@chakra-ui/react";
import {Box, Heading} from '@chakra-ui/react'


const Page = () => {

  return (
      <Container>
          <Box borderRadius="lg" bg="grey" p={3} mb={6} align="center">
              Hello, i'm a Software Developer based in the US!
              </Box>
              <Box display={{ md: 'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Sultan Alahmadi
                    </Heading>    
                    <p> Software Engineer</p>  
            </Box>
            </Box>
          
    </Container>
  )

}
export default Page;