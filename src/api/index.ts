import axios from 'axios';

import * as types from '../components/product/types';

export class RestAPIClient {
    private static baseUrl = 'https://dev-api.danielwellington.com/frontend/';

    public static getProduct(args: {
        id: number;
        success(response: types.Product): void;
        error?(error: any): void;
        always?(): void;
    }) {
        interface Response {
            success: boolean;
            data: types.Product;
        }

        axios
            .get<Response>(`${RestAPIClient.baseUrl}products/${args.id}`)
            .then(response => {
                const { data } = response.data;
                args.success(data as types.Product);
            })
            .catch(error => {
                typeof args.error === 'function' && args.error(error);
            })
            .then(() => {
                typeof args.always === 'function' && args.always();
            });
    }

    public static getAsset(args: {
        id: number;
        success(uri: string): void;
        error?(error: any): void;
        always?(): void;
    }) {
        interface Response {
            success: boolean;
            data: {
                id: string;
                type: string;
                uri?: string;
            };
        }

        axios
            .get<Response>(`${RestAPIClient.baseUrl}assets/${args.id}`)
            .then(response => {
                const { data } = response.data;
                args.success(data.uri);
            })
            .catch(error => {
                typeof args.error === 'function' && args.error(error);
            })
            .then(() => {
                typeof args.always === 'function' && args.always();
            });
    }
}
