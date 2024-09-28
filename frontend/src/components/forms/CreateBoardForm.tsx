import { Form, FormInstance, Input } from "antd";
interface CreateBoardFormProps {
  form: FormInstance;
}
const CreateBoardForm = ({ form }: CreateBoardFormProps) => {
  return (
    <Form
      form={form}
      layout="vertical"
      initialValues={{ remember: true }}
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
