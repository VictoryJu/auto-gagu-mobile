import { useQuery } from '@tanstack/react-query';
import { recipe } from 'src/common/service/api';

const useRecipe = () => {
  const usePurchases = (start: number, limit: number, ikeaId?: string) => {
    return useQuery(
      ['purchases'],
      async () => await recipe.fetchPurchases(start, limit, ikeaId)
    );
  };
  return {
    usePurchases,
  };
};

export default useRecipe;
