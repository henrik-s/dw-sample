import * as React from 'react';
import Drawer from 'rc-drawer';

import styles from './styles.module.scss';

import { RestAPIClient } from '../../../api';

import * as Image from '../image';
import * as Information from '../info';
import * as types from '../types';

interface InitialProps {
    id: number;
    published: boolean;
    type: string;
}

interface Props {
    initialProps: InitialProps;
    fetch: boolean;
    selected: boolean;
    setSelected: (id: number) => void;
}

const Card = (props: Props) => {
    const [fetchedData, setFetchedData] = React.useState(null as types.Product);
    const [imageUri, setImageUri] = React.useState(null as string);

    function getElement(
        key: types.ElementKey,
        data: types.Product
    ): types.Element {
        if (data == null) return null;
        for (let elem of data.elements) {
            if (elem.name === key) {
                return elem;
            }
        }
        return null;
    }

    function getPriceLabel(): string {
        const price = getElement(types.ElementKey.Price, fetchedData)
            .value as types.PriceAsset;
        return `${price.value} ${price.unitAbbreviation}`;
    }

    React.useEffect(() => {
        if (!props.fetch) return;

        if (!fetchedData) {
            RestAPIClient.getProduct({
                id: props.initialProps.id,
                success: productData => {
                    setFetchedData(productData);
                    fetchImageUri(productData);
                },
            });
        }
    }, [props.fetch]);

    function fetchImageUri(fetchedData: types.Product) {
        if (fetchedData == null) {
            throw Error(
                'Unable to get image uri before any product data has been fetched'
            );
        }
        const imageData = getElement(types.ElementKey.Image, fetchedData)
            .value as types.ImageAsset;
        RestAPIClient.getAsset({
            id: imageData.id,
            success: setImageUri,
        });
    }

    if (!fetchedData) {
        return <div>Static server side card</div>;
    }

    const ImageComponent = <Image.Component href={imageUri} />;

    return (
        <>
            <div
                className={`${styles.cardContainer} ${
                    props.selected ? styles.selected : ''
                }`}
                onClick={() => {
                    props.setSelected(props.initialProps.id);
                }}
            >
                {ImageComponent}
                <div className={styles.name}>
                    {getElement(types.ElementKey.Name, fetchedData).value}
                </div>
                <div className={styles.price}>{getPriceLabel()}</div>
            </div>
            <Drawer
                open={props.selected}
                onClose={() => props.setSelected(null)}
                levelMove={() => 0}
                handler={false}
                placement="right"
            >
                <div className={styles.drawer_container}>
                    <Information.Component
                        image={ImageComponent}
                        name={getElement(types.ElementKey.Name, fetchedData)}
                        color={getElement(types.ElementKey.Color, fetchedData)}
                        description={getElement(
                            types.ElementKey.Description,
                            fetchedData
                        )}
                        size={getElement(types.ElementKey.Size, fetchedData)}
                        price={getPriceLabel()}
                    />
                </div>
            </Drawer>
        </>
    );
};

export const Component = Card;
