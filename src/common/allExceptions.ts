import {
 ExceptionFilter,
 Catch,
 ArgumentsHost,
} from '@nestjs/common';
import { getErrorStatus, responseError } from './responseTypes';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
 catch(exception: unknown, host: ArgumentsHost) {
   const ctx = host.switchToHttp();
   const response = ctx.getResponse();

   console.error('ERROR:', exception)

   const status = getErrorStatus(exception);

   response.status(status).json(responseError(exception));
 }
}