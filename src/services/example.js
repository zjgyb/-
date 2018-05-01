import request from '../utils/request';

export function query(params) {
  return request('./login/user');
}
