import { useState } from "react";
import { Form, Modal } from "antd";
import CreateBoardForm from "./CreateBoardForm";
import { useForm } from "antd/es/form/Form";
import axiosInstance from "../api/axios";
import { ApiEndpoints } from "../enum/apiEndpoints";
import { redirect, useNavigate } from "react-router-dom";

interface CreateBoardModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const CreateBoardModal = ({ open, setOpen }: CreateBoardModalProps) => {
  const [confirmLoading, setConfirmLoading] = useState(false);

  const [form] = useForm();

  const navigate = useNavigate();

  const handleOk = async () => {
    try {
      setConfirmLoading(true);
      const formValue = await form.validateFields();
      console.log("Form values", formValue);
      const { data: createdBoard } = await axiosInstance.post(
        ApiEndpoints.CREATE_BOARD,
        formValue
      );
      console.log("Created board", createdBoard);
      setConfirmLoading(false);
      setOpen(false);
      navigate(`/board/${createdBoard.id}`);
    } catch (e) {
      console.error(e);
    }
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <Modal
      title="Title"
      open={open}
      onOk={handleOk}
      confirmLoading={confirmLoading}
      onCancel={handleCancel}
    >
      <CreateBoardForm form={form} />
    </Modal>
  );
};

export default CreateBoardModal;
