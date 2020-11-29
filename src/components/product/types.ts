export interface PriceAsset {
    unit: string;
    unitAbbreviation: string;
    value: string;
}

export interface ImageAsset {
    id: number;
    subtype: string;
    type: string;
}

export type Element = {
    type: string;
    value: string | number | ImageAsset | PriceAsset;
    name: string;
    language: string;
};

export interface Product {
    id: number;
    published: boolean;
    type: string;
    key: string;
    elements: Array<Element>;
}

export enum ElementKey {
    Name = 'name',
    Price = 'price',
    Image = 'main_image',
    Description = 'description',
    Color = 'color',
    Size = 'size',
}
