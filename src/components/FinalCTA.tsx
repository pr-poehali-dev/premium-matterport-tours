import { useState } from "react";
import Icon from "@/components/ui/icon";

const FinalCTA = () => {
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    area: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // WhatsApp integration
    const message = `Привет! Меня зовут ${formData.name}. Хочу заказать 3D-тур Matterport для объекта площадью ${formData.area} м².`;
    const whatsappUrl = `https://wa.me/79999999999?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section className="section-padding gradient-bg">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-rubik font-bold text-white mb-6">
            Давайте покажем ваш интерьер миру
          </h2>
          <p className="text-lg text-gray-200 mb-12 max-w-2xl mx-auto">
            Начнём с бесплатной консультации. Обсудим ваш объект и подберём
            идеальное решение
          </p>

          <div className="bg-white rounded-3xl p-8 sm:p-12 luxury-shadow max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 text-left">
                  Ваше имя
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-turquoise focus:border-transparent"
                  placeholder="Как к вам обращаться?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 text-left">
                  WhatsApp
                </label>
                <input
                  type="tel"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-turquoise focus:border-transparent"
                  placeholder="+7 (999) 123-45-67"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 text-left">
                  Площадь объекта (м²)
                </label>
                <input
                  type="number"
                  name="area"
                  value={formData.area}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-turquoise focus:border-transparent"
                  placeholder="Например, 150"
                  min="50"
                />
              </div>

              <button type="submit" className="cta-button w-full text-xl py-6">
                <span className="flex items-center justify-center gap-3">
                  <Icon name="MessageCircle" size={24} />
                  Написать в WhatsApp
                </span>
              </button>
            </form>

            <div className="flex justify-center gap-4 mt-8 pt-6 border-t border-gray-200">
              <a
                href="https://wa.me/79999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-green-600 hover:text-green-700 transition-colors"
              >
                <Icon name="MessageCircle" size={20} />
                WhatsApp
              </a>
              <a
                href="https://t.me/username"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
              >
                <Icon name="Send" size={20} />
                Telegram
              </a>
            </div>

            <p className="text-xs text-gray-500 mt-6">
              Отправляя форму, вы соглашаетесь с обработкой персональных данных
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
