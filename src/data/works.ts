export type WorkImage = {
  src: string;
  alt: string;
};

export type Work = {
  slug: string;
  title: string;
  short: string;
  description: string;
  cover: string;
  images: WorkImage[];
};

export const WORKS: Work[] = [
  {
    slug: "balkon-pod-klyuch-batumi",
    title: "Балкон под ключ, Батуми",
    short: "Остекление, утепление, отделка",
    cover: "/images/works/balkon-1/cover.jpg",
    description:
      "Полный цикл работ по балкону: остекление, утепление, обшивка стен, чистовой пол, потолок ПВХ. Установил подоконник и отлив, вывел проводку под свет. Работы заняли 4 дня.",
    images: [
      { src: "/images/works/balkon-1/01.jpg", alt: "Общий вид" },
      { src: "/images/works/balkon-1/02.jpg", alt: "Отделка стен" },
      { src: "/images/works/balkon-1/03.jpg", alt: "Потолок и пол" },
      { src: "/images/works/balkon-1/04.jpg", alt: "Вид снаружи" },
    ],
  },
  {
    slug: "zamena-steklopaketa",
    title: "Замена стеклопакета",
    short: "Окно в квартире",
    cover: "/images/works/steklopaket/cover.jpg",
    description:
      "Заменил стеклопакет и уплотнители. Отрегулировал створки, чтобы не продувало. Клиентка жаловалась на шум с улицы — поставил энергосберегающий стеклопакет.",
    images: [
      { src: "/images/works/steklopaket/01.jpg", alt: "До" },
      { src: "/images/works/steklopaket/02.jpg", alt: "После" },
    ],
  },
  {
    slug: "osteklenie-lodzhii",
    title: "Остекление лоджии",
    short: "Сложная конструкция",
    cover: "/images/works/lodzhiya/cover.jpg",
    description:
      "Сложное остекление с двумя углами и выносом. Смонтировал крышу, поставил отливы, герметизировал швы. Работал с помощником — два дня.",
    images: [
      { src: "/images/works/lodzhiya/01.jpg", alt: "Общий вид" },
      { src: "/images/works/lodzhiya/02.jpg", alt: "Монтаж" },
      { src: "/images/works/lodzhiya/03.jpg", alt: "Готовый результат" },
    ],
  },
  {
    slug: "remont-okna-pvh",
    title: "Ремонт окна ПВХ",
    short: "Регулировка и фурнитура",
    cover: "/images/works/remont/cover.jpg",
    description:
      "Заменил фурнитуру, ручку и уплотнители. Отрегулировал створку — окно перестало заедать. Работа заняла один час.",
    images: [
      { src: "/images/works/remont/01.jpg", alt: "Процесс" },
      { src: "/images/works/remont/02.jpg", alt: "После ремонта" },
    ],
  },
];

export const findWork = (slug: string): Work | undefined =>
  WORKS.find((w) => w.slug === slug);
