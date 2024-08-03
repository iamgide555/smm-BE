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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const mongodb_1 = require("mongodb");
const jwt_1 = require("@nestjs/jwt");
const uuid_1 = require("uuid");
let AuthService = class AuthService {
    constructor(userModel, jwtService) {
        this.userModel = userModel;
        this.jwtService = jwtService;
    }
    async createUser(userInfo) {
        const isDuplicate = await this.getUser(userInfo.phoneNumber);
        if (isDuplicate) {
            return new common_1.ConflictException('Email address already exists');
        }
        userInfo._id = new mongodb_1.ObjectId();
        return this.userModel.create(userInfo);
    }
    async getUser(phoneNumber) {
        return this.userModel.findOne({ phoneNumber });
    }
    async validateUser(phoneNumber) {
        const user = await this.getUser(phoneNumber);
        if (!user)
            return null;
        if (!user) {
            return new common_1.NotAcceptableException('could not find the user');
        }
        if (user) {
            return user;
        }
        return null;
    }
    async signIn(signInDto) {
        const { phoneNumber } = signInDto;
        const user = await this.getUser(phoneNumber);
        if (!user) {
            return new common_1.UnauthorizedException('Invalid username or password');
        }
        const payload = {
            sub: user._id,
            phoneNumber: user?.phoneNumber,
            name: user?.name,
            gender: user?.gender,
        };
        const accessToken = await this.createAccessToken(payload);
        return { access_token: accessToken };
    }
    async createAccessToken(payload) {
        return this.jwtService.signAsync({ ...payload }, { expiresIn: '15m' });
    }
    async createRefreshToken(payload) {
        const tokenId = (0, uuid_1.v4)();
        return this.jwtService.signAsync({ ...payload, tokenId: tokenId }, { expiresIn: '1d' });
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('user')),
    __metadata("design:paramtypes", [mongoose_2.Model,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map