import { useState } from "react";
import Icon from "@/components/ui/icon";
import ContactModal from "./ContactModal";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleScrollToDemo = () => {
    document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy">
        {/* Video Background Placeholder */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy/95 to-turquoise/20">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-30"></div>
          <div className="absolute inset-0 bg-navy/50"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container-custom text-center text-white">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-rubik font-bold mb-6 text-balance">
              Покажите интерьер так, чтобы его
              <span className="text-turquoise block mt-2">
                забронировали ещё до визита
              </span>
            </h1>

            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="bg-turquoise/20 rounded-full p-3">
                <Icon name="TrendingUp" size={24} className="text-turquoise" />
              </div>
              <p className="text-xl sm:text-2xl font-rubik font-semibold text-turquoise">
                +41% бронирований
              </p>
            </div>

            <p className="text-lg sm:text-xl mb-10 text-gray-200 max-w-2xl mx-auto">
              Я создаю интерактивные 3D-туры Matterport, которые показывают
              каждый угол вашего объекта. Гости видят атмосферу, принимают
              решение быстрее.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={handleScrollToDemo}
                className="cta-button-secondary w-full sm:w-auto group"
              >
                <span className="flex items-center justify-center gap-2">
                  <Icon name="Play" size={20} />
                  Смотреть демо
                </span>
              </button>

              <button
                onClick={() => setIsModalOpen(true)}
                className="cta-button w-full sm:w-auto animate-pulse-scale group"
              >
                <span className="flex items-center justify-center gap-2">
                  <Icon name="Calculator" size={20} />
                  Получить расчёт
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
          <Icon name="ChevronDown" size={32} className="text-white/60" />
        </div>
      </section>

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default Hero;
