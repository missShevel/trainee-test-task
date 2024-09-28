import * as React from 'react';
import { Button, Divider, Flex } from 'antd';
import { useState } from 'react';
import CreateBoardModal from '../components/modals/CreateBoardModal';
import ViewBoardForm from '../components/forms/ViewBoardForm';

const HomePage = () => {
  const [open, setOpen] = useState(false);
  const showModal = () => {
    console.log(open);
    setOpen(true);
  };

  return (
    <Flex vertical align="center">
      <h1>To-Do Board App</h1>
      <ViewBoardForm />
      <Divider>or</Divider>
      <Button type="primary" size="large" onClick={showModal}>
        Create new board
      </Button>
      <CreateBoardModal open={open} setOpen={setOpen} />
    </Flex>
  );
};

export default HomePage;
