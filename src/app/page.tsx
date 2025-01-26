import Header from '@/components/Header/Header';
import BannerVideo from '@/components/BannerVideo/BannerVideo';
import ProductCatalogView from '@/components/ProductCatalogView/ProductCatalogView';


const Home = () => {
  return (
    <>
      <Header />
      <BannerVideo videoSrc={'/assets/bannerVideo/bannerVideo.webm'} />
      <main>
        <ProductCatalogView />
      </main>
    </>
  );
}

export default Home;