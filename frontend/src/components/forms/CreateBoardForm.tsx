import { Form, FormInstance, Input } from "antd";
interface CreateBoardFormProps {
  form: FormInstance;
  initialValues?: {
    title?: string;
    description?: string;
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
        name="title"
        label="Title"
        rules={[{ required: true, message: "Set task title" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item name="description" label="Description">
        <Input.TextArea rows={4} />
      </Form.Item>
    </Form>
  );
};

export default CreateBoardForm;
