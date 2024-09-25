import { Injectable, NotFoundException } from '@nestjs/common';
import { ICreateBoard } from './interface/createBoard.interface';
import { Board } from './board.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IUpdateBoard } from './interface/updateBoard.interface';

@Injectable()
export class BoardService {
  constructor(
    @InjectRepository(Board)
    private boardRepository: Repository<Board>,
  ) {}
  async findOne(id: string): Promise<Board | null> {
    return this.boardRepository.findOneBy({ id });
  }

  async findOneWithCards(id: string): Promise<Board | null> {
    return this.boardRepository.findOne({
      where: { id },
      relations: { cards: true },
    });
  }

  async getBoardOrThrow(id: string): Promise<Board> {
    const board = await this.findOne(id);
    if (!board) {
      throw new NotFoundException(`Board with ID ${id} not found`);
    }
    return board;
  }

  async getBoardWithCardsOrThrow(id: string): Promise<Board> {
    const board = await this.findOneWithCards(id);
    if (!board) {
      throw new NotFoundException(`Board with ID ${id} not found`);
    }
    return board;
  }

  async create(boardData: ICreateBoard): Promise<Board> {
    return this.boardRepository.save(boardData);
  }

  async deleteOne(id: string): Promise<Board> {
    const board = await this.getBoardOrThrow(id);
    return this.boardRepository.remove(board);
  }

  async updateOne(id: string, updateBoardData: IUpdateBoard): Promise<Board> {
    const boardToUpdate = await this.getBoardOrThrow(id);
    Object.assign(boardToUpdate, updateBoardData);
    return this.boardRepository.save(boardToUpdate);
  }
}
