import { Button, Flex, Form, Input } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ViewBoardForm = () => {
  const [boardId, setBoardId] = useState("");
  const navigate = useNavigate();
  const onFinish = () => {
    navigate(`/board/${boardId}`);
  };
  return (
    <Form name="viewBoard" layout="horizontal" onFinish={onFinish}>
      <Flex gap={"small"}>
        <Form.Item
          name="boardId"
          rules={[{ required: true, message: "Set board id" }]}
        >
          <Input
            onChange={(e) => setBoardId(e.target.value)}
            placeholder="Board Id"
            size="large"
          />
        </Form.Item>
        <Form.Item>
          <Button size="large" htmlType="submit">
            View board
          </Button>
        </Form.Item>
      </Flex>
    </Form>
  );
};

export default ViewBoardForm;
