import { requestAPI } from 'src/common/util/fetch';

const fetchPurchases = async (
  start: number,
  limit: number,
  ikeaId?: string | string[] | undefined
) => {
  return await requestAPI().get(
    `api/purchases?start=${start}&limit=${limit}&ikeaId=${ikeaId}`
  );
};

const receipeApiList = {
  fetchPurchases,
};

export default receipeApiList;
