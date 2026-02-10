import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Trash2, Minus, Plus, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Product } from "@/components/ProductCard";
import { products } from "@/lib/data";
import { toast } from "sonner";

interface CartItem {
  product: Product;
  quantity: number;
}

export default function Cart() {
  // Initialize with some sample items for demo
  const [cart, setCart] = useState<CartItem[]>([
    { product: products[0], quantity: 2 },
    { product: products[1], quantity: 1 },
  ]);

  const updateQuantity = (productId: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCart((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (productId: number) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
    toast.success("Item dihapus dari keranjang");
  };

  const clearCart = () => {
    setCart([]);
    toast.success("Keranjang dikosongkan");
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const getItemPrice = (item: CartItem) => {
    const price = item.product.isPromo && item.product.promoPrice 
      ? item.product.promoPrice 
      : item.product.price;
    return price * item.quantity;
  };

  const subtotal = cart.reduce((sum, item) => sum + getItemPrice(item), 0);
  const deliveryFee = cart.length > 0 ? 10000 : 0;
  const total = subtotal + deliveryFee;
  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <Navbar cartItemCount={cartItemCount} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link
          to="/menu"
          className="inline-flex items-center text-[#FF6B35] hover:text-[#e55a2b] mb-6"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Lanjut Belanja
        </Link>

        <h1 className="text-3xl font-bold text-[#2D3436] mb-8">Keranjang Belanja</h1>

        {cart.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
            <ShoppingBag className="h-24 w-24 text-gray-300 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-gray-500 mb-2">
              Keranjang Kosong
            </h2>
            <p className="text-gray-400 mb-6">
              Belum ada item di keranjang. Yuk mulai belanja!
            </p>
            <Link to="/menu">
              <Button className="bg-[#FF6B35] hover:bg-[#e55a2b] text-white">
                Lihat Menu
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="p-4 bg-[#FF6B35] text-white flex justify-between items-center">
                  <span className="font-semibold">{cartItemCount} item di keranjang</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-white hover:bg-white/20"
                    onClick={clearCart}
                  >
                    <Trash2 className="h-4 w-4 mr-1" />
                    Kosongkan
                  </Button>
                </div>

                <div className="divide-y">
                  {cart.map((item) => (
                    <div key={item.product.id} className="p-4 flex gap-4">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-24 h-24 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <div>
                            <h3 className="font-semibold text-[#2D3436]">
                              {item.product.name}
                            </h3>
                            <p className="text-sm text-gray-500">{item.product.category}</p>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="text-gray-400 hover:text-red-500"
                            onClick={() => removeItem(item.product.id)}
                          >
                            <Trash2 className="h-5 w-5" />
                          </Button>
                        </div>

                        <div className="flex items-center justify-between mt-4">
                          <div className="flex items-center border rounded-lg">
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                              disabled={item.quantity <= 1}
                            >
                              <Minus className="h-4 w-4" />
                            </Button>
                            <span className="w-8 text-center font-semibold">
                              {item.quantity}
                            </span>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            >
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>
                          <p className="font-bold text-[#FF6B35]">
                            {formatPrice(getItemPrice(item))}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
                <h2 className="text-xl font-bold text-[#2D3436] mb-4">Ringkasan Pesanan</h2>

                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal ({cartItemCount} item)</span>
                    <span>{formatPrice(subtotal)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Ongkos Kirim</span>
                    <span>{formatPrice(deliveryFee)}</span>
                  </div>
                </div>

                <Separator className="my-4" />

                <div className="flex justify-between text-lg font-bold text-[#2D3436] mb-6">
                  <span>Total</span>
                  <span className="text-[#FF6B35]">{formatPrice(total)}</span>
                </div>

                {/* Promo Code */}
                <div className="mb-6">
                  <label className="text-sm text-gray-600 mb-2 block">Kode Promo</label>
                  <div className="flex gap-2">
                    <Input placeholder="Masukkan kode" />
                    <Button variant="outline" className="border-[#FF6B35] text-[#FF6B35]">
                      Pakai
                    </Button>
                  </div>
                </div>

                <Button
                  size="lg"
                  className="w-full bg-[#FF6B35] hover:bg-[#e55a2b] text-white"
                  onClick={() => toast.success("Pesanan sedang diproses!")}
                >
                  Checkout ({formatPrice(total)})
                </Button>

                <p className="text-xs text-gray-400 text-center mt-4">
                  Dengan melanjutkan, Anda menyetujui syarat dan ketentuan kami
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}