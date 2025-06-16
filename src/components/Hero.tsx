
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/20 to-gray-900/40">
        <img
          src="https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
          alt="Chanel Collection"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-light tracking-wider mb-6 animate-fade-in">
          CHANEL
        </h1>
        <p className="text-xl md:text-2xl font-light tracking-wide mb-8 opacity-90">
          时尚易逝，风格永存
        </p>
        <p className="text-lg md:text-xl font-light tracking-wide mb-12 opacity-80 max-w-2xl mx-auto">
          探索香奈儿的精美世界，从高级定制到香水，每一件作品都彰显着永恒的优雅与创新
        </p>
        <button className="group inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 tracking-wider font-medium">
          探索系列
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-px h-16 bg-white/50 animate-pulse"></div>
      </div>
    </section>
  );
};

export default Hero;
