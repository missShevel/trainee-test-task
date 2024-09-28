import { Flex } from "antd";
import { ICard } from "../../../interface/cardInterface";
import TaskCard, { TaskCardProps } from "./TaskCard";

export type TaskCardListProps = {
  cardList: ICard[];
  handleEditCard: TaskCardProps['handleEditCard']
};

const TaskCardList = ({ cardList, handleEditCard }: TaskCardListProps) => {
  return (
    <Flex vertical gap={"7px"}>
      {cardList.map((card) => (
        <TaskCard card={card} handleEditCard={handleEditCard} />
      ))}
    </Flex>
  );
};

export default TaskCardList;
