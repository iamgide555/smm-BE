import {
  Body,
  Controller,
  Post,
  Get,
  UseGuards,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { UserDto } from './dto/user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { CustomResponseInterceptor } from 'src/common/response/custom-response.interceptor';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { LocalAuthGuard } from './guards/local-auth.guard';

@ApiTags('Auth')
@ApiBearerAuth('defaultBearerAuth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  @ApiOperation({ summary: 'Sign up', description: 'Sign up method' })
  @ApiResponse({ status: 201, description: 'User successfully inserted' })
  @UsePipes(new ValidationPipe())
  @UseInterceptors(CustomResponseInterceptor)
  public async createUser(@Body() userInfo: UserDto) {
    const result = await this.authService.createUser(userInfo);
    return result;
  }

  @Post('login')
  @UseGuards(LocalAuthGuard)
  @ApiOperation({ summary: 'Login', description: 'Login method' })
  @ApiResponse({ status: 201, description: 'User successfully login' })
  @UseInterceptors(CustomResponseInterceptor)
  public async login(@Body() loginInfo: LoginUserDto) {
    return this.authService.signIn(loginInfo);
  }

  @Get('test')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Login', description: 'Login method' })
  @ApiResponse({ status: 201, description: 'User successfully login' })
  @UseInterceptors(CustomResponseInterceptor)
  public async test() {
    return 'test';
  }
}
