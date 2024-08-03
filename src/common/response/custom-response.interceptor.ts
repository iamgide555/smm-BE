import { CallHandler, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable, map } from 'rxjs';

@Injectable()
export class CustomResponseInterceptor implements NestInterceptor {
  intercept(context: any, next: CallHandler): Observable<any> {
    const method = context.args[0].method;
    return next.handle().pipe(
      map((data: any) => {
        if (data?.status >= 400) return data?.response;
        return {
          isSuccess: true,
          statusCode: method === 'POST' ? 201 : 200,
          data: data,
        };
      }),
    );
  }
}
