/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { User } from '../interface/user.interface';
import { Document } from 'mongoose';
import { ObjectId } from 'mongodb';
export type UserDocument = UserSchema & Document;
export declare class UserSchema implements User {
    _id: ObjectId;
    name?: string;
    phoneNumber: string;
    gender?: string;
    birthDate?: Date;
}
export declare const userSchema: import("mongoose").Schema<UserSchema, import("mongoose").Model<UserSchema, any, any, any, Document<unknown, any, UserSchema> & UserSchema & Required<{
    _id: ObjectId;
}>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, UserSchema, Document<unknown, {}, import("mongoose").FlatRecord<UserSchema>> & import("mongoose").FlatRecord<UserSchema> & Required<{
    _id: ObjectId;
}>>;
