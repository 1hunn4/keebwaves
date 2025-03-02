import InfoIcon from '../../public/assets/faq/info-icon.svg';
import CheckIcon from '../../public/assets/faq/check-icon.svg';
import WarningIcon from '../../public/assets/faq/warning-icon.svg';


export interface Category {
    name: string;
    icon: string;
}

export interface Product {
    id: number;
    name: string;
    category: string;
    slug: string;
    price: number;
    image: string;
    description: string;
    specifications: {
        length: string;
        width: string;
        thickness: string;
        material: string;
        surface: string;
        weight: string;
        color: string;
    }
}

export type AnswerType = 'info' | 'success' | 'warning';

export const iconMap = {
    info: InfoIcon,
    success: CheckIcon,
    warning: WarningIcon
};

export interface FAQItem {
  question: string;
  answer: string;
  type?: AnswerType;
  highlights?: string[];
}