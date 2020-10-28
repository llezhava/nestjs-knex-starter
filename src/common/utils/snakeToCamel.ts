import snakeCaseKeys from 'snakecase-keys';
import camelcaseKeys from 'camelcase-keys';

export const toCamelcase = function<T>(obj): T {
  const result = camelcaseKeys(obj);
  return result as T;
};

export const toSnakeCase = function<T>(obj): T {
  const result = snakeCaseKeys(obj);
  return result as T;
};
