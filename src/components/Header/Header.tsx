'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './header.module.scss';

const Header = () => {
    const [isHidden, setIsHidden] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsHidden(true);
            } else {
                setIsHidden(false);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    return (
        <header className={`${styles.header} ${isHidden ? styles['header--hidden'] : ''}`}>
            <div className={styles.header__container}>
                <div className={styles.header__logo}>KeebWaves</div>
                <nav className={styles.header__nav}>
                    {/* TODO: change href and text content */}
                    <Link href="/" className={styles.header__nav_link}>TODO: ADD</Link>
                    <Link href="/" className={styles.header__nav_link}>TODO: ADD</Link>
                    <Link href="/" className={styles.header__nav_link}>TODO: ADD</Link>
                    <Link href="/" className={styles.header__nav_link}>TODO: ADD</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;