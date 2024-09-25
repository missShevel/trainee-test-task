import { Body, Controller, Param, Post } from '@nestjs/common';
import { CardService } from './card.service';
import { Card } from './card.entity';
import { CreateCardDto } from './dto/createCard.dto';

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
}
