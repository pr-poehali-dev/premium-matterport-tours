import { useState } from "react";
import Icon from "@/components/ui/icon";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    area: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `Привет! Меня зовут ${formData.name}. Хочу получить расчёт 3D-тура для объекта площадью ${formData.area} м².`;
    const whatsappUrl = `https://wa.me/79999999999?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank");
    onClose();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-md w-full p-6 relative animate-scale-in">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <Icon name="X" size={24} />
        </button>

        <div className="text-center mb-6">
          <div className="bg-turquoise/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <Icon name="Calculator" size={28} className="text-turquoise" />
          </div>
          <h3 className="text-xl font-rubik font-bold text-navy mb-2">
            Получить расчёт
          </h3>
          <p className="text-gray-600">
            Заполните форму и я пришлю вам стоимость
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-turquoise focus:border-transparent"
              placeholder="Ваше имя"
            />
          </div>

          <div>
            <input
              type="tel"
              name="whatsapp"
              value={formData.whatsapp}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-turquoise focus:border-transparent"
              placeholder="WhatsApp: +7 (999) 123-45-67"
            />
          </div>

          <div>
            <input
              type="number"
              name="area"
              value={formData.area}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-turquoise focus:border-transparent"
              placeholder="Площадь объекта (м²)"
              min="50"
            />
          </div>

          <button type="submit" className="cta-button w-full">
            <span className="flex items-center justify-center gap-2">
              <Icon name="MessageCircle" size={20} />
              Получить расчёт
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
