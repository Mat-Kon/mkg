import type { Lang } from "@/i18n/types";

export type LocalizedString = Record<Lang, string>;

export type Unit = "шт" | "м²" | "м.п.";

export type ServiceCategory =
  | "osteklenie"
  | "remont"
  | "otdelka"
  | "electrika"
  | "dop";

export type Service = {
  id: number;
  name: LocalizedString;
  price: number;
  unit: Unit;
  category: ServiceCategory;
};

export const SERVICES: Service[] = [
  {
    id: 1,
    name: { ru: "Демонтаж", ka: "[KA] Демонтаж" },
    price: 35,
    unit: "м²",
    category: "dop",
  },
  {
    id: 2,
    name: { ru: "Сварочные работы", ka: "[KA] Сварочные работы" },
    price: 35,
    unit: "м.п.",
    category: "dop",
  },
  {
    id: 3,
    name: {
      ru: "Отделка фасада профлистом",
      ka: "[KA] Отделка фасада профлистом",
    },
    price: 50,
    unit: "м²",
    category: "osteklenie",
  },
  {
    id: 4,
    name: {
      ru: "Монтаж остекления (простой)",
      ka: "[KA] Монтаж остекления (простой)",
    },
    price: 50,
    unit: "м²",
    category: "osteklenie",
  },
  {
    id: 5,
    name: {
      ru: "Монтаж остекления (сложный)",
      ka: "[KA] Монтаж остекления (сложный)",
    },
    price: 100,
    unit: "м²",
    category: "osteklenie",
  },
  {
    id: 6,
    name: { ru: "Монтаж крыши", ka: "[KA] Монтаж крыши" },
    price: 100,
    unit: "м²",
    category: "osteklenie",
  },
  {
    id: 7,
    name: { ru: "Пол черновой", ka: "[KA] Пол черновой" },
    price: 50,
    unit: "м²",
    category: "otdelka",
  },
  {
    id: 8,
    name: { ru: "Пол чистовой", ka: "[KA] Пол чистовой" },
    price: 75,
    unit: "м²",
    category: "otdelka",
  },
  {
    id: 9,
    name: { ru: "Монтаж плинтуса", ka: "[KA] Монтаж плинтуса" },
    price: 10,
    unit: "м.п.",
    category: "dop",
  },
  {
    id: 10,
    name: { ru: "Монтаж подоконника", ka: "[KA] Монтаж подоконника" },
    price: 20,
    unit: "м.п.",
    category: "dop",
  },
  {
    id: 11,
    name: { ru: "Монтаж отлива", ka: "[KA] Монтаж отлива" },
    price: 20,
    unit: "м.п.",
    category: "dop",
  },
  {
    id: 12,
    name: { ru: "Отделка стен (МДФ/ПВХ)", ka: "[KA] Отделка стен (МДФ/ПВХ)" },
    price: 40,
    unit: "м²",
    category: "otdelka",
  },
  {
    id: 13,
    name: {
      ru: "Отделка стен (вагонка без окраски)",
      ka: "[KA] Отделка стен (вагонка без окраски)",
    },
    price: 50,
    unit: "м²",
    category: "otdelka",
  },
  {
    id: 14,
    name: {
      ru: "Отделка стен (вагонка с окраской)",
      ka: "[KA] Отделка стен (вагонка с окраской)",
    },
    price: 65,
    unit: "м²",
    category: "otdelka",
  },
  {
    id: 15,
    name: {
      ru: "Отделка стен (вагонка с пропиткой и окраской)",
      ka: "[KA] Отделка стен (вагонка с пропиткой и окраской)",
    },
    price: 100,
    unit: "м²",
    category: "otdelka",
  },
  {
    id: 16,
    name: { ru: "Отделка стен (ламинат)", ka: "[KA] Отделка стен (ламинат)" },
    price: 85,
    unit: "м²",
    category: "otdelka",
  },
  {
    id: 17,
    name: { ru: "Отделка потолка (ПВХ)", ka: "[KA] Отделка потолка (ПВХ)" },
    price: 40,
    unit: "м²",
    category: "otdelka",
  },
  {
    id: 18,
    name: { ru: "Вывод кабеля", ka: "[KA] Вывод кабеля" },
    price: 35,
    unit: "шт",
    category: "electrika",
  },
  {
    id: 19,
    name: { ru: "Проводка", ka: "[KA] Проводка" },
    price: 15,
    unit: "м.п.",
    category: "electrika",
  },
  {
    id: 20,
    name: { ru: "Подключение точки", ka: "[KA] Подключение точки" },
    price: 10,
    unit: "шт",
    category: "electrika",
  },
  {
    id: 21,
    name: {
      ru: "Изготовление и монтаж шкафа (маленький)",
      ka: "[KA] Изготовление и монтаж шкафа (маленький)",
    },
    price: 200,
    unit: "м²",
    category: "dop",
  },
  {
    id: 22,
    name: {
      ru: "Изготовление и монтаж шкафа (большой)",
      ka: "[KA] Изготовление и монтаж шкафа (большой)",
    },
    price: 300,
    unit: "м²",
    category: "dop",
  },
  {
    id: 23,
    name: { ru: "Регулировка створки ПВХ", ka: "[KA] Регулировка створки ПВХ" },
    price: 25,
    unit: "шт",
    category: "remont",
  },
  {
    id: 24,
    name: {
      ru: "Замена фурнитуры на окне ПВХ",
      ka: "[KA] Замена фурнитуры на окне ПВХ",
    },
    price: 75,
    unit: "шт",
    category: "remont",
  },
  {
    id: 25,
    name: {
      ru: "Замена фурнитуры на двери ПВХ",
      ka: "[KA] Замена фурнитуры на двери ПВХ",
    },
    price: 100,
    unit: "шт",
    category: "remont",
  },
  {
    id: 26,
    name: { ru: "Замена ручки", ka: "[KA] Замена ручки" },
    price: 10,
    unit: "шт",
    category: "remont",
  },
  {
    id: 27,
    name: { ru: "Замена стеклопакета", ka: "[KA] Замена стеклопакета" },
    price: 50,
    unit: "м²",
    category: "remont",
  },
  {
    id: 28,
    name: {
      ru: "Герметизация швов внутри",
      ka: "[KA] Герметизация швов внутри",
    },
    price: 20,
    unit: "м.п.",
    category: "remont",
  },
];
