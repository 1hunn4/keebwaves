import { notFound } from 'next/navigation';
import { products } from '@/data';

interface ProductPageProps {
    params: { slug: string };
}

const ProductPage = ({ params }: ProductPageProps) => {
    const product = products.find((p) => p.slug === params.slug);

    if (!product) {
        return notFound();
    }

    return (
        <div className="productPage">
            <img src={product.image} alt={product.name} />
            <h1>{product.name}</h1>
            <p>{product.price.toLocaleString('ru-RU')} ₽</p>
            <button>Добавить в корзину</button>
        </div>
    )

}

export default ProductPage;