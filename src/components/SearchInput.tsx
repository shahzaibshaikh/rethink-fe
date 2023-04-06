import { Box, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { BsSearch } from 'react-icons/bs';

function SearchInput() {
  return (
    <Box mt={5}>
      <form
        style={{ width: '100%' }}
        onSubmit={event => {
          event.preventDefault();
        }}
      >
        <InputGroup>
          <InputLeftElement children={<BsSearch color='white' />} />

          <Input
            borderRadius={20}
            placeholder='Search notes'
            variant='filled'
            background='gray.600'
            fontSize='13px'
            color='white'
            outline='none'
            _focus={{ border: '0px', background: 'gray.600' }}
          />
        </InputGroup>
      </form>
    </Box>
  );
}

export default SearchInput;
