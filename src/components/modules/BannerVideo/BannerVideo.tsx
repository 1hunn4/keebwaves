import styles from './bannerVideo.module.scss';

interface BannerVideoProps {
    videoSrc: string;
}

const BannerVideo: React.FC<BannerVideoProps> = ({ videoSrc }) => (
    <video className={styles.bannerVideo} src={videoSrc} autoPlay preload='auto' muted loop playsInline>
        <source src={videoSrc} type="video/webm" />
        Ваш браузер не поддерживает видео.
    </video>
);

export default BannerVideo;