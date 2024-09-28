import { Row } from "antd";
import BoardViewColumn, { BoardViewColumnProps } from "./Column";
import { ViewBoardColumnsEnum } from "../../enum/view-board-columns";
import { ICard } from "../../interface/cardInterface";
import { CardStatus } from "../../enum/cardStatus";

type BoardViewProps = {
  cardList: ICard[];
  handleEditCard: BoardViewColumnProps['handleEditCard']
};

const BoardView = ({ cardList, handleEditCard }: BoardViewProps) => {
  const todo = cardList.filter((card) => card.status === CardStatus.TODO);
  const inProgress = cardList.filter(
    (card) => card.status === CardStatus.IN_PROGRESS
  );
  const done = cardList.filter((card) => card.status === CardStatus.DONE);
  return (
    <Row justify="space-around">
      <BoardViewColumn handleEditCard={handleEditCard} cardList={todo} name={ViewBoardColumnsEnum.TODO} />
      <BoardViewColumn
        handleEditCard={handleEditCard}
        cardList={inProgress}
        name={ViewBoardColumnsEnum.IN_PROGRESS}
      />
      <BoardViewColumn handleEditCard={handleEditCard} cardList={done} name={ViewBoardColumnsEnum.DONE} />
    </Row>
  );
};

export default BoardView;
