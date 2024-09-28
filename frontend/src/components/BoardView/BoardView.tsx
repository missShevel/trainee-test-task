import { Row } from "antd";
import BoardViewColumn from "./Column";
import { ViewBoardColumnsEnum } from "../../enum/view-board-columns";
import { ICard } from "../../interface/cardInterface";
import { CardStatus } from "../../enum/cardStatus";

type BoardViewProps = {
  cardList: ICard[];
};

const BoardView = ({ cardList }: BoardViewProps) => {
  const todo = cardList.filter((card) => card.status === CardStatus.TODO);
  const inProgress = cardList.filter(
    (card) => card.status === CardStatus.IN_PROGRESS
  );
  const done = cardList.filter((card) => card.status === CardStatus.DONE);
  return (
    <Row justify="space-around">
      <BoardViewColumn cardList={todo} name={ViewBoardColumnsEnum.TODO} />
      <BoardViewColumn
        cardList={inProgress}
        name={ViewBoardColumnsEnum.IN_PROGRESS}
      />
      <BoardViewColumn cardList={done} name={ViewBoardColumnsEnum.DONE} />
    </Row>
  );
};

export default BoardView;
