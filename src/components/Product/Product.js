import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import ProductImage from '../ProductImage/ProductImage.js';
import { useState, useEffect } from 'react';

const Product = props => {
  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name); 
  const [price, setCurrentPrice] = useState(props.basePrice);

  const prepareColorClassName = color => {
    return 'color' + color[0].toUpperCase() + color.substr(1).toLowerCase();
  };

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

  const sendSummary = (e) => {
    e.preventDefault();
    console.log('Send summary function called');
    console.log('Current Color:', currentColor);
    console.log('Current Size:', currentSize);
    console.log('Price:', price);
  };

  return (
    <article className={styles.product}>
      <ProductImage name={props.name} color={currentColor} title={props.title}/>
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {price}$</span>
        </header>
        <form>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {props.sizes.map(size => (
                <li key={size.name}>
                  <button 
                    type="button" 
                    onClick={() => changeSize(size.name)} 
                    className={size.name === currentSize ? styles.active : ''}
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
                    onClick={() => changeColor(color)} 
                    className={clsx(styles[prepareColorClassName(color)], color === currentColor ? styles.active : '')} 
                  />
                </li>
              ))}
            </ul>
          </div>
          <Button className={styles.button} onClick={sendSummary}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
      </div>
    </article>
  );
};

export default Product;