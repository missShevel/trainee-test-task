import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
} from '@nestjs/common';
import { BoardService } from './board.service';
import { Board } from './board.entity';
import { CreateBoardDto } from './dto/createBoard.dto';
import { UpdateBoardDto } from './dto/updateBoard.dto';

@Controller('board')
export class BoardController {
  constructor(private boardService: BoardService) {}

  @Post()
  async create(@Body() createBoardData: CreateBoardDto): Promise<Board> {
    return this.boardService.create(createBoardData);
  }

  @Get(':id')
  async getOne(@Param('id', ParseUUIDPipe) id: string): Promise<Board> {
    const board = await this.boardService.findOneWithCards(id);
    if (!board) {
      throw new NotFoundException();
    }
    return board;
  }

  @Delete(':id')
  async deleteOne(@Param('id', ParseUUIDPipe) id: string): Promise<void> {
    const board = await this.boardService.findOne(id);
    if (!board) {
      throw new NotFoundException();
    }
    await this.boardService.deleteOne(id);
  }

  @Put(':id')
  async editOne(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateData: UpdateBoardDto,
  ): Promise<Board> {
    const board = await this.boardService.findOne(id);
    if (!board) {
      throw new NotFoundException();
    }
    return this.boardService.updateOne(board, updateData);
  }
}
