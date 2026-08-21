import { products } from '@/lib/data/products';
import { InteractiveProductCard } from '../ui/InteractiveProductCard';
import Link from 'next/link';

interface ProductCatalogProps {
  limit?: number;
}

export function ProductCatalog({ limit }: ProductCatalogProps) {
  const displayProducts = limit ? products.slice(0, limit) : products;

  return (
    <section id="products" className="py-16 px-4 md:px-12 max-w-7xl mx-auto">
      <div className="mb-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 tracking-tight">Keunggulan Produk Kami</h2>
        <p className="text-slate-500 mt-2 text-lg">Cat berkualitas tinggi bersertifikasi SNI yang dipercaya masyarakat.</p>
      </div>

      <div className="flex flex-wrap justify-center gap-8">
        {displayProducts.map((product) => (
          <div key={product.id} className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-sm">
            <InteractiveProductCard product={product} />
          </div>
        ))}
      </div>

      {limit && (
        <div className="mt-12 flex justify-center">
          <Link 
            href="/products"
            className="px-8 py-3 bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 font-medium rounded-full shadow-sm active:scale-95 transition-all"
          >
            Lihat Seluruh Katalog Produk
          </Link>
        </div>
      )}
    </section>
  );
}
