import { IsEnum, IsOptional } from 'class-validator';
import { CardStatus } from '../enum/cardStatus.enum';

export class UpdateCardDto {
  @IsOptional()
  title?: string;
  @IsOptional()
  description?: string;
  @IsEnum(CardStatus)
  @IsOptional()
  status?: CardStatus;
}
