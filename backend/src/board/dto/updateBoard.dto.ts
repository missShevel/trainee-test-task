import { MaxLength, IsOptional } from 'class-validator';

export class UpdateBoardDto {
  @MaxLength(255)
  @IsOptional()
  name: string;
}
