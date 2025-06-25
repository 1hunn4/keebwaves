import { Category, Product, FAQItem } from '@/types';

export const categories: Category[] = [
    { name: 'Клавиатуры', icon: '/assets/categories/mousepad.svg' },
    { name: 'Кейкапы', icon: '/assets/categories/mousepad.svg' },
    { name: 'Мыши', icon: '/assets/categories/mousepad.svg' },
    { name: 'Коврики', icon: '/assets/categories/mousepad.svg' },
];

export const products: Product[] = [
    {
        id: 1,
        name: 'Varmilo MUSE 65 Ariel',
        slug: 'varmilo_muse_65_ariel',
        category: 'Клавиатуры',
        price: 22590,
        image: '/assets/products/keyboards/keyboard1.webp',
        description: 'Компактная 65% механическая клавиатура с премиальными переключателями Varmilo EC V2. Алюминиевый корпус, двойные PBT клавиши и RGB подсветка с 16 режимами. Идеальна для работы и игр.',
        specifications: {
            length: '310 мм',
            width: '120 мм',
            thickness: '40 мм',
            material: 'Алюминий',
            surface: 'Матовая',
            weight: '800 г',
            color: 'Белый, Голубой'
        }
    },
    {
        id: 2,
        name: 'Akko MOD 007 PC Blue on White',
        slug: 'akko_mod_007_pc_blue_on_white',
        category: 'Клавиатуры',
        price: 12490,
        image: '/assets/products/keyboards/keyboard2.webp',
        description: '75% клавиатура в корпусе из поликарбоната с горяче-сменными переключателями Akko CS Silver. Южное свещение RGB, тройное подключение и предварительно смазанные стабилизаторы.',
        specifications: {
            length: '340 мм',
            width: '140 мм',
            thickness: '45 мм',
            material: 'Поликарбонат',
            surface: 'Глянцевая',
            weight: '950 г',
            color: 'Синий, Белый'
        }
    },
    {
        id: 3,
        name: 'Lofree 1% Moru',
        slug: 'lofree_1_moru',
        category: 'Клавиатуры',
        price: 12490,
        image: '/assets/products/keyboards/keyboard3.webp',
        description: 'Ультра-компактная 1% механическая клавиатура с уникальным дизайном. Переключатели Gateron Pro Yellow, магнитные ножки и Bluetooth 5.1. Идеальна для портативного использования.',
        specifications: {
            length: '80 мм',
            width: '60 мм',
            thickness: '25 мм',
            material: 'Алюминий',
            surface: 'Матовая',
            weight: '250 г',
            color: 'Кремовый'
        }
    },
    {
        id: 4,
        name: 'NuPhy Air60 HE',
        slug: 'nuphy_air60_he',
        category: 'Клавиатуры',
        price: 12490,
        image: '/assets/products/keyboards/keyboard4.webp',
        description: 'Низкопрофильная 60% клавиатура с оптическими переключателями Hall Effect. Автономная работа до 4 недель, RGB подсветка и магнитные ножки. Совместима с Windows/macOS/Linux.',
        specifications: {
            length: '295 мм',
            width: '105 мм',
            thickness: '18 мм',
            material: 'Алюминий',
            surface: 'Матовая',
            weight: '520 г',
            color: 'Серый'
        }
    },
    {
        id: 5,
        name: 'Varmilo Minilo 75% Retro VXT81',
        slug: 'varmilo_minilo_75_retro_vxt81',
        category: 'Клавиатуры',
        price: 12490,
        image: '/assets/products/keyboards/keyboard5.webp',
        description: 'Ретро-стилизованная 75% клавиатура с переключателями Kailh Box. Алюминиевый корпус, двойные PBT клавиши и эргономичный дизайн с углом 6°.',
        specifications: {
            length: '320 мм',
            width: '130 мм',
            thickness: '38 мм',
            material: 'Алюминий',
            surface: 'Матовая',
            weight: '900 г',
            color: 'Бежевый'
        }
    },
    {
        id: 6,
        name: 'Keychron K5 SE RGB',
        slug: 'keychron_k5_se_rgb',
        category: 'Клавиатуры',
        price: 12490,
        image: '/assets/products/keyboards/keyboard6.webp',
        description: 'Ультратонкая низкопрофильная клавиатура с переключателями Gateron Low-Profile. RGB подсветка, Bluetooth 5.1 и алюминиевый корпус. Совместимость с Mac/Windows.',
        specifications: {
            length: '330 мм',
            width: '125 мм',
            thickness: '22 мм',
            material: 'Алюминий',
            surface: 'Матовая',
            weight: '600 г',
            color: 'Серебристый'
        }
    },
    {
        id: 7,
        name: 'Беспроводная мышь Lamzu Thorn Charcoal Black с донглом 4К',
        slug: 'lamzu_thorn_charcoal_black',
        category: 'Мыши',
        price: 12490,
        image: '/assets/products/mousepad/mousepad1.webp',
        description: 'Эргономичная беспроводная мышь с сенсором PixArt PAW3395 и частотой опроса 4000 Гц. Ультра-легкий корпус 54г, PTFE ножки и 70 часов автономной работы.',
        specifications: {
            length: '125 мм',
            width: '68 мм',
            thickness: '42 мм',
            material: 'Пластик',
            surface: 'Матовая',
            weight: '54 г',
            color: 'Черный'
        }
    },
    {
        id: 8,
        name: 'Мышь проводная Logitech G G502SE HERO',
        slug: 'logitech_g_g502se_hero',
        category: 'Мыши',
        price: 12490,
        image: '/assets/products/mousepad/mousepad2.webp',
        description: 'Игровая мышь с сенсором HERO 25K и 11 программируемыми кнопками. Регулировка веса до 16г, RGB подсветка и металлические колесики.',
        specifications: {
            length: '132 мм',
            width: '75 мм',
            thickness: '40 мм',
            material: 'Пластик',
            surface: 'Текстурированная',
            weight: '121 г',
            color: 'Черный, Серебристый'
        }
    },
    {
        id: 9,
        name: 'Мышь WLmouse Sword X 8K Magnesium Eva Purple',
        slug: 'sword_x_8k_magnesium_eva_purple',
        category: 'Мыши',
        price: 12490,
        image: '/assets/products/mousepad/mousepad3.webp',
        description: 'Эксклюзивная мышь из магниевого сплава весом 38г. Сенсор PixArt PAW3395, частота опроса 8000 Гц и дизайн в стиле Evangelion.',
        specifications: {
            length: '122 мм',
            width: '64 мм',
            thickness: '39 мм',
            material: 'Магниевый сплав',
            surface: 'Глянцевая',
            weight: '38 г',
            color: 'Фиолетовый'
        }
    },
    {
        id: 10,
        name: 'Мышь WLmouse Sword X 8K Magnesium Black',
        slug: 'sword_x_8k_magnesium_black',
        category: 'Мыши',
        price: 12490,
        image: '/assets/products/mousepad/mousepad4.webp',
        description: 'Ультралегкая игровая мышь (38г) с корпусом из магниевого сплава. Сенсор PixArt PAW3395, частота опроса 8000 Гц и время отклика 0.125 мс.',
        specifications: {
            length: '122 мм',
            width: '64 мм',
            thickness: '39 мм',
            material: 'Магниевый сплав',
            surface: 'Матовая',
            weight: '38 г',
            color: 'Черный'
        }
    },
    {
        id: 11,
        name: 'Мышь WLmouse Beast X Max 8K Lilac',
        slug: 'wlmouse_beast_x_max_8k_lilac',
        category: 'Мыши',
        price: 12490,
        image: '/assets/products/mousepad/mousepad5.webp',
        description: 'Беспроводная мышь весом 28г с сенсором PixArt PAW3395. Корпус из поликарбоната, частота опроса 8000 Гц и 70 часов автономной работы.',
        specifications: {
            length: '118 мм',
            width: '60 мм',
            thickness: '37 мм',
            material: 'Поликарбонат',
            surface: 'Матовая',
            weight: '28 г',
            color: 'Сиреневый'
        }
    },
    {
        id: 12,
        name: 'Набор клавиш «Luis»',
        slug: 'luis',
        category: 'Кейкапы',
        price: 12490,
        image: '/assets/products/keycaps/keycap1.webp',
        description: 'Эксклюзивный набор PBT клавиш с двойным литьем и дизайном в стиле японской анимации. Профиль Cherry, толщина 1.5мм.',
        specifications: {
            length: '180 мм',
            width: '120 мм',
            thickness: '15 мм',
            material: 'PBT',
            surface: 'Матовая',
            weight: '300 г',
            color: 'Мультиколор'
        }
    },
    {
        id: 13,
        name: 'Набор из 4 клавиш «Hassliebe»',
        slug: 'hassliebe',
        category: 'Кейкапы',
        price: 12490,
        image: '/assets/products/keycaps/keycap2.webp',
        description: 'Лимитированные клавиши ручной работы из эпоксидной смолы с 3D дизайном "Сердечный поцелуй". Совместимы с механическими переключателями.',
        specifications: {
            length: '60 мм',
            width: '60 мм',
            thickness: '20 мм',
            material: 'Эпоксидная смола',
            surface: 'Глянцевая',
            weight: '80 г',
            color: 'Розовый, Золотой'
        }
    },
    {
        id: 14,
        name: 'Клавиши «Mac OS» White',
        slug: 'mac_os_white',
        category: 'Кейкапы',
        price: 12490,
        image: '/assets/products/keycaps/keycap3.webp',
        description: 'Набор клавиш с символами macOS для пользователей Apple. Матовый белый PBT пластик, лазерная гравировка символов.',
        specifications: {
            length: '100 мм',
            width: '80 мм',
            thickness: '10 мм',
            material: 'PBT',
            surface: 'Матовая',
            weight: '120 г',
            color: 'Белый'
        }
    },
    {
        id: 15,
        name: 'Клавиши «Mac OS» Colorful',
        slug: 'mac_os_colourful',
        category: 'Кейкапы',
        price: 12490,
        image: '/assets/products/keycaps/keycap4.webp',
        description: 'Яркие клавиши с символами macOS в радужном дизайне. PBT пластик с технологией dye-sublimation. Включает Command, Option, Fn.',
        specifications: {
            length: '110 мм',
            width: '90 мм',
            thickness: '12 мм',
            material: 'PBT',
            surface: 'Матовая',
            weight: '150 г',
            color: 'Радужный'
        }
    },
    {
        id: 16,
        name: 'Клавиши «Linux» Retro White',
        slug: 'linux_retro_white',
        category: 'Кейкапы',
        price: 12490,
        image: '/assets/products/keycaps/keycap5.webp',
        description: 'Ретро-стиль клавиш с символами Linux (Tux, терминал). Бежевый цвет, SA профиль, двойное литье PBT.',
        specifications: {
            length: '120 мм',
            width: '100 мм',
            thickness: '18 мм',
            material: 'PBT',
            surface: 'Матовая',
            weight: '200 г',
            color: 'Бежевый'
        }
    },
    {
        id: 17,
        name: 'Клавиши «Mac OS» Retro White',
        slug: 'mac_os_retro_white',
        category: 'Кейкапы',
        price: 12490,
        image: '/assets/products/keycaps/keycap6.webp',
        description: 'Классические клавиши Apple в ретро стиле 80-х годов. SA профиль, толстый PBT пластик с гравировкой.',
        specifications: {
            length: '90 мм',
            width: '70 мм',
            thickness: '15 мм',
            material: 'PBT',
            surface: 'Матовая',
            weight: '100 г',
            color: 'Бежевый'
        }
    },
    {
        id: 18,
        name: 'Коврик Premium Союз',
        slug: 'kovrik_premium_soyuz',
        category: 'Коврики',
        price: 12490,
        image: '/assets/products/kovriki/kovrik1.webp',
        description: 'Премиальный игровой коврик с дизайном советского космического корабля "Союз". Тканевая поверхность, резиновая основа 5 мм.',
        specifications: {
            length: '900 мм',
            width: '400 мм',
            thickness: '5 мм',
            material: 'Ткань',
            surface: 'Текстурированная',
            weight: '850 г',
            color: 'Синий, Красный'
        }
    },
    {
        id: 19,
        name: 'Коврик Premium Tokyo',
        slug: 'kovrik_premium_tokyo',
        category: 'Коврики',
        price: 12490,
        image: '/assets/products/kovriki/kovrik2.webp',
        description: 'Коврик с неоновым дизайном ночного Токио. Гладкая поверхность для быстрых движений, резиновая основа 4 мм.',
        specifications: {
            length: '800 мм',
            width: '300 мм',
            thickness: '4 мм',
            material: 'Ткань',
            surface: 'Гладкая',
            weight: '600 г',
            color: 'Неоновый'
        }
    },
    {
        id: 20,
        name: 'Коврик Premium Switch',
        slug: 'kovrik_premium_switch',
        category: 'Коврики',
        price: 12490,
        image: '/assets/products/kovriki/kovrik3.webp',
        description: 'Официальный коврик Nintendo Switch с фирменным дизайном. Текстурированная поверхность, экологичная резиновая основа.',
        specifications: {
            length: '700 мм',
            width: '300 мм',
            thickness: '3 мм',
            material: 'Ткань',
            surface: 'Текстурированная',
            weight: '500 г',
            color: 'Красный, Синий'
        }
    },
    {
        id: 21,
        name: 'Коврик Союз Lite Brown',
        slug: 'kovrik_soyuz_lite_brown',
        category: 'Коврики',
        price: 12490,
        image: '/assets/products/kovriki/kovrik4.webp',
        description: 'Облегченная версия коврика "Союз" в ретро-коричневом цвете. Уменьшенная толщина 3 мм, ткань Oxford.',
        specifications: {
            length: '800 мм',
            width: '300 мм',
            thickness: '3 мм',
            material: 'Ткань Oxford',
            surface: 'Текстурированная',
            weight: '450 г',
            color: 'Коричневый'
        }
    },
    {
        id: 22,
        name: 'Коврик Donuts',
        slug: 'kovrik_donuts',
        category: 'Коврики',
        price: 12490,
        image: '/assets/products/kovriki/kovrik5.webp',
        description: 'Игровой коврик с веселым дизайном пончиков. Водоотталкивающая поверхность, противоскользящая резиновая основа.',
        specifications: {
            length: '900 мм',
            width: '400 мм',
            thickness: '4 мм',
            material: 'Ткань',
            surface: 'Водоотталкивающая',
            weight: '750 г',
            color: 'Мультиколор'
        }
    },
];

export const questions: FAQItem[] = [
    {
        question: 'Какие способы оплаты доступны?',
        answer: 'Мы принимаем оплату через <highlight>банковские карты</highlight> (Visa, MasterCard, Мир), а также через системы <highlight>Apple Pay</highlight> и <highlight>Google Pay</highlight>.',
        type: 'info',
        highlights: ['банковские карты', 'Apple Pay', 'Google Pay']
    },
    {
        question: 'Могу ли я оплатить заказ при получении?',
        answer: 'Да, мы поддерживаем оплату <highlight>наличными</highlight> или <highlight>картой</highlight> при получении заказа.',
        type: 'success',
        highlights: ['наличными', 'картой']
    },
    {
        question: 'Как быстро осуществляется доставка?',
        answer: 'Доставка занимает от <highlight>1 до 5 рабочих дней</highlight> в зависимости от вашего региона.',
        type: 'info',
        highlights: ['1 до 5 рабочих дней']
    },
    {
        question: 'Могу ли я отследить свой заказ?',
        answer: 'Да, после оформления заказа вы получите <highlight>трек-номер</highlight> для отслеживания.',
        type: 'success',
        highlights: ['трек-номер']
    },
    {
        question: 'Как выбрать подходящий размер игрового коврика?',
        answer: 'Мы рекомендуем <highlight>измерить доступное пространство</highlight> на вашем столе и выбрать размер, который лучше всего подходит для вашего игрового сетапа.',
        type: 'info',
        highlights: ['измерить доступное пространство']
    },
    {
        question: 'Есть ли гарантия на товары?',
        answer: 'Да, на все товары предоставляется гарантия от <highlight>1 года до 3 лет</highlight> в зависимости от производителя.',
        type: 'success',
        highlights: ['1 года до 3 лет']
    },
    {
        question: 'Как связаться с поддержкой?',
        answer: 'Вы можете написать нам на почту <highlight>support@keebwaves.com</highlight> или воспользоваться <highlight>формой обратной связи</highlight> на сайте.',
        type: 'info',
        highlights: ['support@keebwaves.com', 'формой обратной связи']
    },
    {
        question: 'Что делать, если товар неисправен?',
        answer: '<highlight>Свяжитесь с нашей поддержкой</highlight>, и мы поможем вам с возвратом или заменой товара.',
        type: 'warning',
        highlights: ['Свяжитесь с нашей поддержкой']
    },
    {
        question: 'Какие игровые клавиатуры вы рекомендуете для начинающих?',
        answer: 'Мы рекомендуем клавиатуры с <highlight>механическими переключателями</highlight>, такие как <highlight>Akko</highlight> или <highlight>Keychron</highlight>, для комфортного старта.',
        type: 'info',
        highlights: ['механическими переключателями', 'Akko', 'Keychron']
    }
];