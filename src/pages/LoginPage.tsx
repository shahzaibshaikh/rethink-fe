import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Image,
  Input,
  Text
} from "@chakra-ui/react";
import bgImage from "../assets/stefan-cosma-muK4j9HjIrQ-unsplash.jpg";
import brandImage from "../assets/rethink-logo-full.png";
import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useLogin from "../hooks/useLogin";
import { Spinner } from "@chakra-ui/react";

function LoginPage() {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });

  const { loading, login } = useLogin();

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    login(loginData).then(success => {
      if (success) {
        navigate("/");
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
            <form style={{ width: "100%" }} onSubmit={handleSubmit}>
              <FormControl size='sm'>
                <FormLabel fontWeight={600} fontSize='sm'>
                  Email address
                </FormLabel>
                <Input
                  value={loginData.email}
                  onChange={event =>
                    setLoginData({ ...loginData, email: event.target.value })
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
                  value={loginData.password}
                  onChange={event =>
                    setLoginData({ ...loginData, password: event.target.value })
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
                _hover={{ bg: "gray.700", color: "gray.100" }}
              >
                Sign in
              </Button>
            </form>
          )}
          <Text fontSize='xs' fontWeight={600} mt={3}>
            Not a user? Sign up{" "}
            <Link to='/register' color='purple.600'>
              <span style={{ color: "#6B46C1" }}>here</span>
            </Link>
          </Text>
        </Box>
      </Box>
      )
    </Box>
  );
}

export default LoginPage;
