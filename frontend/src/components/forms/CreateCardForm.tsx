import { Form, FormInstance, Input } from "antd";
interface CreateCardFormProps {
  form: FormInstance;
  initialValues?: {
    title?: string;
    description?: string;
  };
}
const CreateCardForm = ({ form, initialValues }: CreateCardFormProps) => {
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

export default CreateCardForm;
