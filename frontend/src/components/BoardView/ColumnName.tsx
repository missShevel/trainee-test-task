import * as React from 'react';
import { Typography } from 'antd';
import { ViewBoardColumnsEnum } from '../../enum/view-board-columns';

export type BoardViewColumnNameProps = {
  name: ViewBoardColumnsEnum;
};

const BoardViewColumnName = ({ name }: BoardViewColumnNameProps) => {
  return (
    <div
      style={{
        backgroundColor: '#ffffff',
        padding: '5px',
        borderRadius: '7px',
        margin: '5px 0',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Typography.Title
        level={2}
        style={{
          margin: 0,
        }}
      >
        {name}
      </Typography.Title>
    </div>
  );
};

export default BoardViewColumnName;
