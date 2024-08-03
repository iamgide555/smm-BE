import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { User } from '../interface/user.interface';
import { Document } from 'mongoose';
import { ObjectId } from 'mongodb';

export type UserDocument = UserSchema & Document;

@Schema()
export class UserSchema implements User {
  @Prop()
  _id: ObjectId;
  @Prop()
  name?: string;
  @Prop()
  phoneNumber: string;
  @Prop()
  gender?: string;
  @Prop()
  birthDate?: Date;
}

export const userSchema = SchemaFactory.createForClass(UserSchema);
