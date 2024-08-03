import { ObjectId } from 'mongodb';
export interface User {
    _id?: ObjectId;
    phoneNumber: string;
    name?: string;
    gender?: string;
    birthDate?: Date;
}
