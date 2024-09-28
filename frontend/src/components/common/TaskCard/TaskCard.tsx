import { Card, CardProps, Typography } from "antd";
import { ICard } from "../../../interface/cardInterface";
import dayjs from "dayjs";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import DeleteButtonWithConfirm from "../DeleteButtonWithConfirm";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import deleteCard from "../../../features/board/thunk/card/deleteCard";

export type TaskCardProps = {
  card: ICard;
  handleEditCard: (card: ICard) => void;
};

const TaskCard = ({ card, handleEditCard }: TaskCardProps) => {
  const { boardWithCards, isLoading, isError } = useAppSelector(
    (state) => state.board
  );

  const dispatch = useAppDispatch();
  const handleDeleteCard = (cardId: string) => {
    dispatch(deleteCard({ boardId: boardWithCards!.id, cardId }));
  };
  const actions = [
    <EditOutlined key="edit" onClick={() => handleEditCard(card)} />,
    <DeleteButtonWithConfirm
      isIcon
      title="Delete card"
      description="Are you sure to delete this card?"
      onConfirm={() => handleDeleteCard(card.id)}
      okText="Yes"
      cancelText="No"
    />,
  ];
  return (
    <>
      <Card
        key={card.id}
        title={card.title}
        bordered={true}
        style={{ borderRadius: 8 }}
        extra={
          <Typography.Text type="secondary">
            {dayjs(card.createdAt).format("MMM D, YYYY")}
          </Typography.Text>
        }
        hoverable
        actions={actions}
      >
        <Typography.Paragraph
          ellipsis={{ rows: 3, expandable: true, symbol: "more" }}
        >
          {card.description}
        </Typography.Paragraph>
      </Card>
    </>
  );
};

export default TaskCard;
