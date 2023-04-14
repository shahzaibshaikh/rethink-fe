import { IconButton, Menu, MenuItem, MenuButton, MenuList } from '@chakra-ui/react';
import { AiOutlineDelete } from 'react-icons/ai';
import { BsStar, BsThreeDots } from 'react-icons/bs';

function NoteOptionsIcon() {
  return (
    <Menu>
      <MenuButton
        borderRadius='50%'
        size='md'
        as={IconButton}
        aria-label='Options'
        icon={<BsThreeDots />}
        variant='outline'
      />
      <MenuList fontSize='13px'>
        <MenuItem icon={<BsStar size={16} />}>Add to favourites</MenuItem>
        {/* <MenuItem icon={<AiOutlineDelete size={16} />}>Delete</MenuItem> */}
      </MenuList>
    </Menu>
  );
}

export default NoteOptionsIcon;
