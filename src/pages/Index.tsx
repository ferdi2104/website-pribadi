import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Utensils, Truck, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard, { Product } from "@/components/ProductCard";
import { products } from "@/lib/data";
import { toast } from "sonner";

export default function Index() {
  const [cart, setCart] = useState<{ product: Product; quantity: number }[]>([]);

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
    toast.success(`${product.name} ditambahkan ke keranjang!`);
  };

  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const featuredProducts = products.filter((p) => p.isPromo).slice(0, 4);
  const popularProducts = products.sort((a, b) => b.rating - a.rating).slice(0, 4);

  const categories = [
    {
      name: "Nasi",
      image: "https://mgx-backend-cdn.metadl.com/generate/images/962471/2026-02-10/c3d0c59c-9631-40f5-9d5e-01a1cd3dcf78.png",
      description: "Aneka nasi dengan lauk lezat",
    },
    {
      name: "Mie",
      image: "https://mgx-backend-cdn.metadl.com/generate/images/962471/2026-02-10/bf5ead29-e27c-4a36-8944-f1a1417d3f94.png",
      description: "Mie goreng & kuah spesial",
    },
    {
      name: "Minuman",
      image: "https://mgx-backend-cdn.metadl.com/generate/images/962471/2026-02-10/a6e4c5ed-0df3-4a64-a154-c241b27c7df6.png",
      description: "Minuman segar & dingin",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <Navbar cartItemCount={cartItemCount} />

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://mgx-backend-cdn.metadl.com/generate/images/962471/2026-02-10/738c3a99-1030-4b5e-b3a7-f0bde2413da3.png')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
            Nikmati Kelezatan <span className="text-[#FF6B35]">Masakan Indonesia</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-200">
            Makanan lezat dengan cita rasa autentik, dibuat dari bahan segar pilihan
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/menu">
              <Button size="lg" className="bg-[#FF6B35] hover:bg-[#e55a2b] text-white px-8">
                Lihat Menu
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#2D3436]">
                Tentang Kami
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center space-x-4 p-6 rounded-xl bg-[#FFF5F0]">
              <div className="p-3 bg-[#FF6B35] rounded-full">
                <Utensils className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-[#2D3436]">Bahan Segar</h3>
                <p className="text-gray-500 text-sm">100% bahan berkualitas</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-6 rounded-xl bg-[#E8F8F5]">
              <div className="p-3 bg-[#00B894] rounded-full">
                <Truck className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-[#2D3436]">Pengiriman Cepat</h3>
                <p className="text-gray-500 text-sm">Antar dalam 30 menit</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-6 rounded-xl bg-[#FEF9E7]">
              <div className="p-3 bg-[#FDCB6E] rounded-full">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-[#2D3436]">Buka Setiap Hari</h3>
                <p className="text-gray-500 text-sm">08:00 - 22:00</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#2D3436] mb-2">Kategori Menu</h2>
            <p className="text-gray-500">Pilih kategori makanan favoritmu</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Link
                key={category.name}
                to={`/menu?category=${category.name}`}
                className="group relative overflow-hidden rounded-2xl h-64"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-1">{category.name}</h3>
                  <p className="text-gray-200">{category.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Promo Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-[#2D3436] mb-2">🔥 Promo Spesial</h2>
              <p className="text-gray-500">Jangan lewatkan penawaran menarik ini!</p>
            </div>
            <Link to="/menu">
              <Button variant="outline" className="border-[#FF6B35] text-[#FF6B35] hover:bg-[#FF6B35] hover:text-white">
                Lihat Semua
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
            ))}
          </div>
        </div>
      </section>

      {/* Popular Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-[#2D3436] mb-2">
                <Star className="inline h-8 w-8 text-[#FDCB6E] mr-2" />
                Menu Terpopuler
              </h2>
              <p className="text-gray-500">Favorit pelanggan kami</p>
            </div>
            <Link to="/menu">
              <Button variant="outline" className="border-[#FF6B35] text-[#FF6B35] hover:bg-[#FF6B35] hover:text-white">
                Lihat Semua
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularProducts.map((product) => (
              <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#FF6B35]">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Lapar? Pesan Sekarang!
          </h2>
          <p className="text-lg mb-8 text-orange-100">
            Nikmati makanan lezat tanpa harus keluar rumah
          </p>
          <Link to="/menu">
            <Button size="lg" className="bg-white text-[#FF6B35] hover:bg-gray-100 px-8">
              Pesan Sekarang
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}