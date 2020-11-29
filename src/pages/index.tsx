import * as React from 'react';
import { graphql } from 'gatsby';

import styles from './styles.module.scss';
import 'rc-drawer/assets/index.css';

import * as Page from '../components/pagelayout';
import * as Card from '../components/product/card';

interface ProductsResponse {
    restApiFrontendProducts: {
        success: boolean;
        total: number;
        data: Array<{
            id: number;
            published: boolean;
            type: string;
        }>;
    };
}

export default function Home({ data }: { data: ProductsResponse }) {
    const [fetchCards, setFetchCards] = React.useState(false);
    React.useEffect(() => {
        setFetchCards(true);
    }, []);

    const [selectedCard, setSelectedCard] = React.useState(null as number);

    function getCards(data: ProductsResponse) {
        const nodes: Array<React.ReactNode> = [];
        const { total = 0 } = data.restApiFrontendProducts;
        for (let i = 0; i < total; i++) {
            let initialProps = null;
            if (data.restApiFrontendProducts.data.length > i) {
                initialProps = data.restApiFrontendProducts.data[i];
            }
            nodes.push(
                <Card.Component
                    fetch={fetchCards}
                    initialProps={initialProps}
                    selected={selectedCard === initialProps?.id}
                    setSelected={setSelectedCard}
                    key={i}
                />
            );
        }

        return nodes;
    }

    return (
        <Page.Component>
            <main className={styles.container}>
                <section className={styles.resultCount}>
                    {data.restApiFrontendProducts.total} Products
                </section>
                <section className={styles.grid}>{getCards(data)}</section>
            </main>
        </Page.Component>
    );
}

export const query = graphql`
    query {
        restApiFrontendProducts {
            success
            total
            data {
                id
                published
                type
            }
        }
    }
`;
