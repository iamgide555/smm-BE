import { AuthService } from './auth.service';
import { UserDto } from './dto/user.dto';
import { LoginUserDto } from './dto/login-user.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    createUser(userInfo: UserDto): Promise<any>;
    login(loginInfo: LoginUserDto): Promise<import("@nestjs/common").UnauthorizedException | {
        access_token: string;
    }>;
    test(): Promise<string>;
}
