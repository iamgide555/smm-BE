import { CallHandler, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable, map } from 'rxjs';

@Injectable()
export class CustomResponseInterceptor implements NestInterceptor {
  intercept(context: any, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data: any) => {
        if (data?.status >= 400) return { ...data?.response, isSuccess: false };
        return {
          isSuccess: true,
          statusCode: 200,
          data: data,
        };
      }),
    );
  }
}
