export interface IRecipe {
  list: IRecipeItem[];
  allCount: number;
}

export interface IRecipeModal {
  show: boolean;
  data: IRecipeItem | any;
}

export interface IRecipeDetail {
  name: string;
  description: string;
  href: string;
  quantity: string;
  decimalQuantity: number;
  priceUnitText: string;
  id: string;
  splitDelivery: boolean;
  image: {
    small: string;
    medium: string;
    large: string;
  };
  referencedItems: string;
  assemblyRequired: boolean;
  totalPrice: {
    formatted: string;
  };
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
