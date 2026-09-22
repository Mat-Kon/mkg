export type Unit = "шт" | "м²" | "м.п.";

export type Service = {
  id: number;
  name: string;
  price: number;
  unit: Unit;
};

export const SERVICES: Service[] = [
  { id: 1, name: "Демонтаж", price: 35, unit: "м²" },
  { id: 2, name: "Сварочные работы", price: 35, unit: "м.п." },
  { id: 3, name: "Отделка фасада", price: 50, unit: "м²" },
  { id: 4, name: "Монтаж остекления (простой)", price: 40, unit: "м²" },
  { id: 5, name: "Монтаж остекления (сложный)", price: 60, unit: "м²" },
  { id: 6, name: "Монтаж крыши", price: 100, unit: "м²" },
  { id: 7, name: "Пол черновой", price: 50, unit: "м²" },
  { id: 8, name: "Пол чистовой", price: 75, unit: "м²" },
  { id: 9, name: "Монтаж плинтуса", price: 10, unit: "м.п." },
  { id: 10, name: "Монтаж подоконника", price: 20, unit: "м.п." },
  { id: 11, name: "Монтаж отлива", price: 20, unit: "м.п." },
  { id: 12, name: "Отделка стен (МДФ/ПВХ)", price: 40, unit: "м²" },
  { id: 13, name: "Отделка стен (вагонка без окраски)", price: 50, unit: "м²" },
  { id: 14, name: "Отделка стен (вагонка с окраской)", price: 65, unit: "м²" },
  {
    id: 15,
    name: "Отделка стен (вагонка с пропиткой и окраской)",
    price: 100,
    unit: "м²",
  },
  { id: 16, name: "Отделка стен (ламинат)", price: 85, unit: "м²" },
  { id: 17, name: "Отделка потолка (ПВХ)", price: 40, unit: "м²" },
  { id: 18, name: "Вывод кабеля", price: 35, unit: "шт" },
  { id: 19, name: "Проводка", price: 15, unit: "м.п." },
  { id: 20, name: "Подключение точки", price: 10, unit: "шт" },
  {
    id: 21,
    name: "Изготовление и монтаж шкафа (маленький)",
    price: 200,
    unit: "м²",
  },
  {
    id: 22,
    name: "Изготовление и монтаж шкафа (большой)",
    price: 300,
    unit: "м²",
  },
  { id: 23, name: "Регулировка створки ПВХ", price: 25, unit: "шт" },
  { id: 24, name: "Замена фурнитуры на окне ПВХ", price: 75, unit: "шт" },
  { id: 25, name: "Замена фурнитуры на двери ПВХ", price: 100, unit: "шт" },
  { id: 26, name: "Замена ручки", price: 10, unit: "шт" },
  { id: 27, name: "Замена стеклопакета", price: 50, unit: "м²" },
  { id: 28, name: "Герметизация швов внутри", price: 20, unit: "м.п." },
];
