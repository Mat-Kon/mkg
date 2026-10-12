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
  // ===== Остекление и монтаж (osteklenie) =====
  {
    id: 3,
    name: {
      ru: "Отделка фасада профлистом (простая)",
      ka: "ფასადის მოპირკეთება პროფნასტილით (მარტივი)",
    },
    price: 2000,
    unit: "м²",
    category: "osteklenie",
  },
  {
    id: 4,
    name: {
      ru: "Монтаж остекления (простой)",
      ka: "შემინვის მონტაჟი (მარტივი)",
    },
    price: 1500,
    unit: "м²",
    category: "osteklenie",
  },
  {
    id: 5,
    name: {
      ru: "Монтаж остекления (сложный)",
      ka: "შემინვის მონტაჟი (რთული)",
    },
    price: 3000,
    unit: "м²",
    category: "osteklenie",
  },
  {
    id: 6,
    name: { ru: "Монтаж крыши", ka: "სახურავის მონტაჟი" },
    price: 3000,
    unit: "м²",
    category: "osteklenie",
  },

  // ===== Ремонт окон и дверей ПВХ (remont) =====
  {
    id: 23,
    name: {
      ru: "Регулировка створки ПВХ",
      ka: "მეტალოპლასტმასის ფრთის რეგულირება",
    },
    price: 750,
    unit: "шт",
    category: "remont",
  },
  {
    id: 24,
    name: {
      ru: "Замена фурнитуры на окне ПВХ",
      ka: "მეტალოპლასტმასის ფანჯარაზე ფურნიტურის შეცვლა",
    },
    price: 5000,
    unit: "шт",
    category: "remont",
  },
  {
    id: 25,
    name: {
      ru: "Замена фурнитуры на двери ПВХ",
      ka: "მეტალოპლასტმასის კარზე ფურნიტურის შეცვლა",
    },
    price: 7000,
    unit: "шт",
    category: "remont",
  },
  {
    id: 26,
    name: { ru: "Замена ручки", ka: "სახელურის შეცვლა" },
    price: 500,
    unit: "шт",
    category: "remont",
  },
  {
    id: 27,
    name: { ru: "Замена стеклопакета", ka: "მინაპაკეტის შეცვლა" },
    price: 2000,
    unit: "м²",
    category: "remont",
  },
  {
    id: 28,
    name: {
      ru: "Герметизация швов внутри",
      ka: "ნაკერების ჰერმეტიზაცია შიგნიდან",
    },
    price: 500,
    unit: "м.п.",
    category: "remont",
  },

  // ===== Отделка балконов и лоджий (otdelka) =====
  {
    id: 7,
    name: { ru: "Пол черновой", ka: "შავი იატაკი" },
    price: 2000,
    unit: "м²",
    category: "otdelka",
  },
  {
    id: 8,
    name: { ru: "Пол чистовой", ka: "თეთრი იატაკი" },
    price: 3000,
    unit: "м²",
    category: "otdelka",
  },
  {
    id: 12,
    name: {
      ru: "Отделка стен (МДФ/ПВХ)",
      ka: "კედლების მოპირკეთება (მდფ/მეტალოპლასტმასი)",
    },
    price: 1500,
    unit: "м²",
    category: "otdelka",
  },
  {
    id: 13,
    name: {
      ru: "Отделка стен (вагонка без окраски)",
      ka: "კედლების მოპირკეთება (ვაგონკა შეღებვის გარეშე)",
    },
    price: 2000,
    unit: "м²",
    category: "otdelka",
  },
  {
    id: 14,
    name: {
      ru: "Отделка стен (вагонка с окраской)",
      ka: "კედლების მოპირკეთება (ვაგონკა შეღებვით)",
    },
    price: 3000,
    unit: "м²",
    category: "otdelka",
  },
  {
    id: 15,
    name: {
      ru: "Отделка стен (вагонка с пропиткой и окраской)",
      ka: "კედლების მოპირკეთება (ვაგონკა გაჟღენთვითა და შეღებვით)",
    },
    price: 4000,
    unit: "м²",
    category: "otdelka",
  },
  {
    id: 16,
    name: {
      ru: "Отделка стен (ламинат)",
      ka: "კედლების მოპირკეთება (ლამინატი)",
    },
    price: 3000,
    unit: "м²",
    category: "otdelka",
  },
  {
    id: 17,
    name: {
      ru: "Отделка потолка (ПВХ)",
      ka: "ჭერის მოპირკეთება (მეტალოპლასტმასი)",
    },
    price: 1500,
    unit: "м²",
    category: "otdelka",
  },

  // ===== Электрика (electrika) =====
  {
    id: 18,
    name: { ru: "Вывод кабеля", ka: "კაბელის გამოყვანა" },
    price: 1000,
    unit: "шт",
    category: "electrika",
  },
  {
    id: 19,
    name: { ru: "Проводка", ka: "გაყვანილობა" },
    price: 300,
    unit: "м.п.",
    category: "electrika",
  },
  {
    id: 20,
    name: { ru: "Подключение точки", ka: "წერტილის მიერთება" },
    price: 500,
    unit: "шт",
    category: "electrika",
  },

  // ===== Дополнительные работы (dop) =====
  {
    id: 1,
    name: {
      ru: "Демонтаж остекления (простой)",
      ka: "შემინვის დემონტაჟი (მარტივი)",
    },
    price: 2000,
    unit: "м²",
    category: "dop",
  },
  {
    id: 2,
    name: { ru: "Сварочные работы", ka: "სამშენებლო-სადუღაბო სამუშაოები" },
    price: 1000,
    unit: "м.п.",
    category: "dop",
  },
  {
    id: 9,
    name: {
      ru: "Монтаж плинтуса ПВХ",
      ka: "პლინტუსის მონტაჟი (მეტალოპლასტმასი)",
    },
    price: 250,
    unit: "м.п.",
    category: "dop",
  },
  {
    id: 10,
    name: {
      ru: "Монтаж подоконника (150мм)",
      ka: "რაფის მონტაჟი (150მმ)",
    },
    price: 500,
    unit: "м.п.",
    category: "dop",
  },
  {
    id: 11,
    name: {
      ru: "Монтаж отлива стального (простой)",
      ka: "ფოლადის გარე რაფის მონტაჟი (მარტივი)",
    },
    price: 500,
    unit: "м.п.",
    category: "dop",
  },
  {
    id: 21,
    name: {
      ru: "Изготовление и монтаж шкафа (маленький)",
      ka: "კარადის დამზადება და მონტაჟი (პატარა)",
    },
    price: 8000,
    unit: "м²",
    category: "dop",
  },
  {
    id: 22,
    name: {
      ru: "Изготовление и монтаж шкафа (большой)",
      ka: "კარადის დამზადება და მონტაჟი (დიდი)",
    },
    price: 15000,
    unit: "м²",
    category: "dop",
  },
];
