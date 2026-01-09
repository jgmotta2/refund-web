import accommodationSvg from "../assets/accommodation.svg";
import foodSvg from "../assets/food.svg";
import transportSvg from "../assets/transport.svg";
import servicesSvg from "../assets/services.svg";
import othersSvg from "../assets/others.svg";

export const CATEGORIES = {
  food: {
    name: "Comida",
    icon: foodSvg,
  },

  others: {
    name: "Outros",
    icon: othersSvg,
  },

  services: {
    name: "Serviços",
    icon: servicesSvg,
  },

  transport: {
    name: "Transporte",
    icon: transportSvg,
  },

  accommodation: {
    name: "Hospedagem",
    icon: accommodationSvg,
  },
};

export const CATEGORIES_KEYS = Object.keys(CATEGORIES) as Array<
  keyof typeof CATEGORIES
>;
