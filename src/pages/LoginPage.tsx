import { Box, Button, FormControl, FormLabel, Image, Input } from '@chakra-ui/react';
import bgImage from '../assets/ales-krivec-3sBnJqI8LXo-unsplash.jpg';
import brandImage from '../assets/rethink-logo-full.png';

function LoginPage() {
  return (
    <Box
      height='100vh'
      backgroundImage={`url(${bgImage})`}
      backgroundSize='cover'
      backgroundPosition='center'
    >
      <Box
        height='100%'
        background='linear-gradient(0deg, rgba(22,0,52,1) 0%, rgba(0,0,0,0.3) 100%)'
        display='grid'
        placeItems='center'
      >
        <Box
          background='rgba(0,0,0,0.5)'
          backdropFilter='blur(8px)'
          padding={10}
          width='24%'
          borderRadius='md'
          boxShadow='md'
          display='flex'
          flexDirection='column'
          justifyContent='center'
          alignItems='center'
        >
          <Image src={brandImage} width={40} mb='6' />
          <form style={{ width: '100%' }}>
            <FormControl size='sm'>
              <FormLabel fontWeight={600} fontSize='sm'>
                Email address
              </FormLabel>
              <Input fontSize='sm' type='email' placeholder='Enter email' />
            </FormControl>
            <FormControl mt='4' size='sm'>
              <FormLabel fontWeight={600} fontSize='sm'>
                Password
              </FormLabel>
              <Input fontSize='sm' type='password' placeholder='Enter password' />
            </FormControl>
            <Button
              fontSize='sm'
              mt='8'
              width='100%'
              color='gray.800'
              bg='white'
              variant='solid'
              type='submit'
              _hover={{ bg: 'gray.700', color: 'gray.100' }}
            >
              Sign in
            </Button>
          </form>
        </Box>
      </Box>
    </Box>
  );
}

export default LoginPage;
