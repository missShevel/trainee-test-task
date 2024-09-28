import { Typography } from "antd";

export type BoardViewColumnNameProps = {
  name: string;
};

const BoardViewColumnName = ({ name }: BoardViewColumnNameProps) => {
  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        padding: "5px",
        borderRadius: "7px",
        margin: "5px 0",
        display: "flex",
        justifyContent: "center",
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
