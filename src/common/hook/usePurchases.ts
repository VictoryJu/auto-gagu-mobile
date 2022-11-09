import { useQuery } from '@tanstack/react-query';
import { recipe } from 'src/common/service/api';

const useRecipe = () => {
  const usePurchases = (start: number, limit: number, ikeaId?: string) => {
    return useQuery(
      ['purchases', start, ikeaId],
      async () => await recipe.fetchPurchases(start, limit, ikeaId),
      {
        staleTime: 60 * 1000,
        cacheTime: 60 * 2 * 1000,
        refetchOnWindowFocus: false,
      }
    );
  };
  return {
    usePurchases,
  };
};

export default useRecipe;
