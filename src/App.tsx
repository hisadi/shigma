import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
  PlayCircle,
  Calendar,
  Users,
  CheckCircle,
  Leaf,
  Truck,
  MessageCircle,
  ChevronRight,
} from "lucide-react";

// --- Komponen Event Booking ---
const EventBooking = () => {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    phone: "",
  });
  const [quota, setQuota] = useState(25);

  useEffect(() => {
    if (formData.date) {
      setQuota(Math.floor(Math.random() * 15) + 1);
    }
  }, [formData.date]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message =
      `Halo Admin Shema Agri Mandiri, saya ingin booking tiket Event Tanam & Petik Sayur.%0A%0A` +
      `Nama: ${formData.name}%0A` +
      `Tanggal: ${formData.date}%0A` +
      `No. HP: ${formData.phone}`;

    window.open(`https://wa.me/6281234567890?text=${message}`, "_blank");
  };

  return (
    <section id="event" className="py-16 bg-lightBg border-b">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="lg:w-1/2 mb-6 lg:mb-0">
            <h2 className="text-3xl font-bold text-darkGreen mb-4">
              Event: Tanam & Petik Sayur
            </h2>
            <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
              <p className="text-gray-600 mb-4">
                Mari bergabung dalam pengalaman edukasi pertanian langsung di
                lahan kami di Lembang!
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <Calendar className="text-primary" size={20} />
                  <span>Setiap Akhir Pekan (Sabtu - Minggu)</span>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="text-primary" size={20} />
                  <span>Kebun Shema, Lembang, Jawa Barat</span>
                </li>
                <li className="flex items-center gap-3">
                  <Users className="text-primary" size={20} />
                  <span>Tiket: Rp 75.000 / Orang</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <form
              onSubmit={handleSubmit}
              className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100"
            >
              <h3 className="text-xl font-bold mb-6 text-center text-darkGreen">
                Formulir Booking Tiket
              </h3>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Nama Lengkap"
                  required
                  className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-primary/50 outline-none"
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
                <input
                  type="date"
                  required
                  className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-primary/50 outline-none"
                  onChange={(e) =>
                    setFormData({ ...formData, date: e.target.value })
                  }
                />
                {formData.date && (
                  <p className="text-sm text-orange-600 font-medium">
                    Sisa Kuota: {quota} Tiket
                  </p>
                )}
                <input
                  type="tel"
                  placeholder="Nomor WhatsApp (Contoh: 0812...)"
                  required
                  className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-primary/50 outline-none"
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
                <button
                  type="submit"
                  className="w-full bg-primary text-white py-4 rounded-lg font-bold hover:bg-darkGreen transition flex justify-center items-center gap-2"
                >
                  Booking Sekarang via WA <MessageCircle size={20} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Mencegah scroll saat menu terbuka
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  return (
    <div className="font-sans text-gray-800 bg-white antialiased">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white shadow-sm h-16 flex items-center">
        <div className="container mx-auto px-4 w-full flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="text-2xl font-bold text-primary z-50">
            Shema Agri Mandiri
          </a>

          {/* Hamburger Button (Mobile) */}
          <button
            className="lg:hidden text-gray-600 focus:outline-none z-50 relative"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center space-x-8 font-medium">
            <li>
              <a href="#home" className="hover:text-primary transition">
                Home
              </a>
            </li>
            <li>
              <a href="#products" className="hover:text-primary transition">
                Our Products
              </a>
            </li>
            <li>
              <a href="#event" className="hover:text-primary transition">
                Event
              </a>
            </li>
            <li>
              <a href="#process" className="hover:text-primary transition">
                Process
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="bg-primary text-white px-6 py-2 rounded-full hover:bg-darkGreen transition"
              >
                Get a Quote
              </a>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Overlay (Fullscreen / Sidebar) */}
        <div
          className={`fixed inset-0 bg-white z-40 flex flex-col justify-center items-center space-y-8 text-xl font-medium transition-transform duration-300 lg:hidden ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          style={{ top: "0", height: "100vh", width: "100vw" }}
        >
          <a
            href="#home"
            onClick={() => setIsMenuOpen(false)}
            className="hover:text-primary"
          >
            Home
          </a>
          <a
            href="#products"
            onClick={() => setIsMenuOpen(false)}
            className="hover:text-primary"
          >
            Our Products
          </a>
          <a
            href="#event"
            onClick={() => setIsMenuOpen(false)}
            className="hover:text-primary"
          >
            Event
          </a>
          <a
            href="#process"
            onClick={() => setIsMenuOpen(false)}
            className="hover:text-primary"
          >
            Process
          </a>
          <a
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
            className="bg-primary text-white px-8 py-3 rounded-full hover:bg-darkGreen transition"
          >
            Get a Quote
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="py-20 container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <img
              src="/asset/background.jpg"
              alt="Hero"
              className="rounded-2xl shadow-2xl w-full h-[300px] sm:h-[400px] object-cover"
            />
          </div>
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl font-bold text-darkGreen mb-6 leading-tight">
              From Local Fields to Global Tables
            </h1>
            <p className="text-base sm:text-lg text-gray-600 mb-8">
              Penyedia sayuran segar berkualitas tinggi dengan standar ekspor
              internasional langsung dari petani terbaik.
            </p>
            <a
              href="#products"
              className="inline-flex items-center bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-darkGreen transition"
            >
              Lihat Produk <ChevronRight className="ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-lightBg">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-darkGreen">
            Our Premium Products
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border group hover:shadow-2xl transition">
              <div className="h-64 overflow-hidden">
                <img
                  src="/asset/kubis.jpeg"
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  alt="Kubis"
                />
              </div>
              <div className="p-6">
                <h5 className="font-bold text-xl mb-2 text-darkGreen">
                  Green Cabbage
                </h5>
                <p className="text-gray-500 text-sm">
                  Segar, padat, dan berkualitas tinggi.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border group hover:shadow-2xl transition">
              <div className="h-64 overflow-hidden">
                <img
                  src="/asset/sawi.jpeg"
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  alt="Sawi"
                />
              </div>
              <div className="p-6">
                <h5 className="font-bold text-xl mb-2 text-darkGreen">
                  Napa Cabbage
                </h5>
                <p className="text-gray-500 text-sm">
                  Tekstur renyah pilihan terbaik.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border group hover:shadow-2xl transition">
              <div className="h-64 overflow-hidden">
                <img
                  src="/asset/jagung.jpg"
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  alt="Jagung"
                />
              </div>
              <div className="p-6">
                <h5 className="font-bold text-xl mb-2 text-darkGreen">
                  Sweet Corn
                </h5>
                <p className="text-gray-500 text-sm">
                  Manis alami, dipetik saat matang sempurna.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Booking Section */}
      <EventBooking />

      {/* Process Section */}
      <section id="process" className="py-20 bg-white border-b">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-darkGreen">
            Our Process
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Process Steps */}
            <div className="text-center group">
              <div className="w-full h-40 bg-gray-100 rounded-xl mb-6 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=400&q=60"
                  alt="Harvest"
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>
              <h5 className="text-lg font-bold mb-2 text-darkGreen">
                01. Harvesting
              </h5>
              <p className="text-sm text-gray-500">Pemanenan selektif.</p>
            </div>
            <div className="text-center group">
              <div className="w-full h-40 bg-gray-100 rounded-xl mb-6 overflow-hidden">
                <img
                  src="/asset/background.jpg"
                  alt="Sorting"
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>
              <h5 className="text-lg font-bold mb-2 text-darkGreen">
                02. Sorting
              </h5>
              <p className="text-sm text-gray-500">
                Pemilihan kualitas grade A.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-full h-40 bg-gray-100 rounded-xl mb-6 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=400&q=60"
                  alt="Packaging"
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>
              <h5 className="text-lg font-bold mb-2 text-darkGreen">
                03. Packaging
              </h5>
              <p className="text-sm text-gray-500">
                Pengemasan aman & higienis.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-full h-40 bg-gray-100 rounded-xl mb-6 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1586528116493-a029325540fa?auto=format&fit=crop&w=400&q=60"
                  alt="Shipping"
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>
              <h5 className="text-lg font-bold mb-2 text-darkGreen">
                04. Shipping
              </h5>
              <p className="text-sm text-gray-500">Pengiriman global.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center md:text-left text-darkGreen">
            Contact Us
          </h2>

          <div className="flex flex-col lg:flex-row gap-12">
            {/* Form */}
            <div className="lg:w-2/3">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="John"
                      className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Doe"
                      className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="Product Inquiry"
                    className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Write your message here..."
                    className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                  ></textarea>
                </div>
                <button
                  type="button"
                  className="bg-primary text-white px-8 py-3 rounded-full hover:bg-darkGreen transition font-medium w-full sm:w-auto"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Info */}
            <div className="lg:w-1/3 bg-lightBg p-8 rounded-2xl h-fit">
              <h4 className="text-xl font-bold mb-6 text-darkGreen">
                Get in Touch
              </h4>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full text-primary">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h6 className="font-semibold text-gray-900">Address</h6>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      Pasuruan
                      <br />
                      Jawa Timur, Indonesia
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full text-primary">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h6 className="font-semibold text-gray-900">Phone</h6>
                    <p className="text-gray-500 text-sm">+62 812 3456 7890</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full text-primary">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h6 className="font-semibold text-gray-900">Email</h6>
                    <p className="text-gray-500 text-sm">info@shemaagri.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-900 text-gray-400 py-12 mt-20">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 Shema Agri Mandiri. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
