import { Button, Divider, Flex, Typography } from "antd";
import { useState } from "react";
import CreateBoardModal from "../components/CreateBoardModal";
import CreateBoardForm from "../components/CreateBoardForm";
import ViewBoardForm from "../components/ViewBoardForm";

const HomePage = () => {
  const [open, setOpen] = useState(false);
  const showModal = () => {
    console.log(open);
    setOpen(true);
  };

  return (
    <Flex vertical align="center">
      <h1>To-Do Board App</h1>
      {/* <Button size="large">View board</Button> */}
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
