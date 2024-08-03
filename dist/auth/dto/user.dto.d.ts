import { User } from '../interface/user.interface';
import { ObjectId } from 'mongodb';
export declare class UserDto implements User {
    _id: ObjectId;
    phoneNumber: string;
    name: string;
    gender: string;
    birthDate: Date;
}
