import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Card } from './card.entity';
import { CardService } from './card.service';
import { BoardModule } from 'src/board/board.module';
import { CardController } from './card.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Card]), BoardModule],
  providers: [CardService],
  controllers: [CardController],
})
export class CardModule {}
