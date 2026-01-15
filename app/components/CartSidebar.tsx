"use client";

import { X } from "lucide-react";
import Image from "next/image";
import { useCart } from "../jewellery/component/CartContext";

export default function CartSidebar({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const { cart, removeFromCart } = useCart();

  return (
    <>
      {/* Overlay */}
      {open && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/40 z-40"
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-[350px] bg-white z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="font-semibold text-lg">Shopping Cart</h2>
          <X className="cursor-pointer" onClick={onClose} />
        </div>

        {cart.length === 0 ? (
          <p className="p-4 text-sm text-gray-500">Your cart is empty</p>
        ) : (
          <div className="p-4 space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="flex gap-3">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={60}
                  height={70}
                  className="object-cover rounded"
                />
                <div className="flex-1">
                  <p className="text-sm font-medium">{item.name}</p>
                  <p className="text-xs text-gray-500">
                    Qty: {item.qty}
                  </p>
                  <p className="text-sm font-semibold">
                    Rs.{(item.price * item.qty).toLocaleString()}
                  </p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 text-sm"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
