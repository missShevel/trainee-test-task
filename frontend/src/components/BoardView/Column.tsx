import { Col, Divider } from "antd";
import BoardViewColumnName, { BoardViewColumnNameProps } from "./ColumnName";
import TaskCardList, { TaskCardListProps } from "../common/TaskCard/TaskList";

type BoardViewColumnProps = {} & BoardViewColumnNameProps & TaskCardListProps;

const BoardViewColumn = ({ cardList, name }: BoardViewColumnProps) => {
  return (
    <Col
      style={{ background: "#f2f2f2", minHeight: "500px", padding: "7px" }}
      span={6}
    >
      <BoardViewColumnName name={name} />
      <Divider />
      <TaskCardList cardList={cardList} />
    </Col>
  );
};

export default BoardViewColumn;
