import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const GetUser = createParamDecorator(
  (data, req: ExecutionContext) => {
   console.log('REQUEST', req.switchToHttp().getRequest().user)
    return req.switchToHttp().getRequest().user;
  },
);
