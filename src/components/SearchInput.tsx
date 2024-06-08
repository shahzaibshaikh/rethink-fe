import { Box, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import useNotes from '../hooks/useNotes';

function SearchInput() {
  const [query, setQuery] = useState('');
  const { data, loading, error, searchNotes } = useNotes();


  const handleSearch = (event: React.FormEvent) => {
    const token = localStorage.getItem('token');
    event.preventDefault();
    if (token) 
      searchNotes(token, query);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  return (
    <Box mt={5}>
      <form
        style={{ width: '100%' }}
        onSubmit={handleSearch}
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
            value={query}
            onChange={handleChange}
            _focus={{ border: '0px', background: 'gray.600' }}
          />
        </InputGroup>
      </form>
    </Box>
  );
}

export default SearchInput;
