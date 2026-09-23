export type Product = {
  name: string;
  tone: string;
  description: string;
  images: string[];
};

export const products: Product[] = [
  {
    name: 'Skin Tone',
    tone: 'Skin',
    description: 'Soft sheer beige',
    images: ['product-stocking-skincolor-1.png', 'product-stocking-skincolor-2.png', 'product-stocking-skincolor-3.png'],
  },
  {
    name: 'Choco Brown',
    tone: 'Brown',
    description: 'Warm sheer brown',
    images: ['product-stocking-chocobrown.png', 'product-stocking-chocobrown-2.png', 'product-stocking-chocobrown-3.png', 'product-stocking-chocobrown-4.png', 'product-stocking-chocobrown-5.png'],
  },
  {
    name: 'Magic Black',
    tone: 'Black',
    description: 'Polished black sheer',
    images: ['product-stocking-magicblack-1.jpg', 'product-stocking-magicblack-2.jpg', 'product-stocking-magicblack-3.png', 'product-stocking-magicblack-4.png'],
  },
];

export const productBySlug = (slug: string) => products.find((product) => product.tone.toLowerCase() === slug.toLowerCase());
