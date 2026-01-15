interface Product {
  id: number;
slug: string;
  name: string;
  image: string;
  oldPrice?: number;
  price: number;
  discount?: string;
  images?: string[];        // gallery images
  features?: string[];
  colors?: string[];        // optional
  description?: string;     // optional
  badge?: string; 
        category: string;       // optional badge like "New Arrival"
}

export const products: Product[] = [ 

  {
    id: 1,
    slug: "dimond-turkish-mala-207",
    name: "Elegant White & Gold Crystal Jewellery Set",
    image: "/jewllery/na-11.jpeg",
   category: "mala", // 👈
    price: 3999,
    discount: "New Arrival",
    images: [
      "/jewllery/na-11.jpeg",
   
      "/jewllery/na-13.jpeg"
    ],
  
    description: "This exquisite jewelry set exudes luxury and grace, featuring a dazzling gold-plated necklace, matching earrings, and a delicate maang tikka. Adorned with shimmering crystal stones and intricate detailing, each piece captures the perfect balance of tradition and modern elegance. The square-cut stones and fine craftsmanship add a royal charm, making it an ideal choice for weddings, festive events, and special occasions. Elevate your look with this timeless set that embodies sophistication and brilliance.",
  },
  {
    id: 2,
    slug: "turkish-pearl-choker-102",
    name: "Elegant Black & Gold Crystal Jewellery Set",
    image: "/jewllery/na-4.jpeg",
    
    price: 2999,
    discount: "New Arrival",
    images: [
      "/jewllery/na-4.jpeg",
      "/jewllery/na-5.jpeg",
     
    ], category: "necklace",

    description: "This stunning pair of gold-plated bangles showcases intricate craftsmanship and timeless elegance. Each bangle is adorned with radiant red stones, beautifully set in floral-inspired designs, surrounded by sparkling crystal accents. The rich gold finish enhances the regal charm, making these bangles perfect for weddings, festive occasions, or traditional celebrations. A luxurious addition to any jewelry collection, these bangles blend classic artistry with a touch of modern sophistication.",
  },
  {
    id: 3,
    slug: "gold-red-bangles",
    name: "Elegant Gold-Plated Bangles with Red Stone Embellishments",
    image: "/jewllery/ban-1.jpeg",
    price: 3999, images: [
      "/jewllery/ban-1.jpeg",
      "/jewllery/ban-2.jpeg",
   
    ], category: "bangles", // 👈
  discount: "New Arrival",
    badge: "New Arrival",
    description: "This stunning pair of gold-plated bangles showcases intricate craftsmanship and timeless elegance. Each bangle is adorned with radiant red stones, beautifully set in floral-inspired designs, surrounded by sparkling crystal accents. The rich gold finish enhances the regal charm, making these bangles perfect for weddings, festive occasions, or traditional celebrations. A luxurious addition to any jewelry collection, these bangles blend classic artistry with a touch of modern sophistication.",
  },

  {
    id: 5,
    slug: "black-gold-crystal-set",
    name: "Elegant Black & Gold Crystal Jewellery Set",
    image: "/jewllery/na-4.jpeg", images: [
          "/jewllery/na-4.jpeg",
      "/jewllery/na-5.jpeg",
    ], category: "necklace",
  discount: "New Arrival",
    price: 2999,
    badge: "New Arrival",
    description: "This exquisite jewelry set exudes luxury and grace, featuring a dazzling gold-plated necklace, matching earrings, and a delicate maang tikka. Adorned with shimmering crystal stones and intricate detailing, each piece captures the perfect balance of tradition and modern elegance. The square-cut stones and fine craftsmanship add a royal charm, making it an ideal choice for weddings, festive events, and special occasions. Elevate your look with this timeless set that embodies sophistication and brilliance.",
  },
  {
    id: 6,
    slug: "red-gold-set",
    name: "Radiant Red & Gold Jewellery Set",
    image: "/jewllery/na-15.jpeg",
    price: 3700, images: [
      "/jewllery/na-15.jpeg",
      "/jewllery/na-12.jpeg",
      
    ], category: "necklace",
 discount: "New Arrival",
    badge: "New Arrival",
    description: "This stunning red and gold jewellery set captures the essence of classic beauty and royal sophistication. Adorned with sparkling white stones and deep red gems, the set includes a graceful necklace paired with elegant earrings and a matching maang tikka. The intricate floral and geometric detailing adds a luxurious touch, making it a perfect choice for weddings, festive occasions, or special celebrations. Add a bold yet elegant charm to your look with this exquisite red jewellery set.",
  },
  {
    id: 7,
    slug: "green-white-mala",
    name: "Royal Green and White Beaded Mala Set",
    image: "/jewllery/na-8.jpeg",
    price: 3700,
    badge: "New Arrival", images: [
      "/jewllery/na-8.jpeg",
      "/jewllery/na-21.jpeg",
    ],category: "mala", // 👈
  discount: "New Arrival",
    description: "This stunning pair of gold-plated bangles showcases intricate craftsmanship and timeless elegance. Each bangle is adorned with radiant red stones, beautifully set in floral-inspired designs, surrounded by sparkling crystal accents. The rich gold finish enhances the regal charm, making these bangles perfect for weddings, festive occasions, or traditional celebrations. A luxurious addition to any jewelry collection, these bangles blend classic artistry with a touch of modern sophistication.",
  },
  {
    id: 8,
    slug: "pink-gold-mala",
    name: "Radiant Pink & Gold Mala Set",
    image: "/jewllery/na-20.jpeg",
    price: 3700,
    badge: "New Arrival", images: [
      "/jewllery/na-20.jpeg",
      "/jewllery/na-22.jpeg",
     
    ],category: "mala", // 👈
    discount: "New Arrival",
    description: "This exquisite pink jewellery set embodies elegance and charm with its soft pastel tones and dazzling gold detailing. The set features a delicately crafted necklace paired with matching earrings, adorned with shimmering pink stones and sparkling white crystals. Its floral-inspired design adds a feminine and refined touch, making it perfect for weddings, parties, or festive celebrations. Radiate sophistication and grace with this stunning pink jewellery set that complements both traditional and modern outfits.",
  },  {
    id: 4,
    slug: "Pink-gold-crystal-set",
    name: "Elegant Pink & Gold Crystal Jewellery Set",
    image: "/jewllery/na-23.jpeg",
    price: 3999,
    badge: "New Arrival", images: [
      "/jewllery/na-23.jpeg",
      "/jewllery/na-17.jpeg",
   
    ], category: "necklace",
    discount: "New Arrival",
    description: "This exquisite jewelry set exudes luxury and grace, featuring a dazzling gold-plated necklace, matching earrings, and a delicate maang tikka. Adorned with shimmering crystal stones and intricate detailing, each piece captures the perfect balance of tradition and modern elegance. The square-cut stones and fine craftsmanship add a royal charm, making it an ideal choice for weddings, festive events, and special occasions. Elevate your look with this timeless set that embodies sophistication and brilliance.",
  },
];
