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
    name: { ru: "Демонтаж", ka: "დემონტაჟი" },
    price: 35,
    unit: "м²",
    category: "dop",
  },
  {
    id: 2,
    name: { ru: "Сварочные работы", ka: "სამშენებლო-სადუღაბო სამუშაოები" },
    price: 35,
    unit: "м.п.",
    category: "dop",
  },
  {
    id: 3,
    name: {
      ru: "Отделка фасада профлистом",
      ka: "ფასადის მოპირკეთება პროფნასტილით",
    },
    price: 50,
    unit: "м²",
    category: "osteklenie",
  },
  {
    id: 4,
    name: {
      ru: "Монтаж остекления (простой)",
      ka: "შემინვის მონტაჟი (მარტივი)",
    },
    price: 50,
    unit: "м²",
    category: "osteklenie",
  },

  {
    id: 5,
    name: {
      ru: "Монтаж остекления (сложный)",
      ka: "შემინვის მონტაჟი (რთული)",
    },
    price: 100,
    unit: "м²",
    category: "osteklenie",
  },
  {
    id: 6,
    name: { ru: "Монтаж крыши", ka: "სახურავის მონტაჟი" },
    price: 100,
    unit: "м²",
    category: "osteklenie",
  },
  {
    id: 7,
    name: { ru: "Пол черновой", ka: "შავი იატაკი" },
    price: 50,
    unit: "м²",
    category: "otdelka",
  },
  {
    id: 8,
    name: { ru: "Пол чистовой", ka: "თეთრი იატაკი" },
    price: 75,
    unit: "м²",
    category: "otdelka",
  },
  {
    id: 9,
    name: { ru: "Монтаж плинтуса", ka: "პლინტუსის მონტაჟი" },
    price: 10,
    unit: "м.п.",
    category: "dop",
  },

  {
    id: 10,
    name: { ru: "Монтаж подоконника", ka: "რაფის მონტაჟი" },
    price: 20,
    unit: "м.п.",
    category: "dop",
  },
  {
    id: 11,
    name: { ru: "Монтаж отлива", ka: "გარე რაფის მონტაჟი" },
    price: 20,
    unit: "м.п.",
    category: "dop",
  },
  {
    id: 12,
    name: {
      ru: "Отделка стен (МДФ/ПВХ)",
      ka: "კედლების მოპირკეთება (მდფ/მეტალოპლასტმასი)",
    },
    price: 40,
    unit: "м²",
    category: "otdelka",
  },
  {
    id: 13,
    name: {
      ru: "Отделка стен (вагонка без окраски)",
      ka: "კედლების მოპირკეთება (ვაგონკა შეღებვის გარეშე)",
    },
    price: 50,
    unit: "м²",
    category: "otdelka",
  },

  {
    id: 14,
    name: {
      ru: "Отделка стен (вагонка с окраской)",
      ka: "კედლების მოპირკეთება (ვაგონკა შეღებვით)",
    },
    price: 65,
    unit: "м²",
    category: "otdelka",
  },
  {
    id: 15,
    name: {
      ru: "Отделка стен (вагонка с пропиткой и окраской)",
      ka: "კედლების მოპირკეთება (ვაგონკა გაჟღენთვითა და შეღებვით)",
    },
    price: 100,
    unit: "м²",
    category: "otdelka",
  },
  {
    id: 16,
    name: {
      ru: "Отделка стен (ламинат)",
      ka: "კედლების მოპირკეთება (ლამინატი)",
    },
    price: 85,
    unit: "м²",
    category: "otdelka",
  },
  {
    id: 17,
    name: {
      ru: "Отделка потолка (ПВХ)",
      ka: "ჭერის მოპირკეთება (მეტალოპლასტმასი)",
    },
    price: 40,
    unit: "м²",
    category: "otdelka",
  },

  {
    id: 18,
    name: { ru: "Вывод кабеля", ka: "კაბელის გამოყვანა" },
    price: 35,
    unit: "шт",
    category: "electrika",
  },
  {
    id: 19,
    name: { ru: "Проводка", ka: "გაყვანილობა" },
    price: 15,
    unit: "м.п.",
    category: "electrika",
  },
  {
    id: 20,
    name: { ru: "Подключение точки", ka: "წერტილის მიერთება" },
    price: 10,
    unit: "шт",
    category: "electrika",
  },
  {
    id: 21,
    name: {
      ru: "Изготовление и монтаж шкафа (маленький)",
      ka: "კარადის დამზადება და მონტაჟი (პატარა)",
    },
    price: 200,
    unit: "м²",
    category: "dop",
  },

  {
    id: 22,
    name: {
      ru: "Изготовление и монтаж шкафа (большой)",
      ka: "კარადის დამზადება და მონტაჟი (დიდი)",
    },
    price: 300,
    unit: "м²",
    category: "dop",
  },
  {
    id: 23,
    name: {
      ru: "Регулировка створки ПВХ",
      ka: "მეტალოპლასტმასის ფრთის რეგულირება",
    },
    price: 25,
    unit: "шт",
    category: "remont",
  },
  {
    id: 24,
    name: {
      ru: "Замена фурнитуры на окне ПВХ",
      ka: "მეტალოპლასტმასის ფანჯარაზე ფურნიტურის შეცვლა",
    },
    price: 75,
    unit: "шт",
    category: "remont",
  },
  {
    id: 25,
    name: {
      ru: "Замена фурнитуры на двери ПВХ",
      ka: "მეტალოპლასტმასის კარზე ფურნიტურის შეცვლა",
    },
    price: 100,
    unit: "шт",
    category: "remont",
  },

  {
    id: 26,
    name: { ru: "Замена ручки", ka: "სახელურის შეცვლა" },
    price: 10,
    unit: "шт",
    category: "remont",
  },
  {
    id: 27,
    name: { ru: "Замена стеклопакета", ka: "მინაპაკეტის შეცვლა" },
    price: 50,
    unit: "м²",
    category: "remont",
  },
  {
    id: 28,
    name: {
      ru: "Герметизация швов внутри",
      ka: "ნაკერების ჰერმეტიზაცია შიგნიდან",
    },
    price: 20,
    unit: "м.п.",
    category: "remont",
  },
];
