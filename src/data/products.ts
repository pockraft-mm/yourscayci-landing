export type Product = {
  name: string;
  tone: string;
  description: string;
  images: string[];
  priceNote?: string;
  prices: { group: 'Free Size' | 'Plus Size'; label: string; fit: string; price: string }[];
};

export const products: Product[] = [
  {
    name: 'Skin Color',
    tone: 'Skin',
    description: '',
    images: ['skincolor-1.png', 'product-stocking-skincolor-2.png', 'product-stocking-skincolor-3.png'],
    prices: [
      { group: 'Free Size', label: 'BKK Fabric', fit: '80–135 lb', price: '23,500 Ks' },
      { group: 'Free Size', label: 'Silicon Fabric', fit: '80–135 lb', price: '25,000 Ks' },
      { group: 'Plus Size', label: 'Size L', fit: '140–165 lb', price: '27,000 Ks' },
      { group: 'Plus Size', label: 'Size XL', fit: '165–200 lb', price: '27,000 Ks' },
    ],
  },
  {
    name: 'Choco Brown',
    tone: 'Brown',
    description: '',
    images: ['chocobrown-1.png', 'product-stocking-chocobrown-2.png', 'product-stocking-chocobrown-3.png', 'product-stocking-chocobrown-4.png', 'product-stocking-chocobrown-5.png'],
    prices: [
      { group: 'Free Size', label: 'Free Size', fit: '80–135 lb', price: '25,000 Ks' },
      { group: 'Plus Size', label: 'Size L', fit: '140–165 lb', price: '30,000 Ks' },
      { group: 'Plus Size', label: 'Size XL', fit: '165–200 lb', price: '33,500 Ks' },
    ],
  },
  {
    name: 'Magic Black',
    tone: 'Black',
    description: '',
    images: ['magicblack-1.jpg', 'product-stocking-magicblack-2.jpg', 'product-stocking-magicblack-3.png', 'product-stocking-magicblack-4.png'],
    prices: [
      { group: 'Free Size', label: 'Free Size', fit: '80–135 lb', price: '23,500 Ks' },
      { group: 'Plus Size', label: 'Size L', fit: '140–165 lb', price: '30,000 Ks' },
      { group: 'Plus Size', label: 'Size XL', fit: '165–200 lb', price: '30,000 Ks' },
    ],
  },
];

export const productBySlug = (slug: string) => products.find((product) => product.tone.toLowerCase() === slug.toLowerCase());
