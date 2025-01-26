"use client";

import { useState } from 'react';
import styles from './productCatalogView.module.scss';
import CategorySelector from '@/components/CategorySelector/CategorySelector';

export interface Categories {
    name: string;
    icon: string;
}

export interface Product {
    id: number;
    name: string;
    category: string;
    price: number;
    image: string;
}

const categories: Categories[] = [
    { name: 'Клавиатуры', icon: '/assets/mousepad.svg' },
    { name: 'Кейкапы', icon: '/assets/mousepad.svg' },
    { name: 'Мыши', icon: '/assets/mousepad.svg' },
    { name: 'Коврики', icon: '/assets/mousepad.svg' },
];

const ProductCatalogView = () => {
    const [selectedCategory, setSelectedCategory] = useState<Categories>(categories[0]);
    return (
        <>
            <CategorySelector
                onCategoryClick={(categoryName) => {
                    const category = categories.find((categoryObject) => categoryObject.name === categoryName);
                    return category ? setSelectedCategory(category) : null;
                }}
                selectedCategory={selectedCategory.name}
                categories={categories}
            />
            <div className={styles.productCatalogView__products}>
                {selectedCategory && (
                    <h2>Товары по категории: {selectedCategory.name}</h2>
                )}
            </div>
        </>
    );
};

export default ProductCatalogView;