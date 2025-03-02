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
        description: 'Погрузись в мир ярких лет и хазова!\nЭтот игровой коврик с арт-дизайном в стиле цифровой абстракции мгновенно привлекает внимание. Идеальный выбор для тех, кто любит выделяться победами! Мягкое покрытие обеспечивает непревзойденный контроль и скорость движения мышки, подстраиваясь под любой стиль игры. Резиновая основа гарантирует коврику неподвижность при самых резких движениях... Подходит тем, кто ценит стиль, энергию и практичность.',
        specifications: {
            length: '800 мм',
            width: '600 мм',
            thickness: '4 мм',
            material: 'Ткань Tokyo',
            surface: 'Текстурированная',
            weight: '500 г',
            color: 'Голубой, розовый, белый'
        }
    },
    {
        id: 2,
        name: 'Akko MOD 007 PC Blue on White',
        slug: 'akko_mod_007_pc_blue_on_white',
        category: 'Клавиатуры',
        price: 12490,
        image: '/assets/products/keyboards/keyboard2.webp',
        description: 'Погрузись в мир ярких лет и хазова!\nЭтот игровой коврик с арт-дизайном в стиле цифровой абстракции мгновенно привлекает внимание. Идеальный выбор для тех, кто любит выделяться победами! Мягкое покрытие обеспечивает непревзойденный контроль и скорость движения мышки, подстраиваясь под любой стиль игры. Резиновая основа гарантирует коврику неподвижность при самых резких движениях... Подходит тем, кто ценит стиль, энергию и практичность.',
        specifications: {
            length: '800 мм',
            width: '600 мм',
            thickness: '4 мм',
            material: 'Ткань Tokyo',
            surface: 'Текстурированная',
            weight: '500 г',
            color: 'Голубой, розовый, белый'
        }
    },
    {
        id: 3,
        name: 'Akko MOD 007 PC Blue on White',
        slug: 'akko_mod_007_pc_blue_on_white_2',
        category: 'Клавиатуры',
        price: 12490,
        image: '/assets/products/keyboards/keyboard2.webp',
        description: 'Погрузись в мир ярких лет и хазова!\nЭтот игровой коврик с арт-дизайном в стиле цифровой абстракции мгновенно привлекает внимание. Идеальный выбор для тех, кто любит выделяться победами! Мягкое покрытие обеспечивает непревзойденный контроль и скорость движения мышки, подстраиваясь под любой стиль игры. Резиновая основа гарантирует коврику неподвижность при самых резких движениях... Подходит тем, кто ценит стиль, энергию и практичность.',
        specifications: {
            length: '800 мм',
            width: '600 мм',
            thickness: '4 мм',
            material: 'Ткань Tokyo',
            surface: 'Текстурированная',
            weight: '500 г',
            color: 'Голубой, розовый, белый'
        }
    },
    {
        id: 4,
        name: 'Akko MOD 007 PC Blue on White',
        slug: 'akko_mod_007_pc_blue_on_white_3',
        category: 'Клавиатуры',
        price: 12490,
        image: '/assets/products/keyboards/keyboard3.png',
        description: 'Погрузись в мир ярких лет и хазова!\nЭтот игровой коврик с арт-дизайном в стиле цифровой абстракции мгновенно привлекает внимание. Идеальный выбор для тех, кто любит выделяться победами! Мягкое покрытие обеспечивает непревзойденный контроль и скорость движения мышки, подстраиваясь под любой стиль игры. Резиновая основа гарантирует коврику неподвижность при самых резких движениях... Подходит тем, кто ценит стиль, энергию и практичность.',
        specifications: {
            length: '800 мм',
            width: '600 мм',
            thickness: '4 мм',
            material: 'Ткань Tokyo',
            surface: 'Текстурированная',
            weight: '500 г',
            color: 'Голубой, розовый, белый'
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