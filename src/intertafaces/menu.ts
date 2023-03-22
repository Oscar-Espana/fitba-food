export interface IProductCategory {
  id: string;
  name: string;
}

export interface IProduct {
  url: string;
  name: string;
  categories: IProductCategory[];
}
