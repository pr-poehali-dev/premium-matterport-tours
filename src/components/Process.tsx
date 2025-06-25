import Icon from "@/components/ui/icon";

const Process = () => {
  const steps = [
    {
      step: "01",
      title: "Бриф",
      description: "Обсуждаем задачи, особенности объекта, сроки",
      duration: "30 мин",
      icon: "MessageSquare",
    },
    {
      step: "02",
      title: "Съёмка",
      description: "Приезжаю с оборудованием, снимаю весь объект",
      duration: "1 день",
      icon: "Camera",
    },
    {
      step: "03",
      title: "Создание тура",
      description: "Обрабатываю материал, создаю интерактивный тур",
      duration: "48 часов",
      icon: "Settings",
    },
    {
      step: "04",
      title: "Внедрение",
      description: "Размещаю тур на сайт, настраиваю интеграции",
      duration: "2 часа",
      icon: "Globe",
    },
    {
      step: "05",
      title: "Аналитика",
      description: "Отслеживаем результаты, оптимизируем конверсию",
      duration: "Постоянно",
      icon: "BarChart3",
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-rubik font-bold text-navy mb-6">
            Как я работаю
          </h2>
          <p className="text-lg text-gray-600">
            Простой и понятный процесс от идеи до результата. Никаких сюрпризов
            — только качество
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-12 bottom-12 w-0.5 bg-turquoise/20 hidden md:block"></div>

            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start gap-6 group">
                  {/* Step Number */}
                  <div className="flex-shrink-0 relative">
                    <div className="w-16 h-16 bg-turquoise rounded-2xl flex items-center justify-center text-white font-rubik font-bold text-lg group-hover:scale-110 transition-transform shadow-lg">
                      {step.step}
                    </div>
                    {index < steps.length - 1 && (
                      <div className="hidden md:block absolute top-16 left-1/2 transform -translate-x-1/2 w-px h-8 bg-turquoise/20"></div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-gray-50 rounded-2xl p-6 group-hover:bg-turquoise/5 transition-colors">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="bg-turquoise/10 rounded-lg p-2">
                          <Icon
                            name={step.icon as any}
                            size={20}
                            className="text-turquoise"
                          />
                        </div>
                        <h3 className="text-xl font-rubik font-semibold text-navy">
                          {step.title}
                        </h3>
                      </div>
                      <div className="bg-turquoise/20 text-turquoise px-3 py-1 rounded-full text-sm font-medium">
                        {step.duration}
                      </div>
                    </div>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <div className="bg-turquoise/10 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-rubik font-semibold text-navy mb-4">
              Готовы начать?
            </h3>
            <p className="text-gray-600 mb-6">
              Обсудим ваш проект и составим план работы. Консультация бесплатно
            </p>
            <button className="cta-button">
              <span className="flex items-center gap-2">
                <Icon name="Phone" size={20} />
                Записаться на звонок
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
