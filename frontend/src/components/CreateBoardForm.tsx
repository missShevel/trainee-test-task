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
        name="name"
        label="Board name"
        rules={[{ required: true, message: "Set a board name" }]}
      >
        <Input />
      </Form.Item>
    </Form>
  );
};

export default CreateBoardForm;
