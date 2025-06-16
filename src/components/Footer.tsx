
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold tracking-wider mb-6">CHANEL</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              香奈儿致力于为女性创造独特而永恒的风格，每一件作品都体现着品牌对卓越工艺和创新设计的承诺。
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-gray-300 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="h-6 w-6 text-gray-300 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="h-6 w-6 text-gray-300 hover:text-white cursor-pointer transition-colors" />
              <Youtube className="h-6 w-6 text-gray-300 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-medium tracking-wide mb-6">快速链接</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">关于我们</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">门店查询</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">客户服务</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">职业机会</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">新闻中心</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-medium tracking-wide mb-6">服务</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">个人定制</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">护理服务</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">配送信息</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">退换政策</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">联系我们</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 香奈儿. 保留所有权利.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">隐私政策</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">使用条款</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookie政策</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
