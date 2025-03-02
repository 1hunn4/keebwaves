'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './header.module.scss';
import { useRouter, usePathname } from 'next/navigation';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleScroll = async (event: React.MouseEvent, id: string) => {
        event.preventDefault();
        if (pathname !== '/') {
            await router.push('/');
            setTimeout(() => scrollToElement(id), 500);
        } else {
            scrollToElement(id);
        }
    };

    const scrollToElement = (id: string) => {
        const target = document.getElementById(id);
        if (target) {
            const offsetPosition = target.getBoundingClientRect().top + window.scrollY - 30;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            const id = hash.substring(1);
            scrollToElement(id);
        }
    }, [pathname]);

    return (
        <header className={`${styles.header} ${isScrolled ? styles['header--scrolled'] : ''}`}>
            <div className={styles.header__container}>
                <Link href="/" className={styles.header__logo}>KeebWaves</Link>
                <nav className={styles.header__nav}>
                    <Link href="/#catalog" onClick={(event) => handleScroll(event, "catalog")} className={styles.header__link}>Каталог товаров</Link>
                    <Link href="/tracking" className={styles.header__link}>Как отследить заказ</Link>
                    <Link href="/faq" className={styles.header__link}>FAQ</Link>
                    <Link href="/" className={styles.header__link}>Поддержка</Link>
                </nav>
                <button className={styles.header__cart}><img src='/assets/cart.svg' alt='Корзина' /></button>
            </div>
        </header>
    );
};

export default Header;