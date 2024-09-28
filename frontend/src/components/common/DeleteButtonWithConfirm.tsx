import { Button, Popconfirm, PopconfirmProps } from "antd";

type DeleteButtonWithConfirmProps = {
  buttonText: string;
} & PopconfirmProps;

const DeleteButtonWithConfirm = ({
  buttonText = "Delete",
  ...popconfirmProps
}: DeleteButtonWithConfirmProps) => {
  return (
    <div className="DeleteButtonWithConfirm">
      <Popconfirm {...popconfirmProps}>
        <Button danger>{buttonText}</Button>
      </Popconfirm>
    </div>
  );
};

export default DeleteButtonWithConfirm;
