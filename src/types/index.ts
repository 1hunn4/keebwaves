export interface Category {
    name: string;
    icon: string;
}

export interface Product {
    id: number;
    name: string;
    category: string;
    slug: string;
    price: number;
    image: string;
}