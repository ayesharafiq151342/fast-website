export interface Product {
  id: number;
  slug: string;
  name: string;
  image: string;
  category: string;
  price: number;
  oldPrice?: number;
  discount?: string;
  outOfStock?: boolean;
  description?: string;
}
export const products: Product[] = [
  {
    id: 1,
    slug: "rajwarri-antique-gold-choker-set",
    name: "Rajwarri Antique Gold Choker Set",
    image: "/jewllery/BRIDALJEWELLERY-1.webp",
    category: "BRIDAL JEWELLERY",
    price: 4999,
    oldPrice: 6000,
    discount: "Sale",
    description:
      "This exquisite jewelry set exudes luxury and grace, featuring a dazzling gold-plated necklace, matching earrings, and a delicate maang tikka. Adorned with shimmering crystal stones and intricate detailing, each piece captures the perfect balance of tradition and modern elegance.",
  },
  {
    id: 2,
    slug: "black-gold-crystal-set",
    name: "Elegant Black & Gold Crystal Jewellery Set",
    image: "/jewllery/acc.png",
    category: "ACCESSORIES",
    price: 2999,
    oldPrice: 3500,
    discount: "Sale",
    description:
      "Timeless elegance in black and gold. Perfect for any occasion, this set features stunning crystals that catch the light beautifully.",
  },
  {
    id: 3,
    slug: "gold-plated-bangles-red-stone",
    name: "Elegant Gold-Plated Bangles with Red Stone Embellishment",
    image: "/jewllery/acc-4.png",
    category: "ACCESSORIES",
    price: 3500,
    oldPrice: 4000,
    discount: "Sale",
    description:
      "This exquisite pink jewellery set embodies elegance and charm with its soft pastel tones and dazzling gold detailing. The set features a delicately crafted necklace paired with matching earrings, adorned with shimmering pink stones and sparkling white crystals. Its floral-inspired design adds a feminine and refined touch, making it perfect for weddings, parties, or festive celebrations. Radiate sophistication and grace with this stunning pink jewellery set that complements both traditional and modern outfits.",
  },
  {
    id: 4,
    slug: "emerald-pearl-choker-set",
    name: "Emerald Grace Pearl Choker & Earring Set",
    image: "/jewllery/CHOCKER.jpeg",
    category: "CHOKER",
    price: 4500,
    oldPrice: 5000,
    discount: "Sale",
    description:
      "Elegant pearl choker with matching earrings. Available in multiple colors for versatile styling.",
  },
 
  {
    id: 6,
    slug: "gemstone-statement-rings",
    name: "Luxury Gemstone Statement Rings",
    image: "/jewllery/sr.jpeg",
    category: "RINGS",
    price: 1950,
    oldPrice: 2500,
    discount: "Sale",
    description:
      "Sparkling statement rings with gemstones. Available in more colors.",
  },
  {
    id: 7,
    slug: "blue-crystal-necklace-set",
    name: "Oceanic Elegance Blue Crystal Necklace & Earring Set",
    image: "/jewllery/n-2-2.jpeg",
    category: "NECKLACE",
    price: 4750,
    oldPrice: 5500,
    discount: "Sale",
    description:
      "Beautiful blue crystal necklace and earring set. Perfect for weddings or parties. Available in multiple colors.",
  },
 
  // ======== New Products ========
  {
    id: 9,
    slug: "crimson-grace-set",
    name: "Crimson Grace Set",
    image: "/jewllery/acc-9.png",
    category: "ACCESSORIES",
    price: 2999,
    oldPrice: 3500,
    discount: "Sale",
    description:
      "Radiant Red & Gold Jewellery Set – A Symbol of Passion and Elegance",
  },
  {
    id: 10,
    slug: "royal-green-mala-set",
    name: "Royal Green Mala Set – A Fusion of Elegance and Tradition",
    image: "/jewllery/acc-10.png",
    category: "ACCESSORIES",
    price: 4000,
    oldPrice: 4500,
    discount: "Sale",
    description:
      "Royal Green Mala Set – A Fusion of Elegance and Tradition",
  },

  {
    id: 12,
    slug: "gold-swan-bracelet-ring-set",
    name: "Elegant Gold Swan Bracelet & Matching Ring Set",
    image: "/jewllery/ban-4.webp",
    category: "BANGLES",
    price: 1299,
    oldPrice: 1799,
    discount: "Sale",
    description:
      "✨Elegant Gold Swan Bracelet & Matching Ring Set✨",
  },
  {
    id: 13,
    slug: "gold-clover-locket-pendant-set",
    name: "Gold Clover Locket Pendant Set",
    image: "/jewllery/cha--1.webp",
    category: "CHAINS",
    price: 599,
    oldPrice: 899,
    discount: "Sale",
    description:
      "✨Gold Clover Locket Pendant Set – Stylish & Modern Jewelry✨",
  }, {
    id: 8,
    slug: "artificial-gold-necklace-set",
    name: "Artificial Gold Necklace Set",
    image: "/jewllery/acc-2.png",
    category: "ACCESSORIES",
    price: 2999,
    oldPrice: 3500,
    discount: "Sale",
    description:
      "Radiant gold-plated bridal jewelry set with sparkling stones. Adds glamour and elegance to any outfit.",
  },
  {
    id: 14,
    slug: "golden-bloom-sparkle-set",
    name: "Golden Bloom Sparkle Bracelet & Ring Set",
    image: "/jewllery/ban-5.webp",
    category: "BANGLES",
    price: 1299,
    oldPrice: 1799,
    discount: "Sale",
    description:
      "✨Golden Bloom Sparkle Bracelet & Ring Set✨",
  },
  {
    id: 15,
    slug: "golden-floral-stone-set",
    name: "Golden Floral Stone Bracelet with Matching Ring",
    image: "/jewllery/ban-5.webp",
    category: "BANGLES",
    price: 1299,
    oldPrice: 1799,
    discount: "Out of stock",
    description:
      "✨Golden Floral Stone Bracelet with Matching Ring – Luxury Jewelry Set for Women✨",
  },
  {
    id: 16,
    slug: "pearl-gold-earring-set",
    name: "Elegant pearl and gold earrings, perfect for weddings or festive occasions.",
    image: "/jewllery/sr.jpeg",
    category: "EARRINGS",
    price: 2200,
    oldPrice: 2800,
    discount: "Sale",
    description:
      "",
  }, {
    id: 17,
    slug: "black-gold-crystal-set",
    name: "Elegant Black & Gold Crystal Jewellery Set",
    image: "/jewllery/acc.png",
    category: "ACCESSORIES",
    price: 2999,
    oldPrice: 3500,
    discount: "Sale",
    description:
      "Elegant Black & Gold Crystal Jewellery Set – Timeless Grace for Every Occasion",
  },
  
  {
    id: 19,
    slug: "blush-royale-set",
    name: "Graceful Pink Stone Jewellery Set – Elegant Beauty with a Touch of Glamour",
    image: "/jewllery/acc-3.png",
    category: "ACCESSORIES",
    price: 2999,
    oldPrice: 3500,
    discount: "Sale",
    description:
      "Elegant Black & Gold Crystal Jewellery Set – Timeless Grace for Every Occasion",
  },
  
 
  
  
  {
    id: 24,
    slug: "royal-gold-square-pendant-earring-set",
    name: "Royal Gold Square Pendant & Earring Set",
    image: "/jewllery/royal-square-pendant.png",
    category: "Stud",
    price: 1399,
    oldPrice: 1999,
    discount: "Sale",
    description:
      "Royal Gold Square Pendant & Earring Set – Intricate Floral Carved Design✨Design & Style: Square-shaped pendant and earrings"


  }, {
    id: 25,
    slug: "royal-red-rose-bridal-bangles",
    name: "Royal Red Rose Bridal Bangles",
    image: "/jewllery/ban-3.jpeg",
    category: "BANGLES",
    price: 4500,
    oldPrice: 5000,
    discount: "Sale",
    description:
      "Royal Red Rose Bridal Bangles – Elegant Handcrafted Beauty (Available in More Colours)",
  },

{
    id: 31,
    slug: "elegant-gold-designer-bracelet-set-pack-of-3",
    name: "Elegant Gold Designer Bracelet Set – Pack of 3",
    image: "/jewllery/bar-1.webp",
    category: "BRACELET",
    price: 2399,
    oldPrice: 3099,
    discount: "Sale",
    description:
      "Elegant Gold Designer Bracelet Set – Pack of 3 ✨ Perfect for gifting or personal use, combining luxury with style.",
  },
 {
    id: 37,
    slug: "black-gold-crystal-set",
    name: "Elegant Black & Gold Crystal Jewellery Set – Timeless Grace for Every Occasion",
    image: "/jewllery/acc.png",
    category: "ACCESSORIES",
    price: 2999,
    oldPrice: 3500,
    discount: "Sale",
    description:
      "Timeless elegance in black and gold. Perfect for any occasion, this set features stunning crystals that catch the light beautifully.",
  },
 


  {
    id: 42,
    slug: "royal-red-pearl-mala-set",
    name: "Royal Red & Pearl Mala Set – Traditional Elegance Redefined (Available in More Colours)💛",
    image: "/jewllery/maaaaaaaa.jpeg",
    category: "MALA",
    price: 6500,
    oldPrice: 7000,
    discount: "Sale",
    description:
      "Royal Red & Pearl Mala Set – Traditional Elegance Redefined (Available in More Colours)",
  },
  {
    id: 43,
    slug: "sparkling-stone-necklace-bracelet-set",
    name: "Sparkling Stone-Studded Necklace & Bracelet Set",
    image: "/jewllery/maka.webp",
    category: "MALA",
    price: 2199,
    oldPrice: 3999,
    discount: "Sale",
    description:
      "Sparkling Stone-Studded Necklace & Bracelet Set – Elegant and Shimmering",
  },
  {
    id: 44,
    slug: "sparkling-gold-stone-necklace-bracelet-set",
    name: " Sparkling Stone-Studded Necklace & Bracelet Set ",
    image: "/jewllery/malaa.webp",
    category: "MALA",
    price: 2199,
    oldPrice: 3999,
    discount: "Sale",
    description:
      "Sparkling Gold Stone-Studded Necklace & Bracelet Set – Timeless Luxury",
  },{
  id: 45,
  slug: "black-gold-crystal-jewellery-set",
  name: "Elegant Black & Gold Crystal Jewellery Set – Timeless Grace for Every Occasion",
  image: "/jewllery/black-gold-crystal-set.png",
  category: "MEHNDI JEWELLERY",
  price: 2999,
  oldPrice: 3500,
  discount: "Sale",
  description:
    "Elegant Black & Gold Crystal Jewellery Set – Timeless Grace for Every Occasion. A perfect blend of luxury and sophistication for formal and festive wear.",
},

{
  id: 48,
  slug: "royal-gold-square-pendant-earring-set",
  name: "Royal Gold Square Pendant & Earring Set – Intricate Floral Carved Design",
  image: "/jewllery/royal-square-pendant.png",
  category: "PENDANTS",
  price: 1399,
  oldPrice: 1999,
  discount: "Sale",
  description:
    "Royal Gold Square Pendant & Earring Set featuring intricate floral carved detailing. A regal piece blending tradition with elegance.",
},
{
  id: 49,
  slug: "luxury-gemstone-statement-rings",
  name: "Luxury Gemstone Statement Rings – Sparkling Elegance",
  image: "/jewllery/ban-4.webp",
  category: "RINGS",
  price: 1950,
  oldPrice: 2500,
  discount: "Sale",
  description:
    "Luxury Gemstone Statement Rings designed for bold elegance. Sparkling stones with a premium finish, available in more colours.",
},

{
  id: 50,
  slug: "elegant-gold-swan-bracelet-ring-set",
  name: "Elegant Gold Swan Bracelet & Matching Ring Set",
   image: "/jewllery/ban-4.webp",
  category: "RINGS",
  price: 1299,
  oldPrice: 1799,
  discount: "Sale",
  description:
    "Elegant Gold Swan Bracelet & Matching Ring Set featuring a graceful swan-inspired design, perfect for classy occasions.",
},

{
  id: 51,
  slug: "golden-bloom-sparkle-bracelet-ring-set",
  name: "Golden Bloom Sparkle Bracelet & Ring Set",
 image: "/jewllery/ban-4.webp",
  category: "RINGS",
  price: 1299,
  oldPrice: 1799,
  discount: "Sale",
  description:
    "Golden Bloom Sparkle Bracelet & Ring Set with floral detailing and shimmering stones for a luxurious feminine look.",
},

{
  id: 52,
  slug: "golden-floral-stone-bracelet-ring-set",
  name: "Golden Floral Stone Bracelet with Matching Ring – Luxury Jewelry Set for Women",
 image: "/jewllery/ban-4.webp",
  category: "RINGS",
  price: 1299,
  oldPrice: 1799,
  discount: "Sale",
  outOfStock: true,
  description:
    "Golden Floral Stone Bracelet with Matching Ring. A luxury jewelry set crafted for elegance and timeless beauty.",
},

{
  id: 53,
  slug: "luxury-gold-wheel-medallion-bracelet-ring-pair",
  name: "Luxury Gold Wheel-Medallion Bracelet and Ring Pair",
 image: "/jewllery/ban-4.webp",
  category: "RINGS",
  price: 1299,
  oldPrice: 1799,
  discount: "Sale",
  description:
    "Luxury Gold Wheel-Medallion Bracelet and Ring Pair with a bold circular design, ideal for modern statement styling.",
},

{
  id: 54,
  slug: "royal-gold-art-deco-bracelet-ring-set",
  name: "Royal Gold Art-Deco Bracelet & Matching Ring Set",
  image: "/jewllery/art-deco-set.png",
  category: "RINGS",
  price: 1299,
  oldPrice: 1799,
  discount: "Sale",
  description:
    "Royal Gold Art-Deco Bracelet & Matching Ring Set inspired by classic art-deco patterns, offering a rich and royal finish.",
},

 {
    id: 24,
    slug: "royal-gold-square-pendant-earring-set",
    name: "Royal Gold Square Pendant & Earring Set",
    image: "/jewllery/royal-square-pendant.png",
    category: "tups",
    price: 1399,
    oldPrice: 1999,
    discount: "Sale",
    description:
      "Royal Gold Square Pendant & Earring Set – Intricate Floral Carved Design✨Design & Style: Square-shaped pendant and earrings"


  },
];  