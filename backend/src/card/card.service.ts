import { Injectable, NotFoundException } from '@nestjs/common';
import { Card } from './card.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ICreateCard } from './interface/createCard.interface';
import { BoardService } from 'src/board/board.service';
import { IUpdateCard } from './interface/updateCard.interface';
import { Board } from 'src/board/board.entity';

@Injectable()
export class CardService {
  constructor(
    @InjectRepository(Card)
    private cardRepository: Repository<Card>,
    private boardService: BoardService,
  ) {}

  getCardOrThrow(board: Board, cardId: string): Card {
    const card = board.cards.find((card) => card.id === cardId);
    if (!card) {
      throw new NotFoundException(`Card with ID ${cardId} not found`);
    }
    return card;
  }

  async create(boardId: string, createCardData: ICreateCard): Promise<Card> {
    const board = await this.boardService.getBoardOrThrow(boardId);
    const newCard: Omit<Card, 'id' | 'status' | 'createdAt' | 'updatedAt'> = {
      ...createCardData,
      board,
    };
    return this.cardRepository.save(newCard);
  }

  async update(
    boardId: string,
    cardId: string,
    createCardData: IUpdateCard,
  ): Promise<Card> {
    const board = await this.boardService.getBoardWithCardsOrThrow(boardId);
    const cardToEdit = this.getCardOrThrow(board, cardId);
    Object.assign(cardToEdit, createCardData);
    return this.cardRepository.save(cardToEdit);
  }

  async delete(boardId: string, cardId: string): Promise<Card> {
    const board = await this.boardService.getBoardWithCardsOrThrow(boardId);
    const cardToDelete = this.getCardOrThrow(board, cardId);
    return this.cardRepository.remove(cardToDelete);
  }
}
