import { Category, Product } from '@/types';

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
        image: '/assets/products/keyboards/keyboard1.webp'
    },
    {
        id: 2,
        name: 'Akko MOD 007 PC Blue on White',
        slug: 'akko_mod_007_pc_blue_on_white',
        category: 'Клавиатуры',
        price: 12490,
        image: '/assets/products/keyboards/keyboard2.webp'
    },
    {
        id: 3,
        name: 'Akko MOD 007 PC Blue on White',
        slug: 'akko_mod_007_pc_blue_on_white_2',
        category: 'Клавиатуры',
        price: 12490,
        image: '/assets/products/keyboards/keyboard2.webp'
    },
    {
        id: 4,
        name: 'Akko MOD 007 PC Blue on White',
        slug: 'akko_mod_007_pc_blue_on_white_3',
        category: 'Клавиатуры',
        price: 12490,
        image: '/assets/products/keyboards/keyboard3.png'
    },
];