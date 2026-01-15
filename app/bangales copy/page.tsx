"use client";

import Navbar from "../jewellery/component/navbar";
import Image from "next/image";


import Footer from "../jewellery/component/footer_jewllery";
import ProductGrid from "../jewellery/component/ProductGrid";
import ShopCollectiondev from "../jewellery/component/shopcollection";
export default function Bangles() {

  return (
    <>

      <Navbar />
  
<ShopCollectiondev/>
   <div className="max-w-8xl mx-auto">
     <ProductGrid category="bangles" />

    </div>
 

<Footer/>
    </>
  );
}
