import Header from '@/components/modules/Header/Header';
import styles from './tracking.module.scss';

const TrackingPage = () => {
    return (
        <>
            <Header />
            <div className={styles.container}>
                <div className={styles.mainSection}>
                    <div className={styles.header}>
                        <h1 className={styles.title}>Как отследить заказ?</h1>
                    </div>

                    <div className={styles.content}>
                        <div className={styles.step}>
                            <div className={styles.stepNumber}>1</div>
                            <div className={styles.stepContent}>
                                Перейдите по ссылке на страницу{' '}
                                <a
                                    href="https://cdek.ru/ru/tracking"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.link}
                                >
                                    cdek.ru/ru/tracking
                                </a>
                            </div>
                        </div>

                        <div className={styles.step}>
                            <div className={styles.stepNumber}>2</div>
                            <div className={styles.stepContent}>
                                Вставьте номер заказа в поле «Номер заказа»
                            </div>
                        </div>

                        <div className={styles.step}>
                            <div className={styles.stepNumber}>3</div>
                            <div className={styles.stepContent}>
                                Нажмите кнопку «Отследить»
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TrackingPage;