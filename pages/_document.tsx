import React, { ReactNode } from 'react';
import { Html, Head, Main, NextScript } from 'next/document';


function Document(): ReactNode {
    return (
        <Html lang='en'>
            <Head />
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
export default Document;
