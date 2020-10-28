import { User } from './../types/user';
export const publicUserData = ({
  password,
  salt,
  ...restData
}: User): Omit<User, 'password' | 'salt'> => {
  return {
    ...restData,
  };
};
