import { CallHandler, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
export declare class CustomResponseInterceptor implements NestInterceptor {
    intercept(context: any, next: CallHandler): Observable<any>;
}
