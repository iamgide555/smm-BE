import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from '../auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({ usernameField: 'phoneNumber', passwordField: 'phoneNumber' });
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async validate(phoneNumber: string, _password: string): Promise<any> {
    const user = await this.authService.validateUser(phoneNumber);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
