"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDto = void 0;
const class_transformer_1 = require("class-transformer");
const mongodb_1 = require("mongodb");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
let UserDto = class UserDto {
};
exports.UserDto = UserDto;
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_transformer_1.Type)(() => mongodb_1.ObjectId),
    (0, class_transformer_1.Transform)(({ value }) => {
        if (typeof value === 'string') {
            return new mongodb_1.ObjectId(value);
        }
        return value;
    }),
    __metadata("design:type", mongodb_1.ObjectId)
], UserDto.prototype, "_id", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({
        description: 'Phone number of User',
        example: '0811111111',
        type: String,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UserDto.prototype, "phoneNumber", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({
        description: 'Name of User',
        example: 'Guide',
        type: String,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UserDto.prototype, "name", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({
        description: 'Gender of User',
        example: 'M',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UserDto.prototype, "gender", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({
        description: 'Date of User',
        example: new Date(),
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Date)
], UserDto.prototype, "birthDate", void 0);
exports.UserDto = UserDto = __decorate([
    (0, class_transformer_1.Exclude)()
], UserDto);
//# sourceMappingURL=user.dto.js.map