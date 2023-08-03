export type Product = {
  title: string;
  description: string;
  discountRate: number;
  coverImage: string;
  price: number;
};

export type CardProduct = Omit<Product, 'description'>;
