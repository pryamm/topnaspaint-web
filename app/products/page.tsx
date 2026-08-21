import { Navbar } from '@/components/ui/Navbar';
import { products } from '@/lib/data/products';
import { ProductShowcase } from '@/components/sections/ProductShowcase';

export default function ProductsPage() {
  return (
    <main className="min-h-screen pb-24 md:pb-0 relative overflow-x-hidden pt-20">
      <Navbar />
      
      <div className="pt-8 px-4 md:px-12 max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-800 tracking-tight">Katalog Produk</h1>
        <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
          Jelajahi lini produk premium kami yang diformulasikan khusus untuk memberikan perlindungan maksimal, warna yang cemerlang, dan hasil yang memukau.
        </p>
      </div>

      <div className="flex flex-col">
        {products.map((product, index) => (
          <ProductShowcase key={product.id} product={product} index={index} />
        ))}
      </div>
      
      
      {/* CTA Bottom */}
      <section className="py-16 px-4 md:px-12 max-w-4xl mx-auto text-center">
        <div className="bg-emerald-500 rounded-3xl p-8 md:p-12 text-white shadow-xl shadow-emerald-500/20">
          <h2 className="text-3xl font-bold mb-4">Tertarik Memasarkan Produk Kami?</h2>
          <p className="text-emerald-50 mb-8 max-w-2xl mx-auto">
            Bergabunglah dengan jaringan kemitraan kami dan dapatkan penawaran harga terbaik untuk grosir dan agen.
          </p>
          <a 
            href="https://wa.me/6285221268938?text=Halo%20Topnas%20Paint,%20saya%20tertarik%20menjadi%20mitra%20distributor." 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-white text-emerald-600 font-bold rounded-full shadow-lg hover:shadow-xl active:scale-95 transition-all"
          >
            Hubungi Tim Kemitraan
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-slate-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Topnas Paint. All rights reserved.</p>
      </footer>
    </main>
  );
}
