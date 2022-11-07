import { requestAPI } from 'src/common/util/fetch';

const login = async (password: number | string) => {
  return await requestAPI().post('/api/login', { password });
};

const authApiList = {
  login,
};

export default authApiList;
