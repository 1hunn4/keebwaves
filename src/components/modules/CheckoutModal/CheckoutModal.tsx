"use client";

import React from "react";
import styles from "./checkoutModal.module.scss";
import { Product } from "@/types";

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  totalPrice: number;
  trackingNumber: string;
  cartItems: Array<{ product: Product; quantity: number }>;
}

const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  totalPrice,
  trackingNumber,
  cartItems,
}) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <h2 className={styles.modalTitle}>Заказ оформлен</h2>

        <div className={styles.receipt}>
          <div className={styles.itemsList}>
            {cartItems.map((item) => (
              <div key={item.product.id} className={styles.receiptItem}>
                <span>
                  {item.product.name} x{item.quantity}
                </span>
                <span>{item.product.price * item.quantity} ₽</span>
              </div>
            ))}
          </div>

          <div className={styles.total}>
            <span>Итого:</span>
            <span>{totalPrice.toLocaleString("ru-RU")} ₽</span>
          </div>

          <div className={styles.trackingInfo}>
            <p>Номер для отслеживания:</p>
            <strong>{trackingNumber}</strong>
          </div>

          <button onClick={onClose} className={styles.closeButton}>
            Закрыть
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutModal;
