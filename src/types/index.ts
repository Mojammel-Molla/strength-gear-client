export type TProduct = {
  data: any;
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
  quantity: number;
  createdAt?: string;
  updatedAt?: string;
};

export type TBenefit = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  altText: string;
};
