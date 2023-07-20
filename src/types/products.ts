export type ProductType = {
  id: number;
  colour: string;
  name: string;
  price: number;
  img: string;
};

export type BasketItemType = {
  product: ProductType;
  quantity: number;
}
