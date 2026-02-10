import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Star, Minus, Plus, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard, { Product } from "@/components/ProductCard";
import { products } from "@/lib/data";
import { toast } from "sonner";

export default function ProductDetail() {
  const { id } = useParams();
  const [cart, setCart] = useState<{ product: Product; quantity: number }[]>([]);
  const [quantity, setQuantity] = useState(1);

  const product = products.find((p) => p.id === Number(id));
  const relatedProducts = products
    .filter((p) => p.category === product?.category && p.id !== product?.id)
    .slice(0, 4);

  const addToCart = (product: Product, qty: number = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + qty }
            : item
        );
      }
      return [...prev, { product, quantity: qty }];
    });
    toast.success(`${qty}x ${product.name} ditambahkan ke keranjang!`);
  };

  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  if (!product) {
    return (
      <div className="min-h-screen bg-[#FAFAFA]">
        <Navbar cartItemCount={cartItemCount} />
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold text-gray-500">Produk tidak ditemukan</h1>
          <Link to="/menu">
            <Button className="mt-4 bg-[#FF6B35] hover:bg-[#e55a2b]">
              Kembali ke Menu
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const currentPrice = product.isPromo && product.promoPrice ? product.promoPrice : product.price;

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
          Kembali ke Menu
        </Link>

        {/* Product Detail */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Image */}
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-96 md:h-full object-cover"
              />
              {product.isPromo && (
                <Badge className="absolute top-4 left-4 bg-[#FDCB6E] text-[#2D3436] text-lg px-4 py-1">
                  PROMO
                </Badge>
              )}
            </div>

            {/* Info */}
            <div className="p-8">
              <Badge className="bg-[#00B894] text-white mb-4">{product.category}</Badge>
              <h1 className="text-3xl font-bold text-[#2D3436] mb-2">{product.name}</h1>
              
              <div className="flex items-center mb-4">
                <Star className="h-5 w-5 fill-[#FDCB6E] text-[#FDCB6E]" />
                <span className="ml-1 text-gray-600 font-medium">{product.rating}</span>
                <span className="ml-2 text-gray-400">• 100+ terjual</span>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>

              {/* Price */}
              <div className="mb-6">
                {product.isPromo && product.promoPrice ? (
                  <div>
                    <span className="text-lg text-gray-400 line-through">
                      {formatPrice(product.price)}
                    </span>
                    <p className="text-3xl font-bold text-[#FF6B35]">
                      {formatPrice(product.promoPrice)}
                    </p>
                  </div>
                ) : (
                  <p className="text-3xl font-bold text-[#FF6B35]">
                    {formatPrice(product.price)}
                  </p>
                )}
              </div>

              {/* Quantity */}
              <div className="flex items-center gap-4 mb-6">
                <span className="text-gray-600">Jumlah:</span>
                <div className="flex items-center border rounded-lg">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={quantity <= 1}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-12 text-center font-semibold">{quantity}</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Total */}
              <div className="flex items-center justify-between py-4 border-t border-b mb-6">
                <span className="text-gray-600">Total:</span>
                <span className="text-2xl font-bold text-[#2D3436]">
                  {formatPrice(currentPrice * quantity)}
                </span>
              </div>

              {/* Add to Cart Button */}
              <Button
                size="lg"
                className="w-full bg-[#FF6B35] hover:bg-[#e55a2b] text-white"
                onClick={() => addToCart(product, quantity)}
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                Tambah ke Keranjang
              </Button>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-16">
            <h2 className="text-2xl font-bold text-[#2D3436] mb-6">Menu Serupa</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} onAddToCart={addToCart} />
              ))}
            </div>
          </section>
        )}
      </div>

      <Footer />
    </div>
  );
}