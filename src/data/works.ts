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
    title: "Остекление лоджии под ключ",
    short: "Полное преображение балкона: от старого дерева до современного минимализма",
    cover: "/images/works/3/IMG_1565.jpeg",
    description:
      "На данном балконе было проделано множество работы. Демонтаж старого деревянного остеклния, демонтаж старой вагонки с вывозом мусора. Были укарочены перила по высоте, для увеличения светового проёма. Новый фасад с новыми окнами, отливанми сверху и снизу, были установлены четко в указаный срок. Далее поднятие пола с утеплением, утепление стен по фасаду. И под конец, укладка линолеума, отделка под окнами вагонкой с окрашиванием в три слоя, окрашивание кирпичных стен в три слоя, отделка потолка ПВХ панелями.",
    images: [
      { src: "/images/works/3/IMG_1517.jpeg", alt: "Фото балкона" },
      { src: "/images/works/3/IMG_1516.jpeg", alt: "Фото балкона" },
      { src: "/images/works/3/IMG_1524.jpeg", alt: "Фото балкона" },
      { src: "/images/works/3/IMG_1526.jpeg", alt: "Фото балкона" },
      { src: "/images/works/3/IMG_1563.jpeg", alt: "Фото балкона" },
      { src: "/images/works/3/IMG_1564.jpeg", alt: "Фото балкона" },
      { src: "/images/works/3/IMG_1565.jpeg", alt: "Фото балкона" },
    ],
  },
  {
    slug: "balkon-pod-klyuch-fistashka",
    title: "Балкон под ключ. Фисташка",
    short: "От ничего, до красоты за неделю",
    cover: "/images/works/4/IMG_3797.jpeg",
    description:
      "На данном балконе были произведены: сварочные работы, монтаж наружных бельевых веревок, монтаж металлопластиковых окон, монтаж отливов и подоконников, герметизация всех швов с и закрытием от солнца, поднятие и утепление пола, утепление наружных стен, монтаж крыши с шумоизоляцией, укладка линолеума, монтаж вагонки с окрашиванием в три слоя, монтаж ПВХ потолка, изготовление и монтаж большого встроенного шкафа.",
    images: [
      { src: "/images/works/4/IMG_3780.jpeg", alt: "Процесс" },
      { src: "/images/works/4/IMG_3783.jpeg", alt: "Процесс" },
      { src: "/images/works/4/IMG_3791.jpeg", alt: "Процесс" },
      { src: "/images/works/4/IMG_3795.jpeg", alt: "Процесс" },
      { src: "/images/works/4/IMG_3797.jpeg", alt: "Процесс" },
    ],
  },
  {
    slug: "otdelks-balkona-pvh-mramor",
    title: "Отделка балкона ПВХ панелями под мрамор.",
    short: "Внутренняя отделка балкона ламинированными ПВХ панелями под прамор.",
    cover: "/images/works/5/IMG_2660.jpeg",
    description:
      "На данном балконе были произведены: монтаж подоконников, герметизация всех швов, поднятие и утепление пола, утепление наружных стен, укладка линолеума, монтаж ламинированных ПВХ панелей, монтаж ПВХ потолка.",
    images: [
      { src: "/images/works/5/IMG_2643.jpeg", alt: "Процесс" },
      { src: "/images/works/5/IMG_2648.jpeg", alt: "Процесс" },
      { src: "/images/works/5/IMG_2652.jpeg", alt: "Процесс" },
      { src: "/images/works/5/IMG_2657.jpeg", alt: "Процесс" },
      { src: "/images/works/5/IMG_2660.jpeg", alt: "Процесс" },
      { src: "/images/works/5/IMG_2663.jpeg", alt: "Процесс" },
      { src: "/images/works/5/IMG_2665.jpeg", alt: "Процесс" },
    ],
  },
  {
    slug: "balkon-pod-klyuch-otdelka-pvh",
    title: "Балкон под ключ. Отделка ПВХ.",
    short: "Реомнт балкона под ключ. От сварочны работ, до финишной отделки.",
    cover: "/images/works/6/IMG_2455.jpeg",
    description:
      "На данном балконе были произведены: сварочные работы, монтаж металлопластиковых окон, монтаж отливов и подоконников, герметизация всех швов с и закрытием от солнца, поднятие и утепление пола, утепление наружных стен, укладка линолеума, монтаж ламинированных ПВХ панелей, монтаж ПВХ потолка, создание ниши для будущего шкафа или рабочая зона.",
    images: [
      { src: "/images/works/6/IMG_2424.jpeg", alt: "Процесс" },
      { src: "/images/works/6/IMG_2426.jpeg", alt: "Процесс" },
      { src: "/images/works/6/IMG_2451.jpeg", alt: "Процесс" },
      { src: "/images/works/6/IMG_2455.jpeg", alt: "Процесс" },
      { src: "/images/works/6/IMG_2458.jpeg", alt: "Процесс" },
      { src: "/images/works/6/IMG_2460.jpeg", alt: "Процесс" },
    ],
  },
];

export const findWork = (slug: string): Work | undefined =>
  WORKS.find((w) => w.slug === slug);
