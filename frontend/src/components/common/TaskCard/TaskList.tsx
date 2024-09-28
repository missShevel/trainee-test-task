import { Flex } from "antd";
import { ICard } from "../../../interface/cardInterface";
import TaskCard from "./TaskCard";

export type TaskCardListProps = {
  cardList: ICard[];
};

const TaskCardList = ({ cardList }: TaskCardListProps) => {
  return (
    <Flex vertical gap={"7px"}>
      {cardList.map((card) => (
        <TaskCard card={card} />
      ))}
    </Flex>
  );
};

export default TaskCardList;
