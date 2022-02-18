import { forwardRef } from 'react'
import { Box, Spinner } from '@chakra-ui/react'

export const EarthSpinner = () => (
  <Spinner
    size="x1"
    position="absolute"
    left="50%"
    top="50%"
    ml="calc(0px - var(--spinner-size) / 2)"
    mt="calc(0px - var(--spinner-size))"
  />
)

export const EarthContainer = forwardRef(({ children }, ref) => (
  <Box
    ref={ref}
    className="earth-globe"
    m="auto"
    mt={['-40px', '-80px', '-180px']}
    mb={['-40px', '-140px', '-200px']}
    w={[280, 480, 640]}
    h={[280, 480, 640]}
    position="relative"
  >
    {children}
  </Box>
))

const Loader = () => {
  return (
    <EarthContainer>
      <EarthSpinner />
    </EarthContainer>
  )
}

Loader.displayName = 'Loader';

export default Loader