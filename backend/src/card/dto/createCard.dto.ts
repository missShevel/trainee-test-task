import { IsOptional, MaxLength } from 'class-validator';

export class CreateCardDto {
  @MaxLength(255)
  title: string;
  @IsOptional()
  description?: string;
}
