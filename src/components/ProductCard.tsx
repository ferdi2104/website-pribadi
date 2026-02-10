import { Link } from "react-router-dom";
import { Star, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  rating: number;
  isPromo?: boolean;
  promoPrice?: number;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <Card className="group overflow-hidden bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <Link to={`/product/${product.id}`}>
        <div className="relative overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {product.isPromo && (
            <Badge className="absolute top-2 left-2 bg-[#FDCB6E] text-[#2D3436] font-semibold">
              PROMO
            </Badge>
          )}
          <Badge className="absolute top-2 right-2 bg-[#00B894] text-white">
            {product.category}
          </Badge>
        </div>
      </Link>
      <CardContent className="p-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-semibold text-lg text-[#2D3436] mb-1 hover:text-[#FF6B35] transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="text-gray-500 text-sm mb-2 line-clamp-2">{product.description}</p>
        
        <div className="flex items-center mb-3">
          <Star className="h-4 w-4 fill-[#FDCB6E] text-[#FDCB6E]" />
          <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
        </div>

        <div className="flex items-center justify-between">
          <div>
            {product.isPromo && product.promoPrice ? (
              <div>
                <span className="text-sm text-gray-400 line-through">
                  {formatPrice(product.price)}
                </span>
                <p className="text-lg font-bold text-[#FF6B35]">
                  {formatPrice(product.promoPrice)}
                </p>
              </div>
            ) : (
              <p className="text-lg font-bold text-[#FF6B35]">
                {formatPrice(product.price)}
              </p>
            )}
          </div>
          <Button
            size="sm"
            className="bg-[#FF6B35] hover:bg-[#e55a2b] text-white"
            onClick={(e) => {
              e.preventDefault();
              onAddToCart(product);
            }}
          >
            <Plus className="h-4 w-4 mr-1" />
            Tambah
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}