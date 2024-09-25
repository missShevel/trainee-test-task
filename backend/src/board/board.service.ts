import { Injectable } from '@nestjs/common';
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

  async create(boardData: ICreateBoard): Promise<Board> {
    return this.boardRepository.save(boardData);
  }

  async findOne(id: string): Promise<Board | null> {
    return this.boardRepository.findOneBy({ id });
  }

  async findOneWithCards(id: string): Promise<Board | null> {
    return this.boardRepository.findOne({
      where: { id },
      relations: { cards: true },
    });
  }

  async deleteOne(id: string): Promise<void> {
    await this.boardRepository.delete({ id });
  }

  async updateOne(board: Board, updateBoardData: IUpdateBoard): Promise<Board> {
    const boardToUpdate = board;
    Object.assign(boardToUpdate, updateBoardData);
    return this.boardRepository.save(boardToUpdate);
  }
}
