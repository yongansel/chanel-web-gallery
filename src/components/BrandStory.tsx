
const BrandStory = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl md:text-5xl font-light tracking-wider text-black mb-8">
              香奈儿的传奇
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg">
                1910年，加布里埃·香奈儿在巴黎康朋街21号开设了她的第一家精品店。
                从那时起，香奈儿就致力于解放女性，赋予她们前所未有的自由与优雅。
              </p>
              <p>
                香奈儿女士革命性地重新定义了女性时装，她摒弃了束缚女性的紧身胸衣，
                创造出舒适而优雅的设计。她的理念是："奢华必须舒适，否则就不是奢华。"
              </p>
              <p>
                今天，香奈儿继续传承着创始人的精神，在卡尔·拉格斐和维吉妮·维亚的
                创意指导下，品牌不断创新，同时保持着永恒的优雅与精致。
              </p>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-200">
              <blockquote className="text-xl italic text-black">
                "时尚易逝，风格永存。"
                <footer className="text-sm text-gray-600 mt-2">— 加布里埃·香奈儿</footer>
              </blockquote>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Gabrielle Chanel"
                className="w-full h-[600px] object-cover shadow-2xl"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
