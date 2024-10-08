import styles from './ProductImage.module.scss';
import clsx from 'clsx';

const ProductImage = (props) => {



    return (
        <div className={styles.imageContainer}>
            <img
                className={styles.image}
                alt={`${props.title}`}
                src={`${process.env.PUBLIC_URL}/images/products/shirt-${props.name}--${props.color}.jpg`} />
        </div>
    )
};

export default ProductImage;


