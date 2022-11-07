import axios from 'axios';
import { requestAPI } from 'src/common/util/fetch';

export const fetchPurchases = async (
  start: number,
  limit: number,
  ikeaId?: string
) => {
  const { data } = await axios.get(
    `http://localhost:8002/api/purchases?start=${start}&limit=${limit}&ikeaId=${ikeaId}`
  );
  return data;
};
