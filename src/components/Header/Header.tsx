'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './header.module.scss';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => window.scrollY > 50 ? setIsScrolled(true) : setIsScrolled(false);

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isScrolled]);

    return (
        <>
            <header className={`${styles.header} ${isScrolled ? styles['header--scrolled'] : ''}`}>
                <div className={styles.header__container}>
                    <div className={styles.header__logo}>KeebWaves</div>
                    <nav className={styles.header__nav}>
                        <Link href="/" className={styles.header__link}>Каталог товаров</Link>
                        <Link href="/" className={styles.header__link}>Как отследить заказ</Link>
                        <Link href="/" className={styles.header__link}>FAQ</Link>
                        <Link href="/" className={styles.header__link}>Поддержка</Link>
                    </nav>
                </div>
            </header>
        </>
    );
};

export default Header;