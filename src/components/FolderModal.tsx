import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  ModalFooter,
  Button,
  FormControl,
  FormLabel,
  Input,
  HStack
} from '@chakra-ui/react';
import { FormEvent, useState } from 'react';
import useFolders from '../hooks/useFolders';

interface FolderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function FolderModal({ isOpen, onClose }: FolderModalProps) {
  const [folderName, setFolderName] = useState<string>('');
  const { createFolder, getFolders } = useFolders();

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const token = localStorage.getItem('token');
    if (token)
      createFolder(token, folderName)
        .then(() => {
          getFolders(token);
          onClose();
        })
        .finally(() => setFolderName(''));
  }

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontWeight={700} fontSize='18px'>
            Create a new folder
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody fontSize='13px'>
            <form onSubmit={event => handleSubmit(event)}>
              <FormControl>
                <FormLabel fontWeight={600} fontSize='sm'>
                  Folder name
                </FormLabel>
                <Input
                  value={folderName}
                  onChange={event => setFolderName(event.target.value)}
                  fontSize='sm'
                  type='text'
                  placeholder='Enter folder name'
                />
              </FormControl>
              <HStack mt={8} mb={3} justifyContent='space-between'>
                <Button
                  colorScheme='red'
                  mr={3}
                  onClick={onClose}
                  variant='outline'
                  fontSize='sm'
                >
                  Close
                </Button>
                <Button
                  fontSize='sm'
                  color='white'
                  bg='purple.600'
                  type='submit'
                  variant='solid'
                  _hover={{ bg: 'gray.700', color: 'gray.100' }}
                >
                  Create Folder
                </Button>
              </HStack>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default FolderModal;
