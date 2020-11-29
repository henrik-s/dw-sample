import * as React from 'react';

import styles from './styles.module.scss';

interface Props {
    href: string;
}

const Image = (props: Props) => {
    return (
        <div className={styles.container}>
            <img src={props.href} />
        </div>
    );
};

export const Component = Image;
