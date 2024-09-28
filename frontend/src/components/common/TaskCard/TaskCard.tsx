import { Card, CardProps, Typography } from "antd";
import { ICard } from "../../../interface/cardInterface";
import dayjs from "dayjs";

type TaskCardProps = {
  card: ICard;
};

const TaskCard = ({ card }: TaskCardProps) => {
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
      >
        <Typography.Paragraph
          ellipsis={{ rows: 3, expandable: true, symbol: "more",  }}
        >
          {card.description}
        </Typography.Paragraph>
      </Card>
    </>
  );
};

export default TaskCard;
