import { Button, Flex, Typography } from "antd";
import { useState } from "react";
import CreateBoardModal from "../components/CreateBoardModal";
import CreateBoardForm from "../components/CreateBoardForm";

const HomePage = () => {
  const [open, setOpen] = useState(false);
  const showModal = () => {
    console.log(open);
    setOpen(true);
  };

  return (
    <Flex vertical align="center">
      <h1>To-Do Board App</h1>
      <Flex gap="small">
        <Button type="primary" size="large" onClick={showModal}>
          Create new board
        </Button>
        <CreateBoardModal open={open} setOpen={setOpen} />
        <Button size="large">View board</Button>
      </Flex>
    </Flex>
  );
};

export default HomePage;
