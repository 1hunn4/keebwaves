'use client';
import { useState } from 'react';
import { notFound } from 'next/navigation';
import { products } from '@/data';
import ProductCard from '@/components/modules/ProductCard/ProductCard';
import Header from '@/components/modules/Header/Header';
import styles from './productPage.module.scss';
import { useCart } from '@/contexts/CartContext';

interface ProductPageProps {
  params: { slug: string };
}

const ProductPage = ({ params }: ProductPageProps) => {
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
      setIsAdded(true);
      setTimeout(() => setIsAdded(false), 2000);
    }
  };

  const product = products.find((p) => p.slug === params.slug);
  const relatedProducts = products.filter((p) => p.category === product?.category && p.id !== product?.id).slice(0, 4);

  if (!product) {
    return notFound();
  }

  return (
    <>
      <Header />
      <div className={styles.container}>
        <section className={styles.mainSection}>
          <div className={styles.mediaContainer}>
            <img
              src={product.image}
              alt={product.name}
              className={styles.mainImage}
            />
          </div>

          <div className={styles.content}>
            <div className={styles.header}>
              <h1 className={styles.title}>{product.name}</h1>
              <div className={styles.price}>{product.price.toLocaleString('ru-RU')} ₽</div>
            </div>

            <div className={styles.description}>
              {product.description.split('\n').map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>

            <div className={styles.specs}>
              <h2 className={styles.specsTitle}>Характеристики</h2>
              <div className={styles.specsGrid}>
                <div className={styles.specItem}>
                  <span className={styles.specLabel}>Длина</span>
                  <span className={styles.specValue}>{product.specifications.length}</span>
                </div>
                <div className={styles.specItem}>
                  <span className={styles.specLabel}>Ширина</span>
                  <span className={styles.specValue}>{product.specifications.width}</span>
                </div>
                <div className={styles.specItem}>
                  <span className={styles.specLabel}>Толщина</span>
                  <span className={styles.specValue}>{product.specifications.thickness}</span>
                </div>
                <div className={styles.specItem}>
                  <span className={styles.specLabel}>Материал</span>
                  <span className={styles.specValue}>{product.specifications.material}</span>
                </div>
                <div className={styles.specItem}>
                  <span className={styles.specLabel}>Поверхность</span>
                  <span className={styles.specValue}>{product.specifications.surface}</span>
                </div>
                <div className={styles.specItem}>
                  <span className={styles.specLabel}>Вес</span>
                  <span className={styles.specValue}>{product.specifications.weight}</span>
                </div>
                <div className={styles.specItem}>
                  <span className={styles.specLabel}>Цвет</span>
                  <span className={styles.specValue}>{product.specifications.color}</span>
                </div>
              </div>
            </div>

            <button
              className={`${styles.addToCart} ${isAdded ? styles.added : ''}`}
              onClick={handleAddToCart}
            >
              {isAdded ? 'Добавлено!' : 'Добавить в корзину'}
              <span className={styles.cartIcon}></span>
            </button>
          </div>
        </section>

        {relatedProducts.length > 0 && (
          <section className={styles.related}>
            <h2 className={styles.relatedTitle}>Похожие товары</h2>
            <div className={styles.relatedGrid}>
              {relatedProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default ProductPage;