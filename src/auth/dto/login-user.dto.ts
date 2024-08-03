import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose, Transform, Type } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';
import { ObjectId } from 'mongodb';
import { LoginUser } from '../interface/login.interface';

@Exclude()
export class LoginUserDto implements LoginUser {
  @Expose()
  @Type(() => ObjectId)
  @Transform(({ value }) => {
    if (typeof value === 'string') {
      return new ObjectId(value);
    }
    return value;
  })
  public _id?: ObjectId;

  @Expose()
  @ApiProperty({
    description: 'Phone Number',
    example: '0811111111',
    type: String,
  })
  @IsNotEmpty()
  public phoneNumber!: string;
}
