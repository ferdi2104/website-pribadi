import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#2D3436] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-3xl">🍽️</span>
              <span className="text-2xl font-bold text-[#FF6B35]">WarungKita</span>
            </div>
            <p className="text-gray-300 mb-4">
              Menyajikan makanan lezat dengan cita rasa autentik Indonesia. 
              Dibuat dengan bahan-bahan segar dan resep turun-temurun.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-[#FF6B35] transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#FF6B35] transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#FF6B35]">Hubungi Kami</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-[#FF6B35]" />
                <span className="text-gray-300">Jl. Makan Enak No. 123, Jakarta</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-[#FF6B35]" />
                <span className="text-gray-300">+62 812-3456-7890</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-[#FF6B35]" />
                <span className="text-gray-300">info@warungkita.com</span>
              </div>
            </div>
          </div>

          {/* Operating Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#FF6B35]">Jam Operasional</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-[#FF6B35]" />
                <div>
                  <p className="text-gray-300">Senin - Jumat</p>
                  <p className="text-white font-medium">08:00 - 21:00</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-[#FF6B35]" />
                <div>
                  <p className="text-gray-300">Sabtu - Minggu</p>
                  <p className="text-white font-medium">09:00 - 22:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2026 WarungKita. Semua hak dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
}