export type TProduct = {
  _id: string;
  name: string;
  price: number;
  imageUrl: string;
  category: string;
  description: string;
  inStock: boolean;
  createdAt?: string;
  updatedAt?: string;
};
export type TCartItem = {
  _id: string;
  name: string;
  price: number;
  imageUrl: string;
  category: string;
  description: string;
  inStock: boolean;
  createdAt?: string;
  updatedAt?: string;
};
