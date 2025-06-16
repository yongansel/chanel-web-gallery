
import { useState } from 'react';
import { Menu, X, Search, ShoppingBag, User } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold tracking-wider text-black">CHANEL</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#" className="text-black hover:text-gray-600 px-3 py-2 text-sm font-medium tracking-wide transition-colors">
                高级定制
              </a>
              <a href="#" className="text-black hover:text-gray-600 px-3 py-2 text-sm font-medium tracking-wide transition-colors">
                成衣精品
              </a>
              <a href="#" className="text-black hover:text-gray-600 px-3 py-2 text-sm font-medium tracking-wide transition-colors">
                手袋
              </a>
              <a href="#" className="text-black hover:text-gray-600 px-3 py-2 text-sm font-medium tracking-wide transition-colors">
                香水
              </a>
              <a href="#" className="text-black hover:text-gray-600 px-3 py-2 text-sm font-medium tracking-wide transition-colors">
                腕表
              </a>
              <a href="#" className="text-black hover:text-gray-600 px-3 py-2 text-sm font-medium tracking-wide transition-colors">
                高级珠宝
              </a>
            </div>
          </div>

          {/* Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <Search className="h-5 w-5 text-black hover:text-gray-600 cursor-pointer transition-colors" />
            <User className="h-5 w-5 text-black hover:text-gray-600 cursor-pointer transition-colors" />
            <ShoppingBag className="h-5 w-5 text-black hover:text-gray-600 cursor-pointer transition-colors" />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-black hover:text-gray-600 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="text-black hover:text-gray-600 block px-3 py-2 text-base font-medium tracking-wide">
              高级定制
            </a>
            <a href="#" className="text-black hover:text-gray-600 block px-3 py-2 text-base font-medium tracking-wide">
              成衣精品
            </a>
            <a href="#" className="text-black hover:text-gray-600 block px-3 py-2 text-base font-medium tracking-wide">
              手袋
            </a>
            <a href="#" className="text-black hover:text-gray-600 block px-3 py-2 text-base font-medium tracking-wide">
              香水
            </a>
            <a href="#" className="text-black hover:text-gray-600 block px-3 py-2 text-base font-medium tracking-wide">
              腕表
            </a>
            <a href="#" className="text-black hover:text-gray-600 block px-3 py-2 text-base font-medium tracking-wide">
              高级珠宝
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
