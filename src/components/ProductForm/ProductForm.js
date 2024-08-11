import { useState } from 'react';
import styles from './ProductForm.module.scss';
import Button from '../Button/Button';
import clsx from 'clsx';

const ProductForm = props => {
    const prepareColorClassName = color => {
        return 'color' + color[0].toUpperCase() + color.substr(1).toLowerCase();
    };

    const sendSummary = (e) => {
        e.preventDefault();
        console.log('Send summary function called');
        console.log('Current Color:', props.currentColor);
        console.log('Current Size:', props.currentSize);
        console.log('Price:', props.price);
      };

    return (
        <form>
            <div className={styles.sizes}>
                <h3 className={styles.optionLabel}>Sizes</h3>
                <ul className={styles.choices}>
                    {props.sizes.map(size => (
                        <li key={size.name}>
                            <button
                                type="button"
                                onClick={() => props.changeSize(size.name)}
                                className={size.name === props.currentSize ? styles.active : ''}
                            >
                                {size.name}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={styles.colors}>
                <h3 className={styles.optionLabel}>Colors</h3>
                <ul className={styles.choices}>
                    {props.colors.map(color => (
                        <li key={color}>
                            <button
                                type="button"
                                onClick={() => props.changeColor(color)}
                                className={clsx(styles[prepareColorClassName(color)], color === props.currentColor ? styles.active : '')}
                            />
                        </li>
                    ))}
                </ul>
            </div>
            <Button className={styles.button} onClick={sendSummary}>
                <span className="fa fa-shopping-cart" />
            </Button>
        </form>
    );
};

export default ProductForm;