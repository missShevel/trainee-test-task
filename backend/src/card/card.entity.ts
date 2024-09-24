import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { CardStatus } from './enum/cardStatus.enum';
import { ICard } from './interface/card.interface';
import { Board } from 'src/board/board.entity';

@Entity('cards')
export class Card implements ICard {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column({ nullable: true })
  description: string;

  @Column({
    type: 'enum',
    enum: CardStatus,
    default: CardStatus.TODO,
  })
  status: CardStatus;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => Board, (board) => board.cards, { onDelete: 'CASCADE' })
  board: Board;
}
