import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import ProductImage from '../ProductImage/ProductImage.js';
import ProductForm from '../ProductForm/ProductForm.js';
import { useState, useEffect } from 'react';

const Product = props => {
  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name); 
  const [price, setCurrentPrice] = useState(props.basePrice);

  const changeSize = size => {
    setCurrentSize(size);
  };

  const changeColor = color => {
    setCurrentColor(color);
  };

  useEffect(() => {
    const priceAddition = props.sizes.find(size => size.name === currentSize);
    if (priceAddition) {
      const priceTotal = props.basePrice + priceAddition.additionalPrice;
      setCurrentPrice(priceTotal);
    }
  }, [currentSize, props.sizes, props.basePrice]);

  return (
    <article className={styles.product}>
      <ProductImage name={props.name} color={currentColor} title={props.title}/>
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {price}$</span>
        </header>
        <ProductForm colors={props.colors} sizes={props.sizes} changeSize={changeSize} changeColor={changeColor} currentSize={currentSize} currentColor={currentColor} price={price} />
      </div>
    </article>
  );
};

export default Product;