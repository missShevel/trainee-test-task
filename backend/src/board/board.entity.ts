import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { IBoard } from "./interface/board.interface";
import { Card } from "src/card/card.entity";

@Entity('boards')
export class Board implements IBoard {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;

    @OneToMany(() => Card, (card) => card.board)
    cards: Card[];
}