import Header from '@/components/modules/Header/Header';
import BannerVideo from '@/components/modules/BannerVideo/BannerVideo';
import ProductCatalogView from '@/components/modules/ProductCatalogView/ProductCatalogView';


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