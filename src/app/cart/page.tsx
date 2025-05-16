'use client'

import React, { useState } from 'react';
import Header from '@/components/modules/Header/Header';
import styles from './cart.module.scss';
import { useCart } from '@/contexts/CartContext';
import Link from 'next/link';
import CheckoutModal from '@/components/modules/CheckoutModal/CheckoutModal';

const CartPage = () => {
  const { cartItems, removeFromCart, totalPrice, totalItems, clearCart } = useCart();
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [trackingNumber, setTrackingNumber] = useState('');

  const handleCheckout = () => {
  const generatedTracking = `CDEK-${Date.now().toString().slice(-8)}`;
  setTrackingNumber(generatedTracking);
  setIsCheckoutOpen(true);
  setTimeout(() => clearCart(), 1000);
};

  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.mainSection}>
          <h1 className={styles.title}>Корзина</h1>
          
          {cartItems.length === 0 ? (
            <div className={styles.emptyCart}>
              <p>Ваша корзина пуста</p>
              <Link href="/" className={styles.continueShopping}>
                Продолжить покупки
              </Link>
            </div>
          ) : (
            <>
              <div className={styles.itemsList}>
                {cartItems.map((item) => (
                  <div key={item.product.id} className={styles.cartItem}>
                    <img 
                      src={item.product.image} 
                      alt={item.product.name} 
                      className={styles.productImage}
                    />
                    <div className={styles.productInfo}>
                      <h3>{item.product.name}</h3>
                      <p>Количество: {item.quantity}</p>
                      <p>Цена: {item.product.price.toLocaleString('ru-RU')} ₽</p>
                    </div>
                    <button 
                      onClick={() => removeFromCart(item.product.id)}
                      className={styles.removeButton}
                    >
                      Удалить
                    </button>
                  </div>
                ))}
              </div>

              <div className={styles.summary}>
                <h2>Итого: {totalPrice.toLocaleString('ru-RU')} ₽</h2>
                <button 
                  onClick={handleCheckout}
                  className={styles.checkoutButton}
                >
                  Оформить заказ
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        totalPrice={totalPrice}
        trackingNumber={trackingNumber}
        cartItems={cartItems}
      />
    </>
  );
};

export default CartPage;