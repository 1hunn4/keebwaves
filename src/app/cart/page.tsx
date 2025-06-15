"use client";

import React, { useState, useEffect } from "react";
import styles from "./cart.module.scss";
import { useCart } from "@/contexts/CartContext";
import Link from "next/link";
import Header from "@/components/modules/Header/Header";

const UserForm = ({ userData, setUserData, onSubmit }) => {
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!userData.fullName.trim()) newErrors.fullName = "Введите ФИО";
    if (!userData.phone.trim()) newErrors.phone = "Введите телефон";
    if (!userData.email.trim()) newErrors.email = "Введите почту";
    if (!userData.address.trim()) newErrors.address = "Введите адрес";

    if (userData.email.trim() && !/\S+@\S+\.\S+/.test(userData.email)) {
      newErrors.email = "Некорректный email";
    }

    if (
      userData.phone.trim() &&
      !/^[\d+]{10,}$/.test(userData.phone.replace(/\D/g, ""))
    ) {
      newErrors.phone = "Некорректный телефон";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onSubmit();
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Форматирование телефона
    if (name === "phone") {
      const cleaned = value.replace(/\D/g, "");
      let formatted = cleaned;

      if (cleaned.length > 0) {
        formatted = "+7 (" + cleaned.substring(1, 4);
        if (cleaned.length > 4) formatted += ") " + cleaned.substring(4, 7);
        if (cleaned.length > 7) formatted += "-" + cleaned.substring(7, 9);
        if (cleaned.length > 9) formatted += "-" + cleaned.substring(9, 11);
      }

      setUserData((prev) => ({ ...prev, [name]: formatted }));
    } else {
      setUserData((prev) => ({ ...prev, [name]: value }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.userForm}>
      <div className={styles.formGroup}>
        <label>ФИО*</label>
        <input
          type="text"
          name="fullName"
          value={userData.fullName}
          onChange={handleChange}
          placeholder="Иванов Иван Иванович"
          className={errors.fullName ? styles.error : ""}
        />
        {errors.fullName && (
          <span className={styles.errorText}>{errors.fullName}</span>
        )}
      </div>

      <div className={styles.formGroup}>
        <label>Телефон*</label>
        <input
          type="tel"
          name="phone"
          value={userData.phone}
          onChange={handleChange}
          placeholder="+7 (999) 123-45-67"
          className={errors.phone ? styles.error : ""}
        />
        {errors.phone && (
          <span className={styles.errorText}>{errors.phone}</span>
        )}
      </div>

      <div className={styles.formGroup}>
        <label>Email*</label>
        <input
          type="email"
          name="email"
          value={userData.email}
          onChange={handleChange}
          placeholder="example@mail.ru"
          className={errors.email ? styles.error : ""}
        />
        {errors.email && (
          <span className={styles.errorText}>{errors.email}</span>
        )}
      </div>

      <div className={styles.formGroup}>
        <label>Адрес доставки*</label>
        <input
          type="text"
          name="address"
          value={userData.address}
          onChange={handleChange}
          placeholder="г. Москва, ул. Пушкина, д. 10"
          className={errors.address ? styles.error : ""}
        />
        {errors.address && (
          <span className={styles.errorText}>{errors.address}</span>
        )}
      </div>

      <button type="submit" className={styles.submitButton}>
        Подтвердить заказ
      </button>
    </form>
  );
};

const CheckoutModal = ({
  isOpen,
  onClose,
  totalPrice,
  trackingNumber,
  cartItems,
  userData,
  setUserData,
  checkoutStep,
  setCheckoutStep,
}) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        {checkoutStep === "form" ? (
          <>
            <h2>Оформление заказа</h2>
            <p>Пожалуйста, заполните ваши данные</p>
            <UserForm
              userData={userData}
              setUserData={setUserData}
              onSubmit={() => setCheckoutStep("confirmation")}
            />
          </>
        ) : (
          <>
            <h2>Заказ оформлен!</h2>
            <p>Номер отслеживания: {trackingNumber}</p>
            <p>Итоговая стоимость: {totalPrice.toLocaleString("ru-RU")} ₽</p>

            <div className={styles.userInfo}>
              <h3>Ваши данные:</h3>
              <p>
                <strong>ФИО:</strong> {userData.fullName}
              </p>
              <p>
                <strong>Телефон:</strong> {userData.phone}
              </p>
              <p>
                <strong>Email:</strong> {userData.email}
              </p>
              <p>
                <strong>Адрес:</strong> {userData.address}
              </p>
            </div>

            <div className={styles.itemsList}>
              <h3>Состав заказа:</h3>
              {cartItems.map((item) => (
                <div key={item.product.id} className={styles.modalCartItem}>
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className={styles.modalProductImage}
                  />
                  <div className={styles.modalProductInfo}>
                    <h3>{item.product.name}</h3>
                    <p>Количество: {item.quantity}</p>
                    <p>Цена: {item.product.price.toLocaleString("ru-RU")} ₽</p>
                  </div>
                </div>
              ))}
            </div>
            <button onClick={onClose} className={styles.closeButton}>
              Закрыть
            </button>
          </>
        )}
      </div>
    </div>
  );
};

const CartPage = () => {
  const { cartItems, removeFromCart, totalPrice, totalItems, clearCart } =
    useCart();
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [trackingNumber, setTrackingNumber] = useState("");
  const [checkoutStep, setCheckoutStep] = useState("form");

  const [userData, setUserData] = useState({
    fullName: "",
    phone: "",
    email: "",
    address: "",
  });

  const handleCheckout = () => {
    setIsCheckoutOpen(true);
    setCheckoutStep("form");
  };

  useEffect(() => {
    if (isCheckoutOpen && checkoutStep === "confirmation") {
      const generatedTracking = `CDEK-${Date.now().toString().slice(-8)}`;
      setTrackingNumber(generatedTracking);
      setTimeout(() => clearCart(), 25000);
    }
  }, [checkoutStep, isCheckoutOpen]);

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
                      <p>
                        Цена: {item.product.price.toLocaleString("ru-RU")} ₽
                      </p>
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
                <h2>Итого: {totalPrice.toLocaleString("ru-RU")} ₽</h2>
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
        userData={userData}
        setUserData={setUserData}
        checkoutStep={checkoutStep}
        setCheckoutStep={setCheckoutStep}
      />
    </>
  );
};

export default CartPage;
