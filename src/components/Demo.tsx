import { useState } from "react";
import Icon from "@/components/ui/icon";

const Demo = () => {
  const [currentView, setCurrentView] = useState("dollhouse");

  const viewOptions = [
    { id: "dollhouse", label: "Dollhouse", icon: "Home" },
    { id: "floorplan", label: "План этажей", icon: "Map" },
    { id: "inside", label: "Внутри", icon: "Camera" },
  ];

  return (
    <section id="demo" className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-rubik font-bold text-navy mb-6">
            Посмотрите, как это работает
          </h2>
          <p className="text-lg text-gray-600">
            Интерактивный 3D-тур премиальной виллы. Попробуйте разные режимы
            просмотра
          </p>
        </div>

        {/* View Options */}
        <div className="flex justify-center mb-8">
          <div className="bg-gray-100 rounded-xl p-2 inline-flex gap-2">
            {viewOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => setCurrentView(option.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                  currentView === option.id
                    ? "bg-turquoise text-white shadow-md"
                    : "text-gray-600 hover:text-navy"
                }`}
              >
                <Icon name={option.icon as any} size={18} />
                {option.label}
              </button>
            ))}
          </div>
        </div>

        {/* Demo Container */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-navy rounded-2xl overflow-hidden luxury-shadow">
            <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 relative">
              {/* Matterport Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="bg-turquoise/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                    <Icon name="Play" size={32} className="text-turquoise" />
                  </div>
                  <h3 className="text-xl font-rubik font-semibold text-white mb-2">
                    Matterport Demo
                  </h3>
                  <p className="text-gray-300">
                    Премиальная вилла • 5 комнат • 200 м²
                  </p>
                </div>
              </div>

              {/* Navigation Hints */}
              <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm rounded-lg p-3">
                <div className="flex items-center gap-2 text-white text-sm">
                  <Icon name="Mouse" size={16} />
                  <span>Кликайте и перетаскивайте для навигации</span>
                </div>
              </div>

              <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg p-3">
                <div className="flex items-center gap-2 text-white text-sm">
                  <Icon name="Maximize" size={16} />
                  <span>Полноэкранный режим</span>
                </div>
              </div>
            </div>
          </div>

          {/* Demo Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <div className="bg-turquoise/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <Icon name="Move3D" size={24} className="text-turquoise" />
              </div>
              <h4 className="font-semibold text-navy mb-1">Полная свобода</h4>
              <p className="text-sm text-gray-600">
                Ходите по комнатам как в реальности
              </p>
            </div>

            <div className="text-center">
              <div className="bg-turquoise/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <Icon name="Ruler" size={24} className="text-turquoise" />
              </div>
              <h4 className="font-semibold text-navy mb-1">Точные размеры</h4>
              <p className="text-sm text-gray-600">Измерения в один клик</p>
            </div>

            <div className="text-center">
              <div className="bg-turquoise/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <Icon name="Share" size={24} className="text-turquoise" />
              </div>
              <h4 className="font-semibold text-navy mb-1">Лёгкий шеринг</h4>
              <p className="text-sm text-gray-600">
                Отправляйте ссылку клиентам
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;
