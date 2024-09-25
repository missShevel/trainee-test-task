import { Injectable, NotFoundException } from '@nestjs/common';
import { Card } from './card.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ICreateCard } from './interface/createCard.interface';
import { BoardService } from 'src/board/board.service';

@Injectable()
export class CardService {
  constructor(
    @InjectRepository(Card)
    private cardRepository: Repository<Card>,
    private boardService: BoardService,
  ) {}

  async create(boardId: string, createCardData: ICreateCard): Promise<Card> {
    const board = await this.boardService.findOne(boardId);
    if (!board) {
      throw new NotFoundException(`Board with ID ${boardId} not found`);
    }
    const newCard: Omit<Card, 'id' | 'status' | 'createdAt' | 'updatedAt'> = {
      ...createCardData,
      board,
    };
    return this.cardRepository.save(newCard);
  }
}
