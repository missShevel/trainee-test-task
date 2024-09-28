import * as React from 'react';
import { useState } from 'react';
import { Modal } from 'antd';
import { useForm } from 'antd/es/form/Form';
import axiosInstance from '../../api/axios';
import { ApiEndpoints } from '../../enum/apiEndpoints';
import { useNavigate } from 'react-router-dom';
import CreateBoardForm from '../forms/CreateBoardForm';

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
      const { data: createdBoard } = await axiosInstance.post(
        ApiEndpoints.CREATE_BOARD,
        formValue
      );
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
      title="Create new board"
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
