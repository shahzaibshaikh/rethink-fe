import { IconButton, Menu, MenuItem, MenuButton, MenuList } from '@chakra-ui/react';
import { AiOutlineDelete } from 'react-icons/ai';
import { BsStar, BsThreeDots } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import useCreateNote from '../hooks/useCreateNote';
import useNotes from '../hooks/useNotes';
import { NoteStateOne } from '../interfaces/NoteInterface';

interface NoteOptionsIconProps {
  setEditorStatus: (value: boolean) => void;
  folder_id: string;
}

function NoteOptionsIcon({ setEditorStatus, folder_id }: NoteOptionsIconProps) {
  const { loading, data }: NoteStateOne = useSelector((state: any) => state.noteDetail);
  const { deleteNote, favoriteNote } = useCreateNote();
  const { getNotes } = useNotes();

  function handleDelete() {
    const token = localStorage.getItem('token');
    if (token) {
      deleteNote(token, data?._id as string).then(() => {
        setEditorStatus(false);
        getNotes(token, folder_id);
      });
    }
  }

  function handleFavorite() {
    const token = localStorage.getItem('token');
    if (token) {
      favoriteNote(token, data?._id as string).then(() => {
        getNotes(token, folder_id);
      });
    }
  }

  function handleRemoveFavorite() {
    const token = localStorage.getItem('token');
    if (token) {
      favoriteNote(token, data?._id as string).then(() => {
        getNotes(token, folder_id);
      });
    }
  }

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
        {data?.is_favorite ? (
          <MenuItem icon={<BsStar size={16} />} onClick={handleFavorite}>
            Add to favorites
          </MenuItem>
        ) : (
          <MenuItem icon={<BsStar size={16} />} onClick={handleRemoveFavorite}>
            Remove from favorites
          </MenuItem>
        )}

        <MenuItem icon={<AiOutlineDelete size={16} />} onClick={handleDelete}>
          Delete
        </MenuItem>
      </MenuList>
    </Menu>
  );
}

export default NoteOptionsIcon;
