import * as React from 'react';
import { DeleteOutlined } from '@ant-design/icons';
import { Button, Popconfirm, PopconfirmProps } from 'antd';
import { ReactNode } from 'react';

type DeleteButtonWithConfirmProps = {
  buttonText?: string;
  isIcon?: boolean;
} & PopconfirmProps;

const DeleteButtonWithConfirm = ({
  buttonText = 'Delete',
  isIcon = false,
  ...popconfirmProps
}: DeleteButtonWithConfirmProps) => {
  const buttonContent: ReactNode = isIcon ? (
    <DeleteOutlined key="delete" />
  ) : (
    buttonText
  );
  return (
    <div className="DeleteButtonWithConfirm">
      <Popconfirm {...popconfirmProps}>
        <Button onMouseDown={(e) => e.stopPropagation()} danger>
          {buttonContent}
        </Button>
      </Popconfirm>
    </div>
  );
};

export default DeleteButtonWithConfirm;
