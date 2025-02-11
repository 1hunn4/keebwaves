"use client";

import { useState } from 'react';
import styles from './productCatalogView.module.scss';
import CategorySelector from '@/components/modules/CategorySelector/CategorySelector';
import ProductCard from '@/components/modules/ProductCard/ProductCard';
import { categories, products } from '@/data';

const ProductCatalogView = () => {
    const [selectedCategory, setSelectedCategory] = useState(categories[0]);

    const filteredProducts = products.filter(
        (product) => product.category === selectedCategory.name
    );

    return (
        <>
            <CategorySelector
                onCategoryClick={(categoryName) => {
                    const category = categories.find((c) => c.name === categoryName);
                    if (category) setSelectedCategory(category);
                }}
                selectedCategory={selectedCategory.name}
                categories={categories}
            />
            <div className={styles.productCatalogView__products}>
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))
                ) : (
                    <h2>В этой категории пока нет товаров</h2>
                )}
            </div>
        </>
    );
};

export default ProductCatalogView;