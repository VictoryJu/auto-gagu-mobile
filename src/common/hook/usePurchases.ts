import { useQuery } from '@tanstack/react-query';
import { fetchPurchases } from 'src/service/api';
import { requestAPI } from '../util/fetch';

export const usePurchases = (start: number, limit: number, ikeaId?: string) => {
  return useQuery(
    ['purchases'],
    async () => await fetchPurchases(start, limit, ikeaId)
  );
};
