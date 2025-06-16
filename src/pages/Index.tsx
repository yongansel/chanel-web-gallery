
import Hero from '../components/Hero';
import Navigation from '../components/Navigation';
import ProductShowcase from '../components/ProductShowcase';
import BrandStory from '../components/BrandStory';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <ProductShowcase />
      <BrandStory />
      <Footer />
    </div>
  );
};

export default Index;
