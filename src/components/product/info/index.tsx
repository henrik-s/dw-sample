import * as React from 'react';
import axios from 'axios';

import styles from './styles.module.scss';
import * as types from '../types';

export interface Props {
    image: React.ReactNode;
    [types.ElementKey.Name]: types.Element;
    [types.ElementKey.Color]: types.Element;
    [types.ElementKey.Description]: types.Element;
    [types.ElementKey.Size]: types.Element;
    price: string;
}

const ProductInformation = (props: Props) => {
    return (
        <div className={styles.container}>
            {props.image && props.image}
            <div>{props[types.ElementKey.Name].value}</div>
            <div>{props[types.ElementKey.Color].value}</div>
            <div className={styles.desc}>
                {props[types.ElementKey.Description].value}
            </div>
            <div>Size: {props[types.ElementKey.Size].value}</div>
            <div>{props.price}</div>
            <button>Add to cart</button>
        </div>
    );
};

export const Component = ProductInformation;
