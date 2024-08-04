import { ObjectId } from 'mongodb';
import { Gender } from '../../common/enum/gender.enum';

export interface User {
  _id?: ObjectId;
  phoneNumber: string;
  name?: string;
  gender?: Gender;
  birthDate?: Date;
}
