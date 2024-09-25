import {
  Body,
  Controller,
  Delete,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
} from '@nestjs/common';
import { CardService } from './card.service';
import { Card } from './card.entity';
import { CreateCardDto } from './dto/createCard.dto';
import { UpdateCardDto } from './dto/updateCard.dto';

@Controller('/board/:boardId/card')
export class CardController {
  constructor(private cardService: CardService) {}

  @Post()
  async create(
    @Param('boardId') boardId: string,
    @Body() createCardData: CreateCardDto,
  ): Promise<Card> {
    return this.cardService.create(boardId, createCardData);
  }

  @Put(':id')
  async update(
    @Param('boardId', ParseUUIDPipe) boardId: string,
    @Param('id', ParseUUIDPipe) cardId: string,
    @Body() updateCardData: UpdateCardDto,
  ): Promise<Card> {
    return this.cardService.update(boardId, cardId, updateCardData);
  }

  @Delete(':id')
  async delete(
    @Param('boardId', ParseUUIDPipe) boardId: string,
    @Param('id', ParseUUIDPipe) cardId: string,
  ): Promise<Card> {
    return this.cardService.delete(boardId, cardId);
  }
}
