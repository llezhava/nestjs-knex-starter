import { HttpStatus, HttpException } from '@nestjs/common';

type SuccessType<T> = {
 success: true,
 code: number,
 data: T,
}

export function responseSuccess<T>(data: T, code = 200): SuccessType<T> {
 return {
  success: true,
  code,
  data,
 };
}

export function getErrorStatus(exception: any) {
 return exception instanceof HttpException
 ? exception.getStatus()
 : HttpStatus.INTERNAL_SERVER_ERROR;
}

export function responseError(exception: any) {
 const code = getErrorStatus(exception);

 const message = exception instanceof HttpException
 ? exception.message
 : 'Internal server error';

 const response = {
  success: false,
  code,
  message,
 }

 return response;
}