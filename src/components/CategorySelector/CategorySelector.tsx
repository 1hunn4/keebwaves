import styles from './categorySelector.module.scss';
import { Categories } from '../ProductCatalogView/ProductCatalogView';


interface CategorySelectorProps {
    onCategoryClick: (category: string) => void;
    selectedCategory?: string;
    categories: Categories[];
}

const CategorySelector: React.FC<CategorySelectorProps> = ({ onCategoryClick, selectedCategory, categories }) => {
    return (
        <>
            <div className={styles.categorySelector}>
                <div className={styles.categorySelector__icons}>
                    {categories.map((category) => (
                        <div
                            key={category.name}
                            className={`${styles.categorySelector__icon}
                             ${
                                selectedCategory === category.name ? styles.categorySelector__active : ''
                             }`
                            }
                            onClick={() => onCategoryClick(category.name)}
                        >
                            <img src={category.icon} alt={category.name} />
                            <span className={styles.categorySelector__iconText}>{category.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default CategorySelector;