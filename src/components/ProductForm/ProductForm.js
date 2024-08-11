import { useState } from 'react';
import styles from './ProductForm.module.scss';
import Button from '../Button/Button';
import clsx from 'clsx';
import OptionColor from '../OptionColor/OptionColor';
import OptionSize from '../OptionSize/OptionSize';

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
            <OptionSize sizes={props.sizes} changeSize={props.changeSize} currentSize={props.currentSize} />
            <OptionColor prepareColorClassName={prepareColorClassName} colors={props.colors} changeColor={props.changeColor} currentColor={props.currentColor} />
            <Button className={styles.button} onClick={sendSummary}>
                <span className="fa fa-shopping-cart" />
            </Button>
        </form>
    );
};

export default ProductForm;