import { MaxLength } from 'class-validator';

export class CreateBoardDto {
  @MaxLength(255)
  name: string;
}
