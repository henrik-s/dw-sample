import * as React from 'react';
import styles from './styles.module.scss';

import Icon from '../../assets/icons/cart.svg';

const Header = () => {
    return (
        <header className={styles.container}>
            <div className={styles.logo}>WD</div>
            <div className={styles.links}>
                <a href="#">New</a>
                <a href="#">All watches</a>
                <a href="#">Accessories</a>
                <a href="#">Watch straps</a>
                <a href="#">Gift cards</a>
                <a href="#">Store locations</a>
            </div>
            <div className={styles.icon}>
                <Icon />
            </div>
        </header>
    );
};

export const Component = Header;
