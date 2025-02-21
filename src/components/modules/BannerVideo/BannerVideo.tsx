import styles from './bannerVideo.module.scss';

interface BannerVideoProps {
    videoSrc: string;
}

const BannerVideo: React.FC<BannerVideoProps> = ({ videoSrc }) => (
    <div className={styles.bannerVideoContainer}>
        <video className={styles.bannerVideo} src={videoSrc} autoPlay preload='auto' muted loop playsInline>
            <source src={videoSrc} type="video/webm" />
        </video>
        <div className={styles.bannerVideo__containerText}>
            <div className={styles.bannerVideo__mainText}>
                Превосходство. Искусство. Победа.
            </div>
            <span className={styles.bannerVideo__description}>Игровая периферия KeebWaves</span>
        </div>
    </div>
);

export default BannerVideo;