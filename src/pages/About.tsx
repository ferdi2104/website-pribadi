import { MapPin, Phone, Mail, Clock, Users, Award, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";

export default function About() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Pesan Anda telah terkirim! Kami akan segera menghubungi Anda.");
  };

  const stats = [
    { icon: Users, value: "10,000+", label: "Pelanggan Puas" },
    { icon: Award, value: "5 Tahun", label: "Pengalaman" },
    { icon: Heart, value: "50+", label: "Menu Spesial" },
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <Navbar cartItemCount={0} />

      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://mgx-backend-cdn.metadl.com/generate/images/962471/2026-02-10/738c3a99-1030-4b5e-b3a7-f0bde2413da3.png')`,
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Tentang Kami</h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Mengenal lebih dekat WarungKita, tempat di mana cita rasa autentik Indonesia bertemu dengan pelayanan terbaik
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#FFF5F0] rounded-full mb-4">
                  <stat.icon className="h-8 w-8 text-[#FF6B35]" />
                </div>
                <h3 className="text-3xl font-bold text-[#2D3436] mb-1">{stat.value}</h3>
                <p className="text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#2D3436] mb-4">Cerita Kami</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  <span className="text-[#FF6B35] font-semibold">WarungKita</span> didirikan pada tahun 2021 dengan satu misi sederhana: menyajikan makanan Indonesia yang lezat dengan bahan-bahan segar dan resep turun-temurun.
                </p>
                <p>
                  Berawal dari dapur kecil di Jakarta, kami terus berkembang berkat dukungan pelanggan setia yang mencintai masakan kami. Setiap hidangan yang kami sajikan dibuat dengan cinta dan dedikasi tinggi.
                </p>
                <p>
                  Kami percaya bahwa makanan bukan hanya tentang rasa, tetapi juga tentang pengalaman dan kenangan. Itulah mengapa kami selalu berusaha memberikan yang terbaik dalam setiap porsi.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://mgx-backend-cdn.metadl.com/generate/images/962471/2026-02-10/c3d0c59c-9631-40f5-9d5e-01a1cd3dcf78.png"
                alt="Our Story"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-[#FF6B35] text-white p-6 rounded-xl shadow-lg">
                <p className="text-2xl font-bold">Sejak 2021</p>
                <p className="text-orange-100">Melayani dengan sepenuh hati</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#2D3436] mb-2">Hubungi Kami</h2>
            <p className="text-gray-500">Ada pertanyaan? Jangan ragu untuk menghubungi kami</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-4 bg-[#FAFAFA] rounded-xl">
                <div className="p-3 bg-[#FF6B35] rounded-full">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#2D3436] mb-1">Alamat</h3>
                  <p className="text-gray-600">Jl. Makan Enak No. 123</p>
                  <p className="text-gray-600">Jakarta Selatan, 12345</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-[#FAFAFA] rounded-xl">
                <div className="p-3 bg-[#00B894] rounded-full">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#2D3436] mb-1">Telepon</h3>
                  <p className="text-gray-600">+62 812-3456-7890</p>
                  <p className="text-gray-600">+62 21-1234-5678</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-[#FAFAFA] rounded-xl">
                <div className="p-3 bg-[#FDCB6E] rounded-full">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#2D3436] mb-1">Email</h3>
                  <p className="text-gray-600">info@warungkita.com</p>
                  <p className="text-gray-600">order@warungkita.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-[#FAFAFA] rounded-xl">
                <div className="p-3 bg-[#6C5CE7] rounded-full">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#2D3436] mb-1">Jam Operasional</h3>
                  <p className="text-gray-600">Senin - Jumat: 08:00 - 21:00</p>
                  <p className="text-gray-600">Sabtu - Minggu: 09:00 - 22:00</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-[#FAFAFA] p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-[#2D3436] mb-6">Kirim Pesan</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-gray-600 mb-1 block">Nama</label>
                    <Input placeholder="Nama Anda" required />
                  </div>
                  <div>
                    <label className="text-sm text-gray-600 mb-1 block">Email</label>
                    <Input type="email" placeholder="email@contoh.com" required />
                  </div>
                </div>
                <div>
                  <label className="text-sm text-gray-600 mb-1 block">No. Telepon</label>
                  <Input placeholder="+62 812-xxxx-xxxx" />
                </div>
                <div>
                  <label className="text-sm text-gray-600 mb-1 block">Pesan</label>
                  <Textarea
                    placeholder="Tulis pesan Anda di sini..."
                    rows={4}
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-[#FF6B35] hover:bg-[#e55a2b] text-white"
                >
                  Kirim Pesan
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}