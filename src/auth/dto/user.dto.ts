import { Exclude, Expose, Transform, Type } from 'class-transformer';
import { User } from '../interface/user.interface';
import { ObjectId } from 'mongodb';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { Gender } from '../../common/enum/gender.enum';

@Exclude()
export class UserDto implements User {
  @Expose()
  @Type(() => ObjectId)
  @Transform(({ value }) => {
    if (typeof value === 'string') {
      return new ObjectId(value);
    }
    return value;
  })
  public _id: ObjectId;

  @Expose()
  @ApiProperty({
    description: 'Phone number of User',
    example: '0811111111',
    type: String,
  })
  @IsNotEmpty()
  phoneNumber!: string;

  @Expose()
  @ApiProperty({
    description: 'Name of User',
    example: 'Guide',
    type: String,
  })
  @IsNotEmpty()
  public name!: string;

  @Expose()
  @ApiProperty({
    description: 'Gender of User(M,F,O)',
    example: 'M',
  })
  @IsNotEmpty()
  public gender!: Gender;

  @Expose()
  @ApiProperty({
    description: 'Date of User',
    example: new Date(),
  })
  @IsNotEmpty()
  public birthDate!: Date;
}
