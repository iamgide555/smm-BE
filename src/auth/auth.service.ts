import {
  ConflictException,
  Injectable,
  NotAcceptableException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDocument } from './schema/user.schema';
import { UserDto } from './dto/user.dto';
import { ObjectId } from 'mongodb';
import { JwtService } from '@nestjs/jwt';
import { LoginUserDto } from './dto/login-user.dto';
import { v4 as uuid } from 'uuid';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel('user') private readonly userModel: Model<UserDocument>,
    private jwtService: JwtService,
  ) {}

  public async createUser(userInfo: UserDto): Promise<any> {
    const isDuplicate = await this.getUser(userInfo.phoneNumber);
    if (isDuplicate) {
      return new ConflictException('Email address already exists');
    }
    userInfo._id = new ObjectId();
    return this.userModel.create(userInfo);
  }

  public async getUser(phoneNumber): Promise<UserDto> {
    return this.userModel.findOne({ phoneNumber });
  }

  async validateUser(phoneNumber): Promise<any> {
    const user = await this.getUser(phoneNumber);
    if (!user) return null;
    if (!user) {
      return new NotAcceptableException('could not find the user');
    }
    if (user) {
      return user;
    }
    return null;
  }

  async signIn(signInDto: LoginUserDto) {
    const { phoneNumber } = signInDto;

    const user = await this.getUser(phoneNumber);

    if (!user) {
      return new UnauthorizedException('Invalid username or password');
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

  async createAccessToken(payload: any) {
    return this.jwtService.signAsync({ ...payload }, { expiresIn: '15m' });
  }

  async createRefreshToken(payload: any) {
    const tokenId = uuid();
    return this.jwtService.signAsync(
      { ...payload, tokenId: tokenId },
      { expiresIn: '1d' },
    );
  }
}
