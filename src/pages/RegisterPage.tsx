import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Image,
  Input,
  Spinner,
  Text
} from '@chakra-ui/react';
import bgImage from '../assets/stefan-cosma-muK4j9HjIrQ-unsplash.jpg';
import brandImage from '../assets/rethink-logo-full.png';
import { Link, useNavigate } from 'react-router-dom';
import { FormEvent, useState } from 'react';
import useRegister from '../hooks/useRegister';

function RegisterPage() {
  const navigate = useNavigate();
  const [registerData, setRegisterData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: ''
  });

  const { loading, register } = useRegister();

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    register(registerData).then(success => {
      if (success) {
        navigate('/');
      }
    });
  }

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
          width='350px'
          borderRadius='md'
          boxShadow='md'
          display='flex'
          flexDirection='column'
          justifyContent='center'
          alignItems='center'
        >
          <Image src={brandImage} width={40} mb='6' />
          {loading ? (
            <Spinner size='xl' color='purple.500' mb={6} mt={4} />
          ) : (
            <form style={{ width: '100%' }} onSubmit={handleSubmit}>
              <FormControl size='sm'>
                <FormLabel fontWeight={600} fontSize='sm'>
                  First name
                </FormLabel>
                <Input
                  value={registerData.first_name}
                  onChange={event =>
                    setRegisterData({ ...registerData, first_name: event.target.value })
                  }
                  fontSize='sm'
                  type='text'
                  placeholder='Enter first name'
                />
              </FormControl>
              <FormControl mt='4' size='sm'>
                <FormLabel fontWeight={600} fontSize='sm'>
                  Last name
                </FormLabel>
                <Input
                  value={registerData.last_name}
                  onChange={event =>
                    setRegisterData({ ...registerData, last_name: event.target.value })
                  }
                  fontSize='sm'
                  type='text'
                  placeholder='Enter last name'
                />
              </FormControl>
              <FormControl mt='4' size='sm'>
                <FormLabel fontWeight={600} fontSize='sm'>
                  Email address
                </FormLabel>
                <Input
                  value={registerData.email}
                  onChange={event =>
                    setRegisterData({ ...registerData, email: event.target.value })
                  }
                  fontSize='sm'
                  type='email'
                  placeholder='Enter email'
                />
              </FormControl>
              <FormControl mt='4' size='sm'>
                <FormLabel fontWeight={600} fontSize='sm'>
                  Password
                </FormLabel>
                <Input
                  value={registerData.password}
                  onChange={event =>
                    setRegisterData({ ...registerData, password: event.target.value })
                  }
                  fontSize='sm'
                  type='password'
                  placeholder='Enter password'
                />
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
                Sign up
              </Button>
            </form>
          )}
          <Text fontSize='xs' fontWeight={600} mt={3}>
            Already a user? Sign in{' '}
            <Link to='/login' color='purple.600'>
              <span style={{ color: '#6B46C1' }}>here</span>
            </Link>
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

export default RegisterPage;
