import Icon from "@/components/ui/icon";

const PainSolution = () => {
  const pains = [
    {
      icon: "Users",
      title: "Гости не понимают планировку",
      description: "Фото не передают масштаб и связь между комнатами",
      solution: "360° обзор всех помещений",
    },
    {
      icon: "TrendingDown",
      title: "Много вопросов, мало броней",
      description: "Постоянные звонки с уточнениями вместо бронирований",
      solution: "+73% времени на сайте",
    },
    {
      icon: "MapPin",
      title: "Сложно показать атмосферу",
      description: "Обычные фото не создают эмоционального вовлечения",
      solution: "Эффект присутствия",
    },
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-rubik font-bold text-navy mb-6">
            Превращаю проблемы в преимущества
          </h2>
          <p className="text-lg text-gray-600">
            Каждая боль вашего бизнеса становится конкурентным преимуществом с
            3D-турами
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pains.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 luxury-shadow hover:shadow-xl transition-all duration-300 group"
            >
              <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Icon
                  name={item.icon as any}
                  size={28}
                  className="text-red-600"
                />
              </div>

              <h3 className="text-xl font-rubik font-semibold text-navy mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600 mb-6">{item.description}</p>

              <div className="border-t-2 border-turquoise/20 pt-4">
                <div className="flex items-center gap-3">
                  <div className="bg-turquoise/10 rounded-full p-2">
                    <Icon
                      name="CheckCircle"
                      size={20}
                      className="text-turquoise"
                    />
                  </div>
                  <span className="font-semibold text-turquoise">
                    {item.solution}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainSolution;
