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
    slug: "balkon-pod-klyuch",
    title: "Балкон под ключ. Берюзовая вагонка",
    short: "Утепление, отделка, шкаф",
    cover: "/images/works/1/IMG_1992.jpeg",
    description:
      "Полный цикл работ по внутренней отделке балкона: утепление, обшивка стен вагонкой с окрашиванием в три слоя, чистовой пол, потолок ПВХ. Установил подоконник, вывел проводку под свет и розетки. Работы заняли 5 дней.",
    images: [
      { src: "/images/works/1/IMG_1991.jpeg", alt: "Общий вид" },
      { src: "/images/works/1/IMG_1992.jpeg", alt: "Отделка стен" },
      { src: "/images/works/1/IMG_1993.jpeg", alt: "Потолок и пол" },
      { src: "/images/works/1/IMG_1995.jpeg", alt: "Вид снаружи" },
      { src: "/images/works/1/IMG_2113.jpeg", alt: "Вид снаружи" },
      { src: "/images/works/1/IMG_2115.jpeg", alt: "Вид снаружи" },
    ],
  },
  {
    slug: "otdelka-pod-kluch-seraya",
    title: "Отделка внутренняя под ключ.",
    short: "Утепление, отделка, винтажная проводка",
    cover: "/images/works/2/IMG_2166.jpeg",
    description:
      "Утепление пеноплексом, поднятии пола, отделка вагонкой, монтаж винтажной проводки, отделка потолка ПВХ панелями, установка света, замена подоконников.",
    images: [
      { src: "/images/works/2/IMG_2131.jpeg", alt: "фото" },
      { src: "/images/works/2/IMG_2129.jpeg", alt: "фото" },
      { src: "/images/works/2/IMG_2136.jpeg", alt: "фото" },
      { src: "/images/works/2/IMG_2137.jpeg", alt: "фото" },
      { src: "/images/works/2/IMG_2165.jpeg", alt: "фото" },
      { src: "/images/works/2/IMG_2166.jpeg", alt: "фото" },
      { src: "/images/works/2/IMG_2169.jpeg", alt: "фото" },
      { src: "/images/works/2/IMG_2171.jpeg", alt: "фото" },
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
