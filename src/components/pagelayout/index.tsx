import * as React from 'react';
import * as Header from '../header';

const Page = (props: React.PropsWithChildren<{}>) => (
    <>
        <Header.Component />
        {props.children}
    </>
);

export const Component = Page;
