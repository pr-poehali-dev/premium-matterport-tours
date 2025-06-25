import Icon from "@/components/ui/icon";

const CasesReviews = () => {
  const cases = [
    {
      title: "Бутик-отель Старый Город",
      location: "Санкт-Петербург",
      stats: {
        bookings: "+65%",
        time: "4.2 мин",
        conversion: "8.3%",
      },
      quote:
        "Гости теперь бронируют номера, даже не приезжая на осмотр. Сэкономили массу времени на показах.",
      author: "Елена Ковалёва",
      position: "Управляющая",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=400&q=80",
    },
    {
      title: "Вилла Sunset",
      location: "Сочи",
      stats: {
        bookings: "+89%",
        time: "5.7 мин",
        conversion: "12.1%",
      },
      quote:
        "Раньше треть звонков были вопросы о планировке. Теперь звонят сразу бронировать. Магия!",
      author: "Дмитрий Волков",
      position: "Владелец",
      image:
        "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=400&q=80",
    },
    {
      title: "Усадьба Берёзовая",
      location: "Московская область",
      stats: {
        bookings: "+43%",
        time: "3.8 мин",
        conversion: "15.7%",
      },
      quote:
        "Клиенты видят каждую деталь интерьера и сразу понимают — это то, что они искали. Конверсия выросла в разы.",
      author: "Анна Смирнова",
      position: "Менеджер по продажам",
      image:
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=400&q=80",
    },
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-rubik font-bold text-navy mb-6">
            Реальные результаты моих клиентов
          </h2>
          <p className="text-lg text-gray-600">
            За 2 года создал 3D-туры для 150+ премиальных объектов. Вот истории
            успеха
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cases.map((case_, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden luxury-shadow hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={case_.image}
                  alt={case_.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-rubik font-semibold text-lg mb-1">
                    {case_.title}
                  </h3>
                  <p className="text-sm opacity-90">{case_.location}</p>
                </div>
              </div>

              <div className="p-6">
                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-rubik font-bold text-turquoise">
                      {case_.stats.bookings}
                    </div>
                    <div className="text-xs text-gray-500">Бронирований</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-rubik font-bold text-turquoise">
                      {case_.stats.time}
                    </div>
                    <div className="text-xs text-gray-500">Время на сайте</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-rubik font-bold text-turquoise">
                      {case_.stats.conversion}
                    </div>
                    <div className="text-xs text-gray-500">Конверсия</div>
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="text-gray-600 mb-4 relative">
                  <Icon
                    name="Quote"
                    size={20}
                    className="text-turquoise/30 absolute -top-2 -left-1"
                  />
                  <p className="pl-6 italic">{case_.quote}</p>
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div className="w-10 h-10 bg-turquoise/10 rounded-full flex items-center justify-center">
                    <Icon name="User" size={20} className="text-turquoise" />
                  </div>
                  <div>
                    <div className="font-semibold text-navy text-sm">
                      {case_.author}
                    </div>
                    <div className="text-xs text-gray-500">
                      {case_.position}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CasesReviews;
