export interface IDataProduct {
  categoryId: number | string;
  subcategoryId: number | string;
  name: string;
  desc: string;
  menual: string;
  discount: number | string;
  price: number | string;
  isBonus: boolean;
  priceForUser: number | string | null;
  src: string;
}
