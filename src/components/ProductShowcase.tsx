
import { ArrowRight } from 'lucide-react';

const ProductShowcase = () => {
  const products = [
    {
      id: 1,
      title: "2.55手袋",
      subtitle: "经典绗缝设计",
      image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      description: "永恒的象征，融合了功能性与美学的完美结合"
    },
    {
      id: 2,
      title: "N°5香水",
      subtitle: "传奇香氛",
      image: "https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      description: "自1921年以来的经典香氛，优雅女性的完美诠释"
    },
    {
      id: 3,
      title: "山茶花胸针",
      subtitle: "高级珠宝",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      description: "香奈儿女士最爱的花朵，化作永恒的珠宝艺术"
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light tracking-wider text-black mb-6">
            精选系列
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            每一件香奈儿作品都承载着品牌的精神与传统，展现着无与伦比的工艺与创新
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group cursor-pointer"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative overflow-hidden bg-white shadow-lg">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-xl font-medium tracking-wide mb-2">{product.title}</h3>
                  <p className="text-sm opacity-90 mb-3">{product.subtitle}</p>
                  <p className="text-sm opacity-75">{product.description}</p>
                </div>
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-medium tracking-wide text-black mb-2">{product.title}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <button className="group inline-flex items-center text-black hover:text-gray-600 transition-colors">
                  了解更多
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
