import { ICard } from "./cardInterface";

export interface IBoard {
    id: string,
    name: string,
    createdAt: Date,
    updatedAt: Date,
}

export interface IBoardWithCards extends IBoard {
    cards: ICard[];
}