import * as React from 'react';
import { useForm } from 'antd/es/form/Form';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { Modal } from 'antd';
import { ICard } from '../../interface/cardInterface';
import editCard from '../../features/board/thunk/card/editCard';
import CreateCardForm from '../forms/CreateCardForm';

interface EditCardModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  selectedCard: ICard | null;
}

const EditCardModal = ({ open, setOpen, selectedCard }: EditCardModalProps) => {
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [form] = useForm();
  const { boardWithCards } = useAppSelector((state) => state.board);

  const dispatch = useAppDispatch();

  const handleOk = async () => {
    try {
      setConfirmLoading(true);
      const formValue = await form.validateFields();
      const { title, description } = formValue;
      dispatch(
        editCard({
          boardId: boardWithCards!.id,
          cardId: selectedCard!.id,
          title,
          description,
        })
      );
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
      title="Edit task"
      open={open}
      onOk={handleOk}
      confirmLoading={confirmLoading}
      onCancel={handleCancel}
    >
      <CreateCardForm
        form={form}
        initialValues={{
          title: selectedCard?.title,
          description: selectedCard?.description,
        }}
      />
    </Modal>
  );
};

export default EditCardModal;
