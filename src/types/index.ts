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
    description: string;
    specifications: {
        length: string;
        width: string;
        thickness: string;
        material: string;
        surface: string;
        weight: string;
        color: string;
    }
}