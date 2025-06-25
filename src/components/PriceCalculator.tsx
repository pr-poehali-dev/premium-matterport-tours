import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const PriceCalculator = () => {
  const [area, setArea] = useState<number>(100);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 0 });

  useEffect(() => {
    calculatePrice(area);
  }, [area]);

  const calculatePrice = (area: number) => {
    let basePrice = 500; // Base price per m²
    let pricePerSqm = basePrice;

    // Price tiers
    if (area > 300) pricePerSqm = 350;
    else if (area > 200) pricePerSqm = 400;
    else if (area > 100) pricePerSqm = 450;

    const minPrice = area * pricePerSqm;
    const maxPrice = minPrice + area * 100; // Additional services

    setPriceRange({ min: minPrice, max: maxPrice });
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("ru-RU").format(price);
  };

  const included = [
    "Съёмка объекта за 1 день",
    "Обработка и создание тура",
    "Размещение на платформе",
    "Техническая поддержка",
    "Аналитика просмотров",
    "Интеграция с сайтом",
  ];

  return (
    <section className="section-padding bg-navy">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-rubik font-bold text-white mb-6">
            Рассчитайте стоимость вашего тура
          </h2>
          <p className="text-lg text-gray-300">
            Цена зависит от площади объекта и дополнительных услуг
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 sm:p-12 luxury-shadow">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Calculator */}
              <div>
                <h3 className="text-2xl font-rubik font-bold text-navy mb-8">
                  Калькулятор стоимости
                </h3>

                <div className="mb-8">
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Площадь объекта (м²)
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      value={area}
                      onChange={(e) => setArea(Number(e.target.value))}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-turquoise focus:border-transparent text-lg font-semibold text-navy"
                      min="50"
                      max="1000"
                    />
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                      м²
                    </div>
                  </div>
                  <input
                    type="range"
                    min="50"
                    max="500"
                    value={area}
                    onChange={(e) => setArea(Number(e.target.value))}
                    className="w-full mt-4 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-2">
                    <span>50 м²</span>
                    <span>500+ м²</span>
                  </div>
                </div>

                {/* Price Range */}
                <div className="bg-turquoise/10 rounded-2xl p-6 mb-8">
                  <h4 className="text-lg font-rubik font-semibold text-navy mb-4">
                    Стоимость тура
                  </h4>
                  <div className="text-center">
                    <div className="text-3xl font-rubik font-bold text-turquoise mb-2">
                      {formatPrice(priceRange.min)} -{" "}
                      {formatPrice(priceRange.max)} ₽
                    </div>
                    <p className="text-sm text-gray-600">
                      Окончательная цена после консультации
                    </p>
                  </div>
                </div>

                <button className="cta-button w-full">
                  <span className="flex items-center justify-center gap-2">
                    <Icon name="Calculator" size={20} />
                    Получить точный расчёт
                  </span>
                </button>
              </div>

              {/* What's Included */}
              <div>
                <h3 className="text-2xl font-rubik font-bold text-navy mb-8">
                  Что входит в стоимость
                </h3>

                <div className="space-y-4">
                  {included.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="bg-turquoise/10 rounded-full p-1 mt-1">
                        <Icon
                          name="Check"
                          size={16}
                          className="text-turquoise"
                        />
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-gray-50 rounded-2xl p-6 mt-8">
                  <h4 className="font-rubik font-semibold text-navy mb-3">
                    Дополнительные опции:
                  </h4>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Брендинг тура (логотип, цвета) — от 10 000 ₽</li>
                    <li>• Мультиязычность — от 15 000 ₽</li>
                    <li>• Интеграция с CRM — от 20 000 ₽</li>
                    <li>• Виртуальный хостинг — от 5 000 ₽/мес</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceCalculator;
