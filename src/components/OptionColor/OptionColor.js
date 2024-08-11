import styles from './OptionColor.module.scss';
import clsx from 'clsx';

const OptionColor = (props) => {



    return (
        <div className={styles.colors}>
        <h3 className={styles.optionLabel}>Colors</h3>
        <ul className={styles.choices}>
            {props.colors.map(color => (
                <li key={color}>
                    <button
                        type="button"
                        onClick={() => props.changeColor(color)}
                        className={clsx(styles[props.prepareColorClassName(color)], color === props.currentColor ? styles.active : '')}
                    />
                </li>
            ))}
        </ul>
    </div>
    )
};

export default OptionColor;