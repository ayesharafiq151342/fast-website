import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faPinterestP,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
   <><div className="w-full text-center px-4 md:px-12 py-16 bg-white">
     <h1 className="font-serif text-3xl mb-10 md:text-4xl text-gray-900 ">
 ZAK Jewellery
 <p className="max-w-4xl mx-auto mt-10 text-gray-600 leading-relaxed text-sm md:text-base">
ZAK Jewellery is a Pakistani artificial jewellery brand offering bridal jewellery, bangles, earrings, and fashion accessories for weddings, formal occasions, and everyday wear.
  </p>
  </h1>  
<img src="/jewllery/payment.avif" alt="Logo 6" className="max-w-32  m-auto h-auto scale-125" />
</div>
    <footer className="bg-black text-gray-300 py-16">   <div className="container mx-auto px-6 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">

        {/* Policies */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Policies</h3>
          <ul className="space-y-2">
            <li>Privacy Policy</li>
            <li>Exchange Policy</li>
            <li>Refund Policy</li>
            <li>Shipping Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>

        {/* Top Categories */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">
            Top Categories
          </h3>
          <ul className="space-y-2 uppercase text-sm">
            <li>Bridal Jewelry</li>
            <li>Bangles Design</li>
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <a className="p-3 bg-gray-800 rounded-full hover:bg-[#1877F2] transition">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a className="p-3 bg-gray-800 rounded-full hover:bg-[#E4405F] transition">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a className="p-3 bg-gray-800 rounded-full hover:bg-[#E60023] transition">
              <FontAwesomeIcon icon={faPinterestP} />
            </a>
          </div>
        </div>

      </div>
    </footer></>
  );
}
