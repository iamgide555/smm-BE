import { ObjectId } from 'mongodb';
import { LoginUser } from '../interface/login.interface';
export declare class LoginUserDto implements LoginUser {
    _id?: ObjectId;
    phoneNumber: string;
}
