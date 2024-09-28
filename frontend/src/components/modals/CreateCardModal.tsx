import * as React from 'react';
import { useForm } from 'antd/es/form/Form';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import createCard from '../../features/board/thunk/card/createCard';
import { Modal } from 'antd';
import CreateCardForm from '../forms/CreateCardForm';

interface CreateCardModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const CreateCardModal = ({ open, setOpen }: CreateCardModalProps) => {
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [form] = useForm();
  const { boardWithCards } = useAppSelector((state) => state.board);

  const dispatch = useAppDispatch();

  const handleOk = async () => {
    try {
      setConfirmLoading(true);
      const formValue = await form.validateFields();
      const { title, description } = formValue;
      dispatch(createCard({ boardId: boardWithCards!.id, title, description }));
      setConfirmLoading(false);
      setOpen(false);
    } catch (e) {
      console.error(e);
    }
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <Modal
      title="Create new task"
      open={open}
      onOk={handleOk}
      confirmLoading={confirmLoading}
      onCancel={handleCancel}
    >
      <CreateCardForm form={form} />
    </Modal>
  );
};

export default CreateCardModal;
