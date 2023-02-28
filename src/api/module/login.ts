import type { Result } from '../model';
import { request } from '/@/utils/http/axios';

enum Api {
  login = '/login',
}

/**
 * @description: Get user menu based on id
 */

export const getMenuList = () => {
  return request.get<Result<{}>>({ url: Api.login });
};
