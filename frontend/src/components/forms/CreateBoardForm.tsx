import * as React from 'react';
import { Form, FormInstance, Input } from 'antd';
interface CreateBoardFormProps {
  form: FormInstance;
  initialValues?: {
    name: string;
  };
}
const CreateBoardForm = ({ form, initialValues }: CreateBoardFormProps) => {
  return (
    <Form
      form={form}
      layout="vertical"
      initialValues={initialValues}
      autoComplete="on"
    >
      <Form.Item
        name="name"
        label="Board name"
        rules={[{ required: true, message: 'Set board name' }]}
      >
        <Input />
      </Form.Item>
    </Form>
  );
};

export default CreateBoardForm;
