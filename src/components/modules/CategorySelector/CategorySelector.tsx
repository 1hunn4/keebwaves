import styles from './categorySelector.module.scss';
import { Category } from '@/types';

interface CategorySelectorProps {
    onCategoryClick: (category: string) => void;
    selectedCategory?: string;
    categories: Category[];
}

const CategorySelector: React.FC<CategorySelectorProps> = ({ onCategoryClick, selectedCategory, categories }) => {
    return (
        <div id="catalog" className={styles.categorySelector}>
            <div className={styles.categorySelector__icons}>
                {categories.map((category) => (
                    <div
                        key={category.name}
                        className={`${styles.categorySelector__icon} ${selectedCategory === category.name ? styles.categorySelector__active : ''
                            }`}
                        onClick={() => onCategoryClick(category.name)}
                    >
                        <img src={category.icon} alt={category.name} />
                        <span className={styles.categorySelector__iconText}>{category.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategorySelector;