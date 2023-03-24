export interface IProductCategory {
  id: string;
  name: string;
}

export interface IInfoProduct {
  name: string;
  price: number;
}

export interface IProduct {
  url: string;
  name: string;
  price: number;
  categories: IProductCategory[];
  variants?: IInfoProduct[];
}
