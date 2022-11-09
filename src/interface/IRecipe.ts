export interface IRecipe {
  list: IRecipeItem[];
  allCount: number;
}

export interface IRecipeModal {
  show: boolean;
  data: IRecipeItem | any;
}

export interface IRecipeItem {
  id: number;
  craeteTime: string;
  isProcStocks: number;
  paymentAmount: number;
  paymentCurrency: string;
  paymentTime: string;
  productsJson: string;
  status: string;
  storeName: string;
  tag: string;
  type: string;
}
