import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import { useState, useEffect } from 'react';

const Product = props => {
  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name); 
  const [price, setCurrentPrice] = useState(props.basePrice);

  // console.log(price);

  const prepareColorClassName = currentColor => {
    return 'color' + currentColor[0].toUpperCase() + currentColor.substr(1).toLowerCase();
  }

  const changeSize= size => {
    setCurrentSize(size);
  } 

  const changeColor= color => {
    setCurrentColor(color);
  } 

  useEffect(() => {
    const priceAddition = props.sizes.find(size => size.name === currentSize);
    const priceTotal = props.basePrice + priceAddition.additionalPrice;
    setCurrentPrice(priceTotal);;
  }, [currentSize]);

  const sendSummary = () => {

  }
  
  return (
    <article className={styles.product}>
      <div className={styles.imageContainer}>
        <img 
          className={styles.image}
          alt={`${props.title}`}
          src={`${process.env.PUBLIC_URL}/images/products/shirt-${props.name}--${currentColor}.jpg`} />
      </div>
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {price}$</span>
        </header>
        <form>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {props.sizes.map(size => <li><button type="button" onClick={() => changeSize(size.name)} className={size.name == currentSize && styles.active}>{size.name}</button></li>)}
              {/* <li><button type="button" className={styles.active}>S</button></li>
              <li><button type="button">M</button></li>
              <li><button type="button">L</button></li>
              <li><button type="button">XL</button></li> */}
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              {props.colors.map(color => <li><button type="button" onClick={() => changeColor(color)} className={clsx(styles[prepareColorClassName(color)], color == currentColor && styles.active)} /></li>)}
              {/* <li><button type="button" className={clsx(styles.colorBlack, styles.active)} /></li>
              <li><button type="button" className={clsx(styles.colorRed)} /></li>
              <li><button type="button" className={clsx(styles.colorWhite)} /></li> */}
            </ul>
          </div>
          <Button className={styles.button} onSubmit={() => sendSummary()}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
      </div>
    </article>
  )
};

export default Product;