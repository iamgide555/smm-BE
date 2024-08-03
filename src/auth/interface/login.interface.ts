import { ObjectId } from 'mongodb';

export interface LoginUser {
  _id?: ObjectId;
  phoneNumber: string;
}
