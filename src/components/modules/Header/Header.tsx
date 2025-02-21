'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './header.module.scss';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleScroll = (event: React.MouseEvent, id: string) => {
        event.preventDefault();
        const target = document.getElementById(id);

        if (target) {
            const offsetPosition = target.getBoundingClientRect().top + window.scrollY - 30;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
    };

    return (
        <header className={`${styles.header} ${isScrolled ? styles['header--scrolled'] : ''}`}>
            <div className={styles.header__container}>
                <div className={styles.header__logo}>KeebWaves</div>
                <nav className={styles.header__nav}>
                    <Link href="#catalog" onClick={(event) => handleScroll(event, "catalog")} className={styles.header__link}>Каталог товаров</Link>
                    <Link href="/tracking" className={styles.header__link}>Как отследить заказ</Link>
                    <Link href="/" className={styles.header__link}>FAQ</Link>
                    <Link href="/" className={styles.header__link}>Поддержка</Link>
                </nav>
                <button className={styles.header__cart} ><img src='/assets/cart.svg' alt='Корзина' /></button>
            </div>
        </header>
    );
};

export default Header;